/**
 * Adds new tags to tagsData
 *
 * @param {String[]} tags
 * @param {Object} tagsData
 * @return {Object} updated tags data
 */
export default function addTag(tags, tagsData) {
	return tags.reduce((result, tagName) => {
		const id = result.lastTagId + 1;

		return {
			...result,
			lastTagId: id,
			ids: [...result.ids, String(id)],
			dictionary: {
				...result.dictionary,
				[id]: tagName,
			},
		};
	}, tagsData);
}
