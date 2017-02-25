import { PATHS } from '../config';
import combineValidators from '../validators/combine-validators';
import isRequired from '../validators/is-required';
import isNumeric from '../validators/is-numeric';
import transformJSONFile from '../transform-json-file';

export function removeTagFromTagsData(tagId, tagsData) {
	const { ids, dictionary } = tagsData;

	return {
		ids: ids.filter((id) => id !== tagId),
		dictionary: Object.keys(dictionary).reduce((acc, id) => {
			if (id !== tagId) {
				acc[id] = dictionary[id];
			}

			return acc;
		}, {}),
	};
}

export function removeTagFromBooksData(tagId, booksData) {
	const { list } = booksData;

	return {
		list: list.map((book) => ({
			...book,
			tags: book.tags.filter((id) => id !== tagId),
		})),
	};
}

export default {
	prompts: [{
		type: 'input',
		name: 'id',
		message: 'ID тега:',
		validate: combineValidators(isRequired, isNumeric),
	}],
	actions: [
		({ id }) => transformJSONFile(PATHS.files.tags, removeTagFromTagsData.bind(null, id)),
		({ id }) => transformJSONFile(PATHS.files.books, removeTagFromBooksData.bind(null, id)),
	],
};
