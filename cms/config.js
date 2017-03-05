import path from 'path';

export const PATHS = {
	files: {
		tags: path.resolve(__dirname, '../data/tags.json'),
		books: path.resolve(__dirname, '../data/books.json'),
	},
	folders: {
		covers: path.resolve(__dirname, '../data/covers'),
	},
};
