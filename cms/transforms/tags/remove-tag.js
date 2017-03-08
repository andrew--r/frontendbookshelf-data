export default function removeTag(tagId, tagsData) {
	const { ids, dictionary } = tagsData;

	return {
		...tagsData,
		ids: ids.filter((id) => id !== tagId),
		dictionary: Object.keys(dictionary).reduce((acc, id) => {
			if (id !== tagId) {
				acc[id] = dictionary[id];
			}

			return acc;
		}, {}),
	};
}
