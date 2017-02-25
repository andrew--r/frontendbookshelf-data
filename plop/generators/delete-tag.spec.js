import {
	removeTagFromTagsData,
	removeTagFromBooksData,
} from './delete-tag';

const sampleTagsData = {
	ids: ['1', '2', '3'],
	dictionary: {
		1: 'qwe',
		2: 'asd',
		3: 'zxc',
	},
};

const sampleTagsDataWithoutTag1 = {
	ids: ['2', '3'],
	dictionary: {
		2: 'asd',
		3: 'zxc',
	},
};

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

describe('removeTagFromTagsData', () => {
	test('should not modify tags data if tag does not exist', () => {
		const emptyData = {
			ids: [],
			dictionary: {},
		};

		expect(removeTagFromTagsData('1', emptyData)).toEqual(emptyData);
		expect(removeTagFromTagsData('5', sampleTagsData)).toEqual(sampleTagsData);
	});

	test('should delete existing tag from tags data', () => {
		expect(removeTagFromTagsData('1', sampleTagsData)).toEqual(sampleTagsDataWithoutTag1);
	});
});

describe('removeTagFromBooksData', () => {
	test('should no modify books data if tag does not exist', () => {
		const emptyBooksData = {
			list: [],
		};

		expect(removeTagFromBooksData('1', emptyBooksData)).toEqual(emptyBooksData);
		expect(removeTagFromBooksData('1234', sampleBooksData)).toEqual(sampleBooksData);
	});

	test('shoud delete existing tag from books data', () => {
		expect(removeTagFromBooksData('1', sampleBooksData)).toEqual(sampleBooksDataWithoutTag1);
		expect(removeTagFromBooksData('2', sampleBooksData)).toEqual(sampleBooksDataWithoutTag2);
	});
});
