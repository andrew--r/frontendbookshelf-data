export default function removeTagFromBooksData(tagId, booksData) {
	const { list } = booksData;

	return {
		list: list.map((book) => ({
			...book,
			tags: book.tags.filter((id) => id !== tagId),
		})),
	};
}
