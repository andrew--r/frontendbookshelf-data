const isUrl = require('./is-url');

describe('is-url', () => {
	test('should return error string if given value is not a valid url', () => {
		expect(typeof isUrl('qwe')).toBe('string');
		expect(typeof isUrl('     ')).toBe('string');
		expect(typeof isUrl('http://qweqweqwe')).toBe('string');
		expect(typeof isUrl('qwe.ru')).toBe('string');
	});

	test('should return true if given value is a valid url', () => {
		expect(isUrl('www.andrew-r.ru')).toBe(true);
		expect(isUrl('http://andrew-r.ru')).toBe(true);
		expect(isUrl('https://google.com')).toBe(true);
		expect(isUrl('https://vk.com')).toBe(true);
		expect(isUrl('https://t.me')).toBe(true);
	});
});
