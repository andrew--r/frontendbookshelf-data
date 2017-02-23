export default function isRequired(value) {
	if (!value || value.trim() === '') {
		return 'обязательно для заполнения';
	}

	return true;
}
