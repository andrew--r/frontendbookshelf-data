import fs from 'fs';

/**
 * Wrapper around fs.writeFile()
 *
 * @param {String} path
 * @param {String|Buffer} data
 * @return {Promise}
 */
export default function writeFile(path, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(path, data, (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}
