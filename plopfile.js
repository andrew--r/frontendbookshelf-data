import addBook from './cms/generators/add-book';
import deleteBook from './cms/generators/delete-book';
import createTags from './cms/generators/create-tags';
import deleteTag from './cms/generators/delete-tag';

module.exports = (plop) => {
	plop.setGenerator('Добавить книгу', addBook);
	plop.setGenerator('Удалить книгу', deleteBook);
	plop.setGenerator('Создать теги', createTags);
	plop.setGenerator('Удалить тег', deleteTag);
};
