const fs = require('fs');

/**
 * Wrapper around fs.unlink()
 *
 * @param  {String} path
 * @return {Promise}
 */
module.exports = function unlink(path) {
	return new Promise((resolve, reject) => {
		fs.unlink(path, (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
};
