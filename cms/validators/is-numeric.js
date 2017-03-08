/**
 * Checks if value is numeric
 *
 * @param {String} value
 * @return {Boolean|String} string represents an error
 */
export default function isNumeric(value) {
	if (!(/^\d*$/g).test(value)) {
		return 'Идентификатор тега должен быть числом';
	}

	return true;
}
