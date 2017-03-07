import PATHS from '../paths';
import readFile from '../fs/read-file';
import unlink from '../fs/unlink';

import transformJSONFile from '../helpers/transform-json-file';
import removeBook from '../transforms/books/remove-book';
import prompts from '../prompts/delete-book';

export default {
	prompts,
	actions: [
		({ id }) => readFile(PATHS.files.books)
			.then(JSON.parse)
			.then((booksData) => booksData.list.find((book) => book.id === id))
			.then((bookToRemove) => unlink(`${PATHS.folders.covers}/${bookToRemove.coverFilename}`))
			.then(() => `Обложка книги #${id} удалена`)
			.catch(console.error),
		({ id }) => transformJSONFile(PATHS.files.books, removeBook.bind(null, id)).then(() => `Книга #${id} удалена`),
	],
};
