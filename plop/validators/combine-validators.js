export default function combineValidators(...validators) {
	return (value) => {
		let currentResult;

		validators.some((validator) => {
			currentResult = validator(value);
			return typeof currentResult === 'string';
		});

		return currentResult;
	};
}
