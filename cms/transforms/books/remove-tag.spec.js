import removeTag from './remove-tag';

const sampleBooksData = {
	list: [
		{
			tags: ['1', '2', '3'],
		},
		{
			tags: ['2', '4', '6'],
		},
		{
			tags: ['3', '6', '9'],
		},
	],
};

const sampleBooksDataWithoutTag1 = {
	list: [
		{
			tags: ['2', '3'],
		},
		{
			tags: ['2', '4', '6'],
		},
		{
			tags: ['3', '6', '9'],
		},
	],
};

const sampleBooksDataWithoutTag2 = {
	list: [
		{
			tags: ['1', '3'],
		},
		{
			tags: ['4', '6'],
		},
		{
			tags: ['3', '6', '9'],
		},
	],
};

describe('remove-tag', () => {
	test('should no modify books data if tag does not exist', () => {
		const emptyBooksData = {
			list: [],
		};

		expect(removeTag('1', emptyBooksData)).toEqual(emptyBooksData);
		expect(removeTag('1234', sampleBooksData)).toEqual(sampleBooksData);
	});

	test('shoud delete existing tag from books data', () => {
		expect(removeTag('1', sampleBooksData)).toEqual(sampleBooksDataWithoutTag1);
		expect(removeTag('2', sampleBooksData)).toEqual(sampleBooksDataWithoutTag2);
	});
});
