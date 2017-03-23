import pluralize from './pluralize';

describe('pluralize', () => {
	test('should return return plural or non-plural word variant depending on given count', () => {
		Array.from({ length: 100 }, (index) => index).forEach((index) => {
			if (index === 1) {
				expect(pluralize(['tag', 'tags'], index)).toBe('tag');
			} else {
				expect(pluralize(['tag', 'tags'], index)).toBe('tags');
			}
		});
	});
});
