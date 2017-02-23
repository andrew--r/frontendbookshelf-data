import fs from 'fs';

export default function transformJSONFile(path, transformFn) {
	let fileContents;

	try {
		fileContents = JSON.parse(fs.readFileSync(path).toString());
	} catch (error) {
		console.log('Error occurred while parsing file contents', path);
		console.log(error);
		return false;
	}

	fs.writeFileSync(path, JSON.stringify(transformFn(fileContents)));
	return true;
}
