module.exports = function addBook(options, booksData) {
	const {
		title,
		authors,
		url,
		coverUrl,
		tags,
		fetchAndSaveCover,
	} = options;
	const id = booksData.lastBookId + 1;
	const coverExtension = coverUrl.split('.').pop();
	const coverFilename = `${id}.${coverExtension}`;

	if (typeof fetchAndSaveCover === 'function') {
		fetchAndSaveCover(options.coverUrl, coverFilename);
	}

	return Object.assign({}, booksData, {
		lastBookId: id,
		list: [...booksData.list, {
			id: String(id),
			title,
			authors,
			url,
			tags,
			coverFilename,
		}],
	});
};
