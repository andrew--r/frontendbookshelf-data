/**
 * Combines validators and returns a function that takes input data
 * and validates it over all validators until
 * it passes all of them or gets an error
 *
 * @param {...Function} validators
 * @return {Function} combined validators
 */
module.exports = function combineValidators(...validators) {
	return (value) => {
		let currentResult;

		validators.some((validator) => {
			currentResult = validator(value);
			return typeof currentResult === 'string';
		});

		return currentResult;
	};
};
