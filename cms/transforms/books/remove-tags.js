module.exports = function removeTagFromBooksData(tagsIds) {
	return (booksData) => {
		const { list } = booksData;

		return Object.assign({}, booksData, {
			list: list.map((book) => Object.assign({}, book, {
				tags: book.tags.filter((id) => !tagsIds.includes(id)),
			})),
		});
	};
};
