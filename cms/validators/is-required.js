/**
 * Checks if value is not missing
 *
 * @param {String} value
 * @return {Boolean|String} string represents an error
 */
module.exports = function isRequired(value) {
	if (!value || value.trim() === '') {
		return 'should not be empty';
	}

	return true;
};
