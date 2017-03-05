export default function addBook(options, booksData) {
	const {
		title,
		authors,
		url,
		coverUrl,
		tags,
		fetchAndSaveCover,
	} = options;
	const { lastBookId, list } = booksData;
	const id = lastBookId + 1;
	const coverExtension = coverUrl.split('.').pop();
	const coverFilename = `${id}.${coverExtension}`;

	if (typeof fetchAndSaveCover === 'function') {
		fetchAndSaveCover(options.coverUrl, coverFilename);
	}

	return {
		lastBookId: id,
		list: [...list, {
			id: String(id),
			title,
			authors,
			url,
			tags,
			coverFilename,
		}],
	};
}
