const removeBooks = require('./remove-books');

const sampleBooksData = {
	list: [
		{ id: '0' },
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
	],
};

describe('remove-book', () => {
	test('should not modify books data if book does not exist', () => {
		const emptyBooksData = {
			list: [],
		};

		expect(removeBooks(['1'])(emptyBooksData)).toEqual(emptyBooksData);
		expect(removeBooks(['1234'])(sampleBooksData)).toEqual(sampleBooksData);
	});

	test('shoud delete existing book from books data', () => {
		expect(removeBooks(['1'])(sampleBooksData)).toEqual({
			list: [
				{ id: '0' },
				{ id: '2' },
				{ id: '3' },
			],
		});

		expect(removeBooks(['2'])(sampleBooksData)).toEqual({
			list: [
				{ id: '0' },
				{ id: '1' },
				{ id: '3' },
			],
		});
	});
});
