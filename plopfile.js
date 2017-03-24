import addBook from './cms/generators/add-book';
import deleteBook from './cms/generators/delete-book';

module.exports = (plop) => {
	plop.setGenerator('Добавить книгу', addBook);
	plop.setGenerator('Удалить книгу', deleteBook);
};
