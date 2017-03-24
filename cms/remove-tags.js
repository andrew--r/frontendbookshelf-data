import program from 'commander';

import PATHS from './PATHS';
import readFile from './fs/read-file';
import writeFile from './fs/write-file';
import prettyJSONStringify from './helpers/pretty-json-stringify';

import removeTagsFromTagsData from './transforms/tags/remove-tags';
import removeTagsFromBooksData from './transforms/books/remove-tags';

program
	.version('1.0.0')
	.description('Removes given tags from the books and tags data')
	.option('-n, --names [names]', 'tags names splitted by commas')
	.parse(process.argv);

const trim = (string) => string.trim();
const tagsNames = (program.names || '').split(',').map(trim).filter(Boolean);

if (!tagsNames.length) {
	console.log('Option -n (--names) is required');
} else {
	let tagsIds = [];

	console.log('Removing tags from the tags data...');
	readFile(PATHS.files.tags)
		.then(JSON.parse)
		.then((parsedData) => {
			const { dictionary } = parsedData;

			tagsIds = Object
				.keys(dictionary)
				.filter((id) => tagsNames.includes(dictionary[id]));

			return parsedData;
		})
		.then((parsedData) => removeTagsFromTagsData(tagsIds)(parsedData))
		.then(prettyJSONStringify)
		.then(writeFile(PATHS.files.tags))
		.then(() => console.log('Removal from the tags data successfully completed'))
		.catch(console.log);

	console.log('Removing tags from the books data...');
	readFile(PATHS.files.books)
		.then(JSON.parse)
		.then((parsedData) => removeTagsFromBooksData(tagsIds)(parsedData))
		.then(prettyJSONStringify)
		.then(writeFile(PATHS.files.books))
		.then(() => console.log('Removal from the books data successfully completed'))
		.catch(console.log);
}
