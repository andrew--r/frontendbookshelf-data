#!/usr/bin/env node

const program = require('commander');

const PATHS = require('./paths');
const readFile = require('./fs/read-file');

program
	.version('1.1.0')
	.description('Lists existing tags')
	.parse(process.argv);

readFile(PATHS.files.tags)
	.then(JSON.parse)
	.then((parsedData) => {
		const { dictionary } = parsedData;

		console.log(Object.keys(dictionary).map((id) => `#${id} ${dictionary[id]}`).join('\n'));
	})
	.catch(console.log);
