import PATHS from '../../paths';
import addTags from '../../transforms/tags/add-tags';
import transformJSONFile from '../../helpers/transform-json-file';

export default [
	({ tagsString }) => Promise
		.resolve()
		.then(() => {
			const tags = tagsString.split(',').map((tag) => tag.trim());
			const transformation = (tagsData) => addTags(tags, tagsData);

			return Promise.all([
				tags,
				transformJSONFile(PATHS.files.tags, transformation),
			]);
		})
		.then(([tags]) => {
			const isMultiple = tags.length > 1;

			return `Тег${isMultiple ? 'и' : ''} ${tagsString} добавлен${isMultiple ? 'ы' : ''}`;
		})
		.catch(console.log),
];
