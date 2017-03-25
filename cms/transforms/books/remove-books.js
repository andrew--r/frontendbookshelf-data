module.exports = function removeBook(booksIds) {
	return (booksData) => {
		const { list } = booksData;

		return Object.assign({}, booksData, {
			list: list.filter((book) => !booksIds.includes(book.id)),
		});
	};
};
