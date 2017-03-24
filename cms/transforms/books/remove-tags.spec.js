import removeTags from './remove-tags';

const sampleBooksData = {
	list: [
		{ tags: ['1', '2', '3'] },
		{ tags: ['2', '4', '6'] },
		{ tags: ['3', '6', '9'] },
	],
};

describe('remove-tag', () => {
	test('should not modify books data if tag does not exist', () => {
		const emptyBooksData = {
			list: [],
		};

		expect(removeTags(['1'])(emptyBooksData)).toEqual(emptyBooksData);
		expect(removeTags(['1234'])(sampleBooksData)).toEqual(sampleBooksData);
	});

	test('shoud delete existing tag from books data', () => {
		expect(removeTags(['1'])(sampleBooksData)).toEqual({
			list: [
				{ tags: ['2', '3'] },
				{ tags: ['2', '4', '6'] },
				{ tags: ['3', '6', '9'] },
			],
		});
		expect(removeTags(['1', '2', '3'])(sampleBooksData)).toEqual({
			list: [
				{ tags: [] },
				{ tags: ['4', '6'] },
				{ tags: ['6', '9'] },
			],
		});
	});
});
