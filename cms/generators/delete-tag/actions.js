import PATHS from '../../paths';

import transformJSONFile from '../../helpers/transform-json-file';
import removeTagFromTagsData from '../../transforms/tags/remove-tag';
import removeTagFromBooksData from '../../transforms/books/remove-tag';

export default [
	({ id }) => transformJSONFile(PATHS.files.tags, removeTagFromTagsData.bind(null, id)).then(() => `тег #${id} удалён из списка тегов`),
	({ id }) => transformJSONFile(PATHS.files.books, removeTagFromBooksData.bind(null, id)).then(() => `тег #${id} удалён из списка книг`),
];
