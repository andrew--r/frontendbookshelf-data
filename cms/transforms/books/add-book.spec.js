import addBook from './add-book';

const emptySampleData = {
	list: [],
};

const sampleData = {
	list: [
		{
			id: '0',
			title: 'Отзывчивый веб-дизайн',
			authors: ['Итан Маркотт'],
			url: 'http://www.ozon.ru/context/detail/id/8747299/',
			thumbnail: 'responsive-webdesign.jpg',
			tags: ['1', '2', '3'],
		},
	],
};

describe('create-book', () => {
	test('should add new book to books data and increment it\'s id', () => {
		const result = addBook({
			title: 'Отзывчивый веб-дизайн',
			authors: ['Итан Маркотт'],
			url: 'http://www.ozon.ru/context/detail/id/8747299/',
			thumbnail: 'responsive-webdesign.jpg',
			tags: ['1', '2', '3'],
		}, emptySampleData);

		expect(result).toEqual(sampleData);
	});
});
