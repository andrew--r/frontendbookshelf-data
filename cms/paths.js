const path = require('path');

module.exports = {
	files: {
		tags: path.resolve(__dirname, '../data/tags.json'),
		books: path.resolve(__dirname, '../data/books.json'),
	},
	folders: {
		covers: path.resolve(__dirname, '../data/covers'),
	},
};
