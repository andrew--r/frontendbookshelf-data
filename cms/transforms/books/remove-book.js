export default function removeBook(id, booksData) {
	const { list } = booksData;

	return {
		list: list.filter((book) => book.id !== id),
	};
}
