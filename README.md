[![Build Status](https://travis-ci.org/andrew--r/frontendbookshelf-data.svg?branch=master)](https://travis-ci.org/andrew--r/frontendbookshelf-data)

# Frontend Bookshelf data

```bash
$ yarn # install dependencies
```

## CMS

Here are a few handy CLI programs for managing data:

* `./cms/list-books.js`
* `./cms/list-tags.js`
* `./cms/add-book.js`
* `./cms/add-tags.js`
* `./cms/remove-books.js`
* `./cms/remove-tags.js`

These programs require installed Node.js >= 6.0.0. They are executable, so you
don't have to write `node ./cms/program-name.js`, just type
`./cms/program-name.js` in your terminal. Note: if you use Windows, you
*have to* specify `node` before a program path.

To find out more about every program, run it with flag `-h` or `--help`,
for example:

```bash
$ ./cms/list-tags.js --help

  Usage: list-tags [options]

  Lists existing tags

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```
