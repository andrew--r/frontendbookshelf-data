import isRequired from '../../validators/is-required';

export default [{
	type: 'input',
	name: 'tagsString',
	message: 'Названия тегов (через запятую):',
	validate: isRequired,
}];
