import isRequired from '../validators/is-required';

export default [{
	type: 'input',
	name: 'name',
	message: 'Название тега:',
	validate: isRequired,
}];
