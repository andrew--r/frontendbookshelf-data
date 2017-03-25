import program from 'commander';

import PATHS from './PATHS';
import readFile from './fs/read-file';
import writeFile from './fs/write-file';
import unlink from './fs/unlink';
import prettyJSONStringify from './helpers/pretty-json-stringify';

import removeBooksFromBooksData from './transforms/books/remove-books';

program
	.version('1.0.0')
	.description('Removes given books from the books data')
	.option('-i, --ids [ids]', 'books ids splitted by commas')
	.parse(process.argv);

const trim = (string) => string.trim();
const booksIds = (program.ids || '').split(',').map(trim).filter(Boolean);

if (!booksIds.length) {
	console.log('Option -i (--ids) is required');
} else {
	console.log('Removing books from the books data...');
	readFile(PATHS.files.books)
		.then(JSON.parse)
		.then((parsedData) => Promise
			.all(
				parsedData.list
					.filter((book) => booksIds.includes(book.id))
					.map((book) => unlink(`${PATHS.folders.covers}/${book.coverFilename}`)),
			)
			.then(() => parsedData),
		)
		.then(removeBooksFromBooksData(booksIds))
		.then(prettyJSONStringify)
		.then(writeFile(PATHS.files.books))
		.then(() => console.log('Done!'))
		.catch(console.log);
}
