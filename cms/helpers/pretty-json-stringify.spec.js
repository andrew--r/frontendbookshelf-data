const prettyJSONStringify = require('./pretty-json-stringify');

describe('prettyJSONStringify', () => {
	test('should stringify data to JSON and format it with two space indentation', () => {
		const data = {
			firstName: 'Andrew',
			lastName: 'Romanov',
			age: 19,
			interests: ['programming', 'music', 'design'],
		};

		const expectedResult = `{
  "firstName": "Andrew",
  "lastName": "Romanov",
  "age": 19,
  "interests": [
    "programming",
    "music",
    "design"
  ]
}`;

		expect(prettyJSONStringify(data)).toEqual(expectedResult);
	});
});
