import program from 'commander';

import PATHS from './PATHS';
import readFile from './fs/read-file';

program
	.version('1.0.0')
	.description('Lists existing books')
	.parse(process.argv);

function createRenderBookFn(tagsData) {
	const { dictionary } = tagsData;

	return (book) => {
		let result = '';

		result += `#${book.id}\n`;
		result += `Title: ${book.title}\n`;
		result += `Authors: ${book.authors.join(', ')}\n`;
		result += `URL: ${book.url}\n`;
		result += `Tags: ${book.tags.map((id) => dictionary[id]).join(', ')}\n`;

		return result;
	};
}

Promise
	.all([
		readFile(PATHS.files.tags).then(JSON.parse),
		readFile(PATHS.files.books).then(JSON.parse),
	])
	.then(([tagsData, booksData]) => {
		console.log(booksData.list.map(createRenderBookFn(tagsData)).join('\n\n'));
	})
	.catch(console.log);
