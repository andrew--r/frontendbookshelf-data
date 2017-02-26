import removeTag from './remove-tag';

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

describe('remove-tag', () => {
	test('should not modify tags data if tag does not exist', () => {
		const emptyData = {
			ids: [],
			dictionary: {},
		};

		expect(removeTag('1', emptyData)).toEqual(emptyData);
		expect(removeTag('5', sampleTagsData)).toEqual(sampleTagsData);
	});

	test('should delete existing tag from tags data', () => {
		expect(removeTag('1', sampleTagsData)).toEqual(sampleTagsDataWithoutTag1);
	});
});
