export default function isTag(value) {
	if (!(/^\d*$/g).test(value)) {
		return 'Идентификатор тега должен быть числом';
	}

	return true;
}
