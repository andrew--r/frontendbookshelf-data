import { PATHS } from '../config';
import isRequired from '../validators/is-required';
import transformJSONFile from '../transform-json-file';

export default {
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'Название тега:',
		validate: isRequired,
	}],
	actions: [
		({ name }) => transformJSONFile(PATHS.files.tags, createTag.bind(null, name)),
	],
};

export function createTag(tagName, tagsData) {
	const { ids, dictionary } = tagsData;
	const lastTagId = ids[ids.length - 1] || -1;
	const newTagId = String(Number(lastTagId) + 1);

	const result = {
		ids: [...ids, newTagId],
		dictionary: {
			...dictionary,
			[newTagId]: tagName,
		},
	};

	return result;
}
