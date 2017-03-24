import removeTags from './remove-tags';

const sampleTagsData = {
	ids: ['1', '2', '3'],
	dictionary: {
		1: 'qwe',
		2: 'asd',
		3: 'zxc',
	},
};

describe('remove-tags', () => {
	test('should not modify tags data if tag does not exist', () => {
		const emptyData = {
			ids: [],
			dictionary: {},
		};

		expect(removeTags(['qwerty'], emptyData)).toEqual(emptyData);
		expect(removeTags(['hello world'], sampleTagsData)).toEqual(sampleTagsData);
	});

	test('should delete existing tag from tags data', () => {
		expect(removeTags(['qwe'], sampleTagsData)).toEqual({
			ids: ['2', '3'],
			dictionary: {
				2: 'asd',
				3: 'zxc',
			},
		});

		expect(removeTags(['qwe', 'zxc'], sampleTagsData)).toEqual({
			ids: ['2'],
			dictionary: {
				2: 'asd',
			},
		});
	});
});
