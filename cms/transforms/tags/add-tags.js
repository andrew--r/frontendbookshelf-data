/**
 * Adds new tags to tagsData
 *
 * @param {String[]} tags
 * @param {Object} tagsData
 * @return {Object} updated tags data
 */
module.exports = function addTag(tags, tagsData) {
	return tags.reduce((result, tagName) => {
		const id = result.lastTagId + 1;

		return Object.assign({}, result, {
			lastTagId: id,
			ids: [...result.ids, String(id)],
			dictionary: Object.assign({}, result.dictionary, {
				[id]: tagName,
			}),
		});
	}, tagsData);
};
