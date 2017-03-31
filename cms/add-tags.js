#!/usr/bin/env node

const program = require('commander');

const PATHS = require('./paths');
const readFile = require('./fs/read-file');
const writeFile = require('./fs/write-file');
const pluralize = require('./helpers/pluralize');
const prettyJSONStringify = require('./helpers/pretty-json-stringify');
const objectValues = require('./helpers/object-values');

const addTagsToTagsData = require('./transforms/tags/add-tags');

program
	.version('1.0.0')
	.option('-n, --names <names>', 'tags names splitted by commas')
	.parse(process.argv);

const trim = (string) => string.trim();
const tags = (program.names || '').split(',').map(trim).filter(Boolean);

if (!tags.length) {
	console.log('Option -n (--names) is required');
} else {
	readFile(PATHS.files.tags)
		.then(JSON.parse)
		.then((parsedData) => {
			const toLowerCase = (string) => string.toLowerCase();
			const existingTags = objectValues(parsedData.dictionary).map(toLowerCase);

			const { newTags, duplicateTags } = tags.reduce((result, tag) => {
				if (existingTags.includes(tag.toLowerCase())) {
					result.duplicateTags.push(tag);
				} else {
					result.newTags.push(tag);
				}

				return result;
			}, {
				newTags: [],
				duplicateTags: [],
			});

			if (duplicateTags.length) {
				console.log(`${pluralize(['Tag', 'Tags'], duplicateTags.length)} ${duplicateTags.join(', ')} already exist`);
			}

			if (newTags.length) {
				console.log(`Adding ${pluralize(['tag', 'tags'], newTags.length)} ${newTags.join(', ')}...`);
			}

			return addTagsToTagsData(newTags, parsedData);
		})
		.then(prettyJSONStringify)
		.then(writeFile(PATHS.files.tags))
		.then(() => console.log('Done!'))
		.catch(console.log);
}
