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

This programs can be run with Node.js >= 6.0.0.

To find out more about every program, run it with flag `-h` or `--help`,
for example:

```bash
$ node ./cms/list-tags.js --help

  Usage: add-tags [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -n, --names="[names]"  tags names splitted by commas

```
