import isNumeric from './is-numeric';

describe('is-numeric', () => {
	test('should return error string if given value is not numeric', () => {
		expect(typeof isNumeric('qwe')).toBe('string');
		expect(typeof isNumeric('12asd')).toBe('string');
		expect(typeof isNumeric('asd123asd')).toBe('string');
	});

	test('should return true if given value is numeric', () => {
		expect(isNumeric('1')).toBe(true);
		expect(isNumeric('2')).toBe(true);
		expect(isNumeric('12')).toBe(true);
		expect(isNumeric('123456')).toBe(true);
	});
});
