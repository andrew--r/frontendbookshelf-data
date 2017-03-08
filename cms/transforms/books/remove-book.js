export default function removeBook(id, booksData) {
	const { list } = booksData;

	return {
		...booksData,
		list: list.filter((book) => book.id !== id),
	};
}
