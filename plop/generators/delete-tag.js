import { PATHS } from '../config';
import isTag from '../validators/is-tag';
import transformJSONFile from '../transform-json-file';

export function deleteTagFromTagsData(tagId, tagsData) {
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

export function deleteTagFromBooksData(tagId, booksData) {
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
		validate: isTag,
	}],
	actions: [
		({ id }) => transformJSONFile(PATHS.files.tags, deleteTagFromTagsData.bind(null, id)),
		({ id }) => transformJSONFile(PATHS.files.books, deleteTagFromBooksData.bind(null, id)),
	],
};
