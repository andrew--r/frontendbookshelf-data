const URL_REGEXP = /^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/; // eslint-disable-line

export default function isUrl(value) {
	return URL_REGEXP.test(value) ? true : 'невалидный url';
}
