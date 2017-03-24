export default function removeBook(booksIds) {
	return (booksData) => {
		const { list } = booksData;

		return {
			...booksData,
			list: list.filter((book) => !booksIds.includes(book.id)),
		};
	};
}
