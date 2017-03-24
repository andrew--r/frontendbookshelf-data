/**
 * Checks if value is not missing
 *
 * @param {String} value
 * @return {Boolean|String} string represents an error
 */
export default function isRequired(value) {
	if (!value || value.trim() === '') {
		return 'should not be empty';
	}

	return true;
}
