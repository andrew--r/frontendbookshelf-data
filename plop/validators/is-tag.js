import isRequired from './is-required';

export default function isTag(value) {
	if (typeof isRequired(value) === 'string') {
		return isRequired(value);
	}

	if (!(/^\d*$/g).test(value)) {
		return 'Идентификатор тега должен быть числом';
	}

	return true;
}
