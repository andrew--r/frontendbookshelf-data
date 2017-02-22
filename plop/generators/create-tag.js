import fs from 'fs';
import path from 'path';
import isRequired from '../validators/is-required';

export default {
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'Название тега:',
		validate: isRequired,
	}],
	actions: [createTag],
};

function createTag({ name }) {
	const tagsFilePath = path.resolve(process.cwd(), './data/tags.json');
	let tagsData;

	try {
		const tagsFileContents = fs.readFileSync(tagsFilePath);
		tagsData = JSON.parse(tagsFileContents.toString());
	} catch (error) {
		console.log('Error occurred while parsing tags data');
		return false;
	}

	const lastTagId = tagsData.ids[tagsData.ids.length - 1] || -1;
	const newTagId = String(Number(lastTagId) + 1);

	tagsData.ids.push(newTagId);
	tagsData.dictionary[newTagId] = name;

	fs.writeFileSync(tagsFilePath, JSON.stringify(tagsData));

	return true;
}
