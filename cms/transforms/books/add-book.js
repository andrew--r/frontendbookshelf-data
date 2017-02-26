export default function addBook(options, booksData) {
	const { list } = booksData;
	const lastBookId = list.length - 1;
	const newBookId = String(lastBookId + 1);

	return {
		list: [...list, {
			id: newBookId,
			title: options.title,
			authors: options.authors,
			url: options.url,
			thumbnail: options.thumbnail,
			tags: options.tags,
		}],
	};
}
