import addBook from './cms/generators/add-book';
import createTag from './cms/generators/create-tag';
import deleteTag from './cms/generators/delete-tag';

module.exports = (plop) => {
	plop.setGenerator('Добавить книгу', addBook);
	plop.setGenerator('Создать тег', createTag);
	plop.setGenerator('Удалить тег', deleteTag);
};
