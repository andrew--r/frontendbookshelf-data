const fs = require('fs');

/**
 * Wrapper around fs.readFile()
 *
 * @param {String} path
 * @return {Promise}
 */
module.exports = function readFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(data.toString());
			}
		});
	});
};
