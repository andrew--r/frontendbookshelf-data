const fs = require('fs');
const path = require('path');

let books = {};
let tags = {};

try {
	books = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/books.json')));
	tags = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/tags.json')));
} catch (error) {
	console.log('An error occuried while parsing books and tags data');
	console.log(error);
}

module.exports = {
	books,
	tags,
};
