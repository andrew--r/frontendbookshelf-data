import createTag from './plop/generators/create-tag';
import removeTag from './plop/generators/remove-tag';

module.exports = (plop) => {
  plop.setGenerator('Создать тег', createTag);
  plop.setGenerator('Удалить тег', removeTag);
};
