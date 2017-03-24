import addBook from './cms/generators/add-book';

module.exports = (plop) => {
	plop.setGenerator('Добавить книгу', addBook);
};
