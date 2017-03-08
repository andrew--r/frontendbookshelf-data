import combineValidators from '../../validators/combine-validators';
import isRequired from '../../validators/is-required';
import isNumeric from '../../validators/is-numeric';

export default [{
	type: 'input',
	name: 'id',
	message: 'ID книги:',
	validate: combineValidators(isRequired, isNumeric),
}];
