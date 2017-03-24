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

		expect(removeTags(['1234'])(emptyData)).toEqual(emptyData);
		expect(removeTags(['5678'])(sampleTagsData)).toEqual(sampleTagsData);
	});

	test('should delete existing tag from tags data', () => {
		expect(removeTags(['1'])(sampleTagsData)).toEqual({
			ids: ['2', '3'],
			dictionary: {
				2: 'asd',
				3: 'zxc',
			},
		});

		expect(removeTags(['1', '3'])(sampleTagsData)).toEqual({
			ids: ['2'],
			dictionary: {
				2: 'asd',
			},
		});
	});
});
