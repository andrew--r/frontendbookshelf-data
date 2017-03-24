import program from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import request from 'request';

import PATHS from './PATHS';
import readFile from './fs/read-file';
import writeFile from './fs/write-file';
import prettyJSONStringify from './helpers/pretty-json-stringify';

import combineValidators from './validators/combine-validators';
import isRequired from './validators/is-required';
import isUrl from './validators/is-url';

import addBookToBooksData from './transforms/books/add-book';

program
	.version('1.0.0')
	.description('Adds new book')
	.parse(process.argv);

function fetchAndSaveCover(coverUrl, filename) {
	request(coverUrl).pipe(fs.createWriteStream(`${PATHS.folders.covers}/${filename}`));
}

Promise
	.all([
		readFile(PATHS.files.tags).then(JSON.parse),
		readFile(PATHS.files.books).then(JSON.parse),
	])
	.then(([tagsData, booksData]) => Promise.all([
		booksData,
		inquirer.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'Title:',
				validate: isRequired,
			},
			{
				type: 'input',
				name: 'authors',
				message: 'Authors (separated by commas):',
				validate: isRequired,
			},
			{
				type: 'input',
				name: 'url',
				message: 'Book URL:',
				validate: combineValidators(isRequired, isUrl),
			},
			{
				type: 'input',
				name: 'coverUrl',
				message: 'Book cover URL:',
				validate: combineValidators(isRequired, isUrl),
			},
			{
				type: 'checkbox',
				name: 'tags',
				message: 'Tags (choose from existing tags; you can add new tags in the next step):',
				choices: tagsData.ids.map((tagId) => ({
					name: tagsData.dictionary[tagId],
					value: tagId,
				})),
			},
		]),
	]))
	.then(([booksData, options]) => addBookToBooksData({
		fetchAndSaveCover,
		title: options.title,
		authors: options.authors.split(',').map((author) => author.trim()),
		url: options.url,
		coverUrl: options.coverUrl,
		tags: options.tags,
	}, booksData))
	.then(prettyJSONStringify)
	.then(writeFile(PATHS.files.books))
	.then(() => console.log('Книга добавлена'))
	.catch(console.log);
