/**
 * Stringifies data to formatted JSON
 *
 * @param {*} data
 * @return {String}
 */
module.exports = function prettyJSONStringify(data) {
	return JSON.stringify(data, null, 2);
};
