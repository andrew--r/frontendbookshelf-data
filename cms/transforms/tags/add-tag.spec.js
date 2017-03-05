import addTag from './add-tag';

describe('add-tag', () => {
	test('should add new tag to empty tags data', () => {
		const data = {
			lastTagId: -1,
			ids: [],
			dictionary: {},
		};
		const expectedResult = {
			lastTagId: 0,
			ids: ['0'],
			dictionary: {
				0: 'qwe',
			},
		};

		expect(addTag('qwe', data)).toEqual(expectedResult);
	});

	test('should add new tag to tag data with existing tags', () => {
		const data = {
			lastTagId: 1,
			ids: ['0', '1'],
			dictionary: {
				0: 'qwe',
				1: 'asd',
			},
		};
		const expectedResult = {
			lastTagId: 2,
			ids: [...data.ids, '2'],
			dictionary: {
				...data.dictionary,
				2: 'zxc',
			},
		};

		expect(addTag('zxc', data)).toEqual(expectedResult);
	});
});
