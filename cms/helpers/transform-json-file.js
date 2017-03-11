import readFile from '../fs/read-file';
import writeFile from '../fs/write-file';

/**
 * Reads a JSON file, applies some data transformation via transformFn(JSON)
 * and writes file to file system
 *
 * @param {String} path
 * @param {Function} transformFn
 * @return {Promise}
 */
export default function transformJSONFile(path, transformFn) {
	return readFile(path)
		.then(JSON.parse)
		.then(transformFn)
		.then((data) => JSON.stringify(data, null, 2))
		.then((stringifiedJSON) => writeFile(path, stringifiedJSON))
		.catch((error) => {
			console.log('Error occurred while parsing file contents', path, error);
			throw error;
		});
}
