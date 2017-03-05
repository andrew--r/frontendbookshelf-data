import removeBook from './remove-book';

const sampleBooksData = {
	list: [
		{ id: '0' },
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
	],
};

const sampleBooksDataWithoutBook1 = {
	list: [
		{ id: '0' },
		{ id: '2' },
		{ id: '3' },
	],
};

const sampleBooksDataWithoutBook2 = {
	list: [
		{ id: '0' },
		{ id: '1' },
		{ id: '3' },
	],
};

describe('remove-book', () => {
	test('should not modify books data if book does not exist', () => {
		const emptyBooksData = {
			list: [],
		};

		expect(removeBook('1', emptyBooksData)).toEqual(emptyBooksData);
		expect(removeBook('1234', sampleBooksData)).toEqual(sampleBooksData);
	});

	test('shoud delete existing book from books data', () => {
		expect(removeBook('1', sampleBooksData)).toEqual(sampleBooksDataWithoutBook1);
		expect(removeBook('2', sampleBooksData)).toEqual(sampleBooksDataWithoutBook2);
	});
});
