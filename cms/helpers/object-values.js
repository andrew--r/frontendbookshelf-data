module.exports = function objectValues(object) {
	return Object.keys(object).map((key) => object[key]);
};
