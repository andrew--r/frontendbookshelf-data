export default function removeTagFromBooksData(tagsIds) {
	return (booksData) => {
		const { list } = booksData;

		return {
			...booksData,
			list: list.map((book) => ({
				...book,
				tags: book.tags.filter((id) => !tagsIds.includes(id)),
			})),
		};
	};
}
