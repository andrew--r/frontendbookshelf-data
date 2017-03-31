# Frontend Bookshelf data

```bash
$ yarn # install dependencies
```

## CMS

Here are a few handy CLI programs for managing data:

* `./cms/list-books`
* `./cms/list-tags`
* `./cms/add-book`
* `./cms/add-tags`
* `./cms/remove-books`
* `./cms/remove-tags`

This programs require installed Node.js >= 6.0.0.

To find out more about every program, run it with flag `-h` or `--help`,
for example:

```bash
$ ./cms/list-tags --help

  Usage: add-tags [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -n, --names="[names]"  tags names splitted by commas

```

If you use Windows, please run it explicitly with `node` and provide
`.js` extension for every program:

```bash
$ node ./cms/list-tags.js --help
```
