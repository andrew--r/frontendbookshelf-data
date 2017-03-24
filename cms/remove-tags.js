import program from 'commander';

import PATHS from './PATHS';
import readFile from './fs/read-file';
import writeFile from './fs/write-file';

import removeTagsFromTagsData from './transforms/tags/remove-tags';

program
	.version('1.0.0')
	.option('-n, --names [names]', 'tags names splitted by commas')
	.parse(process.argv);

if ((program.names || '').trim() === '') {
	console.log('Option -n (--names) is required');
} else {
	const trim = (string) => string.trim();
	const tags = program.names.split(',').map(trim);

	readFile(PATHS.files.tags)
		.then(JSON.parse)
		.then(removeTagsFromTagsData.bind(null, tags))
		.then((updatedData) => JSON.stringify(updatedData, null, 2))
		.then(writeFile.bind(null, PATHS.files.tags))
		.then(() => console.log('Done!'))
		.catch(console.log);
}
