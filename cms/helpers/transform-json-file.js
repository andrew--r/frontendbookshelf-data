import readFile from '../fs/read-file';
import writeFile from '../fs/write-file';

export default function transformJSONFile(path, transformFn) {
	return readFile(path)
		.then(JSON.parse)
		.then(transformFn)
		.then(JSON.stringify)
		.then((stringifiedJSON) => writeFile(path, stringifiedJSON))
		.catch((error) => {
			console.log('Error occurred while parsing file contents', path, error);
			throw error;
		});
}
