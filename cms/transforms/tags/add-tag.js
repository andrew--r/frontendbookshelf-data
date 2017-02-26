export default function addTag(tagName, tagsData) {
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
