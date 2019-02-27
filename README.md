## tslint-fun-times

Fun lint rules for [TSLint](https://github.com/palantir/tslint/).

This project was originally forked from
[tslint-react](https://github.com/palantir/tslint-react/).

### Usage

tslint-fun-times has peer dependencies on TSLint and TypeScript.

To use these lint rules with the default preset, use configuration inheritance
via the `extends` keyword. Here's a sample configuration where `tslint.json`
lives adjacent to your `node_modules` folder:

```js
{
  "extends": ["tslint:latest", "tslint-fun-times"],
  "rules": {
    // override tslint-fun-times rules here
    "single-element-tuple": false
  }
}
```

### Rules

* `single-element-tuple` (since 0.0.1)
  * Allows blacklisting of single element tuples (ex. `[string]`) and suggests
    they be changed to fully typed arrays (ex. `string[]`)

### Development

Quick Start (requires Node v6+, yarn v0.22+):

1. `yarn`
1. `yarn verify`
1. `yarn lint`
