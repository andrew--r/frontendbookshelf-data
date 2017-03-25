const URL_REGEXP = /^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/; // eslint-disable-line

/**
 * Checks if value is valid url according to URL_REGEXP
 *
 * @param {String} value
 * @return {Boolean|String} string represents an error
 */
module.exports = function isUrl(value) {
	return URL_REGEXP.test(value) || 'invalid url';
};
