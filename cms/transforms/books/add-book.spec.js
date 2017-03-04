import addBook from './add-book';

const options = {
	title: 'Отзывчивый веб-дизайн',
	authors: ['Итан Маркотт'],
	url: 'http://www.ozon.ru/context/detail/id/8747299/',
	coverUrl: 'http://some.server.com/0.jpg',
	tags: ['1', '2', '3'],
};

const emptySampleData = {
	list: [],
};

const sampleData = {
	list: [
		{
			id: '0',
			title: 'Отзывчивый веб-дизайн',
			authors: ['Итан Маркотт'],
			tags: ['1', '2', '3'],
			url: 'http://www.ozon.ru/context/detail/id/8747299/',
			coverFilename: '0.jpg',
		},
	],
};

describe('create-book', () => {
	test('should add new book to books data and increment it\'s id', () => {
		const result = addBook(options, emptySampleData);

		expect(result).toEqual(sampleData);
	});

	test('should call impure fetchAndSaveCoverFn with coverUrl and bookId', () => {
		let coverUrl = '';
		let coverFilename = '';

		addBook({
			...options,
			fetchAndSaveCover: (url, filename) => {
				coverUrl = url;
				coverFilename = filename;
			},
		}, emptySampleData);

		expect(coverUrl).toBe('http://some.server.com/0.jpg');
		expect(coverFilename).toBe('0.jpg');
	});
});
