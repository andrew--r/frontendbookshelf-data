import combineValidators from '../validators/combine-validators';
import isRequired from '../validators/is-required';
import isNumeric from '../validators/is-numeric';

export default [{
	type: 'input',
	name: 'id',
	message: 'ID тега:',
	validate: combineValidators(isRequired, isNumeric),
}];
