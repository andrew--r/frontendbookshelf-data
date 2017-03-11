import fs from 'fs';
import request from 'request';

import PATHS from '../../paths';

import readFile from '../../fs/read-file';
import writeFile from '../../fs/write-file';

import addBook from '../../transforms/books/add-book';

function fetchAndSaveCover(coverUrl, filename) {
	request(coverUrl).pipe(fs.createWriteStream(`${PATHS.folders.covers}/${filename}`));
}

export default [
	(options) => readFile(PATHS.files.books)
		.then(JSON.parse)
		.then((booksData) => addBook({
			fetchAndSaveCover,
			title: options.title,
			authors: options.authors.split(',').map((author) => author.trim()),
			url: options.url,
			coverUrl: options.coverUrl,
			tags: options.tags,
		}, booksData))
		.then(JSON.stringify)
		.then(writeFile.bind(null, PATHS.files.books))
		.then(() => 'Книга добавлена')
		.catch(console.error),
];
