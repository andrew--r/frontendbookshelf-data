import fs from 'fs';

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
