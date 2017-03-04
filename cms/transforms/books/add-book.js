export default function addBook(options, booksData) {
	const {
		title,
		authors,
		url,
		coverUrl,
		tags,
		fetchAndSaveCover,
	} = options;
	const { list } = booksData;
	const id = String(list.length);
	const coverExtension = coverUrl.split('.').pop();
	const coverFilename = `${id}.${coverExtension}`;

	if (typeof fetchAndSaveCover === 'function') {
		fetchAndSaveCover(options.coverUrl, coverFilename);
	}

	return {
		list: [...list, {
			id,
			title,
			authors,
			url,
			tags,
			coverFilename,
		}],
	};
}
