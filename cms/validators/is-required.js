/**
 * Checks if value is not missing
 *
 * @param {String} value
 * @return {Boolean|String} string represents an error
 */
export default function isRequired(value) {
	if (!value || value.trim() === '') {
		return 'обязательно для заполнения';
	}

	return true;
}
