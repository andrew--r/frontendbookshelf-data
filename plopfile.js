import createTag from './plop/generators/create-tag';
import deleteTag from './plop/generators/delete-tag';

module.exports = (plop) => {
  plop.setGenerator('Создать тег', createTag);
  plop.setGenerator('Удалить тег', deleteTag);
};
