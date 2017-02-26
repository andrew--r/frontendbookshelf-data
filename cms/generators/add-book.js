import fs from 'fs';
import { PATHS } from '../config';
import combineValidators from '../validators/combine-validators';
import isRequired from '../validators/is-required';
import isUrl from '../validators/is-url';

let tagsData = {
	ids: [],
	dictionary: {},
};

try {
	tagsData = JSON.parse(fs.readFileSync(PATHS.files.tags));
} catch (error) {
	console.log('Error occured while parsing tags data', error);
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
			name: 'thumbnailUrl',
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
	actions: [],
};
