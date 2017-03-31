#!/usr/bin/env node

const program = require('commander');

const PATHS = require('./paths');
const readFile = require('./fs/read-file');
const objectValues = require('./helpers/object-values');

program
	.version('1.0.0')
	.description('Lists existing tags')
	.parse(process.argv);

readFile(PATHS.files.tags)
	.then(JSON.parse)
	.then((parsedData) => {
		console.log(objectValues(parsedData.dictionary).join('\n'));
	})
	.catch(console.log);
