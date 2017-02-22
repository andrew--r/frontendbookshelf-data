import fs from 'fs';
import path from 'path';
import isRequired from '../validators/is-required';

export default {
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'ID тега:',
		validate: isRequired,
	}],
	actions: [deleteTag],
};

function deleteTag({ name }) {
	return true;
}
