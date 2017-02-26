import { PATHS } from '../config';
import combineValidators from '../validators/combine-validators';
import isRequired from '../validators/is-required';
import isNumeric from '../validators/is-numeric';
import transformJSONFile from '../helpers/transform-json-file';
import removeTagFromTagsData from '../transforms/tags/remove-tag';
import removeTagFromBooksData from '../transforms/books/remove-tag';

export default {
	prompts: [{
		type: 'input',
		name: 'id',
		message: 'ID тега:',
		validate: combineValidators(isRequired, isNumeric),
	}],
	actions: [
		({ id }) => transformJSONFile(PATHS.files.tags, removeTagFromTagsData.bind(null, id)).then(() => `тег #${id} удалён из списка тегов`),
		({ id }) => transformJSONFile(PATHS.files.books, removeTagFromBooksData.bind(null, id)).then(() => `тег #${id} удалён из списка книг`),
	],
};
