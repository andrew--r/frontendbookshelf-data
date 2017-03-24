import program from 'commander';

import PATHS from './PATHS';
import readFile from './fs/read-file';

program
	.version('1.0.0')
	.description('Lists all existing tags')
	.parse(process.argv);

readFile(PATHS.files.tags)
	.then(JSON.parse)
	.then((parsedData) => {
		console.log(Object.values(parsedData.dictionary).join('\n'));
	})
	.catch(console.log);
