import fs from 'fs';

/**
 * Wrapper around fs.writeFile()
 *
 * @param {String} path
 * @param {String|Buffer} data
 * @return {Function} function that takes data and writes it to the given file
 */
export default function writeFile(path) {
	/**
	 * @param  {String|Buffer} data
	 * @return {Promise}
	 */
	return (data) => new Promise((resolve, reject) => {
		fs.writeFile(path, data, (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}
