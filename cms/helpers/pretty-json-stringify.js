/**
 * Stringifies data to formatted JSON
 *
 * @param {*} data
 * @return {String}
 */
export default function prettyJSONStringify(data) {
	return JSON.stringify(data, null, 2);
}
