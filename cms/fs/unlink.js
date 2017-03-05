import fs from 'fs';

/**
 * delete a name and possibly the file it refers to
 *
 * @param  {String} path
 * @return {Promise}
 */
export default function unlink(path) {
	return new Promise((resolve, reject) => {
		fs.unlink(path, (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}
