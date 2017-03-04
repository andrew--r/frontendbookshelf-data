import fs from 'fs';
import path from 'path';
import request from 'request';

import { PATHS } from '../config';

import readFile from '../fs/read-file';
import writeFile from '../fs/write-file';

import combineValidators from '../validators/combine-validators';
import isRequired from '../validators/is-required';
import isUrl from '../validators/is-url';

import addBook from '../transforms/books/add-book';

let tagsData = {
	ids: [],
	dictionary: {},
};

try {
	tagsData = JSON.parse(fs.readFileSync(PATHS.files.tags));
} catch (error) {
	console.log('Error occured while parsing tags data', error);
}

function fetchAndSaveCover(coverUrl, filename) {
	request(coverUrl).pipe(fs.createWriteStream(path.resolve(__dirname, `../../data/covers/${filename}`)));
}

export default {
	prompts: [
		{
			type: 'input',
			name: 'title',
			message: 'Название книги:',
			validate: isRequired,
		},
		{
			type: 'input',
			name: 'authors',
			message: 'Авторы через запятую:',
			validate: isRequired,
		},
		{
			type: 'input',
			name: 'url',
			message: 'Ссылка на книгу:',
			validate: combineValidators(isRequired, isUrl),
		},
		{
			type: 'input',
			name: 'coverUrl',
			message: 'Ссылка на обложку книги:',
			validate: combineValidators(isRequired, isUrl),
		},
		{
			type: 'checkbox',
			name: 'tags',
			message: 'Теги:',
			choices: tagsData.ids.map((tagId) => {
				return {
					name: tagsData.dictionary[tagId],
					value: tagId,
				};
			}),
		},
	],
	actions: [
		(options) => readFile(PATHS.files.books)
			.then(JSON.parse)
			.then((booksData) => addBook({
				fetchAndSaveCover,
				title: options.title,
				authors: options.authors.split(',').map((author) => author.trim()),
				url: options.url,
				coverUrl: options.coverUrl,
				tags: options.tags,
			}, booksData))
			.then(JSON.stringify)
			.then(writeFile.bind(null, PATHS.files.books))
			.then(() => 'Книга добавлена')
			.catch(console.error),
	],
};
