import { createTag } from './create-tag';

describe('create-tag', () => {
	test('should add new tag to empty tags data', () => {
		const data = {
			ids: [],
			dictionary: {},
		};
		const expectedResult = {
			ids: ['0'],
			dictionary: {
				0: 'qwe',
			},
		};

		expect(createTag('qwe', data)).toEqual(expectedResult);
	});

	test('should add new tag to tag data with existing tags', () => {
		const data = {
			ids: ['0', '1'],
			dictionary: {
				0: 'qwe',
				1: 'asd',
			},
		};
		const expectedResult = {
			ids: [...data.ids, '2'],
			dictionary: {
				...data.dictionary,
				2: 'zxc',
			},
		};

		expect(createTag('zxc', data)).toEqual(expectedResult);
	});
});
