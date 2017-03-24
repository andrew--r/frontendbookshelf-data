import program from 'commander';

import PATHS from './PATHS';
import readFile from './fs/read-file';
import writeFile from './fs/write-file';
import pluralize from './helpers/pluralize';
import prettyJSONStringify from './helpers/pretty-json-stringify';

import addTagsToTagsData from './transforms/tags/add-tags';

program
	.version('1.0.0')
	.option('-n, --names [names]', 'tags names splitted by commas')
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
			const existingTags = Object.values(parsedData.dictionary).map(toLowerCase);

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

			console.log(`${pluralize(['Tag', 'Tags'], duplicateTags.length)} ${duplicateTags.join(', ')} already exist`);

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
