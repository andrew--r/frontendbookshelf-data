module.exports = function removeTags(tagsIds) {
	return (tagsData) => {
		const { ids, dictionary } = tagsData;
		const { filteredIds, filteredDictionary } = ids.reduce((result, id) => {
			const name = dictionary[id];

			if (!tagsIds.includes(id)) {
				result.filteredIds.push(id);
				result.filteredDictionary[id] = name;
			}

			return result;
		}, {
			filteredIds: [],
			filteredDictionary: {},
		});

		return Object.assign({}, tagsData, {
			ids: filteredIds,
			dictionary: filteredDictionary,
		});
	};
};
