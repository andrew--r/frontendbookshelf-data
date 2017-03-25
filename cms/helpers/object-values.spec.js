const objectValues = require('./object-values');

describe('objectValues', () => {
	test('should return object values as an array', () => {
		const sampleObject = {
			a: 1,
			b: 2,
			c: 'hello',
			d: [1, 2, 3],
			e: { f: 'g' },
		};

		expect(objectValues(sampleObject)).toEqual([1, 2, 'hello', [1, 2, 3], { f: 'g' }]);
	});
});
