import PATHS from '../paths';
import addTag from '../transforms/tags/add-tag';
import transformJSONFile from '../helpers/transform-json-file';

import prompts from '../prompts/create-tag';

export default {
	prompts,
	actions: [
		({ name }) => transformJSONFile(PATHS.files.tags, addTag.bind(null, name)).then(() => `${name} добавлен в список тегов`),
	],
};
