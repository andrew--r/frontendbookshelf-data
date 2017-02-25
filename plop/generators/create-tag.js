import { PATHS } from '../config';
import isRequired from '../validators/is-required';
import transformJSONFile from '../transform-json-file';

export function addTag(tagName, tagsData) {
	const { ids, dictionary } = tagsData;
	const lastTagId = ids.length - 1;
	const newTagId = String(lastTagId + 1);

	return {
		ids: [...ids, newTagId],
		dictionary: {
			...dictionary,
			[newTagId]: tagName,
		},
	};
}

export default {
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'Название тега:',
		validate: isRequired,
	}],
	actions: [
		({ name }) => transformJSONFile(PATHS.files.tags, addTag.bind(null, name)),
	],
};
