import { PATHS } from '../config';
import isRequired from '../validators/is-required';
import addTag from '../transforms/tags/add-tag';
import transformJSONFile from '../helpers/transform-json-file';

export default {
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'Название тега:',
		validate: isRequired,
	}],
	actions: [
		({ name }) => transformJSONFile(PATHS.files.tags, addTag.bind(null, name)).then(() => `${name} добавлен в список тегов`),
	],
};
