#!/usr/bin/env node

const program = require('commander');

const PATHS = require('./paths');
const readFile = require('./fs/read-file');
const writeFile = require('./fs/write-file');
const unlink = require('./fs/unlink');
const prettyJSONStringify = require('./helpers/pretty-json-stringify');

const removeBooksFromBooksData = require('./transforms/books/remove-books');

program
	.version('1.0.0')
	.description('Removes given books = the books data')
	.option('-i, --ids <ids>', 'books ids splitted by commas')
	.parse(process.argv);

const trim = (string) => string.trim();
const booksIds = (program.ids || '').split(',').map(trim).filter(Boolean);

if (!booksIds.length) {
	console.log('Option -i (--ids) is required');
} else {
	console.log('Removing books from the books data...');
	readFile(PATHS.files.books)
		.then(JSON.parse)
		.then((parsedData) => {
			const deleteCoversTasks = parsedData.list
				.filter((book) => booksIds.includes(book.id))
				.map((book) => unlink(`${PATHS.folders.covers}/${book.coverFilename}`));

			return Promise
				.all(deleteCoversTasks)
				.then(() => parsedData);
		})
		.then(removeBooksFromBooksData(booksIds))
		.then(prettyJSONStringify)
		.then(writeFile(PATHS.files.books))
		.then(() => console.log('Done!'))
		.catch(console.log);
}
