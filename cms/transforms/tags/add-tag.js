export default function addTag(tagName, tagsData) {
	const { lastTagId, ids, dictionary } = tagsData;
	const tagId = lastTagId + 1;

	return {
		...tagsData,
		lastTagId: tagId,
		ids: [...ids, String(tagId)],
		dictionary: {
			...dictionary,
			[tagId]: tagName,
		},
	};
}
