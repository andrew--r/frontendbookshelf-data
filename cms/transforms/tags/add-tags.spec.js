import addTag from './add-tags';

describe('add-tag', () => {
	test('should add new tags to empty tags data', () => {
		const data = {
			lastTagId: -1,
			ids: [],
			dictionary: {},
		};
		const expectedResult = {
			lastTagId: 1,
			ids: ['0', '1'],
			dictionary: {
				0: 'qwe',
				1: 'asd',
			},
		};

		expect(addTag(['qwe', 'asd'], data)).toEqual(expectedResult);
	});

	test('should add new tags to existing tags', () => {
		const data = {
			lastTagId: 1,
			ids: ['0', '1'],
			dictionary: {
				0: 'qwe',
				1: 'asd',
			},
		};
		const expectedResult = {
			lastTagId: 3,
			ids: [...data.ids, '2', '3'],
			dictionary: {
				...data.dictionary,
				2: 'zxc',
				3: 'qweasdzxc',
			},
		};

		expect(addTag(['zxc', 'qweasdzxc'], data)).toEqual(expectedResult);
	});
});
