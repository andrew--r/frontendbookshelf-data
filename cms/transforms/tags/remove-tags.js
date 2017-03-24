export default function removeTags(tagsNames, tagsData) {
	const { dictionary } = tagsData;
	const { filteredIds, filteredDictionary } = Object
		.keys(dictionary)
		.reduce((result, id) => {
			const name = dictionary[id];

			if (!tagsNames.includes(name)) {
				result.filteredIds.push(id);
				result.filteredDictionary[id] = name;
			}

			return result;
		}, {
			filteredIds: [],
			filteredDictionary: {},
		});

	return {
		...tagsData,
		ids: filteredIds,
		dictionary: filteredDictionary,
	};
}
