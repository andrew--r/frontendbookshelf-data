const program = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const request = require('request');

const PATHS = require('./PATHS');
const readFile = require('./fs/read-file');
const writeFile = require('./fs/write-file');
const prettyJSONStringify = require('./helpers/pretty-json-stringify');

const combineValidators = require('./validators/combine-validators');
const isRequired = require('./validators/is-required');
const isUrl = require('./validators/is-url');

const addBookToBooksData = require('./transforms/books/add-book');

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
