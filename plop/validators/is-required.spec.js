import isRequired from './is-required';

describe('is-required', () => {
	test('should return error string if given value is empty or whitespace', () => {
		expect(typeof isRequired('')).toBe('string');
		expect(typeof isRequired('       ')).toBe('string');
	});

	test('should return true if given value is not empty or whitespace', () => {
		expect(isRequired('qwe')).toBe(true);
		expect(isRequired('a')).toBe(true);
		expect(isRequired('qwerqwerqwer')).toBe(true);
		expect(isRequired('   q w e   ')).toBe(true);
	});
});
