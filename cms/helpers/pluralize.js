/**
 * Pluralization
 *
 * @example pluralize(['tag', 'tags'], 2); // -> 'tags'
 * @example pluralize(['tag', 'tags'], 1); // -> 'tag'
 *
 * @param {String[]} variants
 * @param {Number} count
 * @return {String}
 */
module.exports = function pluralize(variants, count) {
	return variants[count === 1 ? 0 : 1];
};
