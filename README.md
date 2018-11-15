
# @dopustim/eslint-config

Configuration file for ESLint

[![NPM](https://img.shields.io/npm/dt/@dopustim/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@dopustim/eslint-config)

[![GitHub tag](https://img.shields.io/github/tag/dopustim/eslint-config.svg?style=flat-square)](https://github.com/dopustim/eslint-config/tags)
[![GitHub stars](https://img.shields.io/github/stars/dopustim/eslint-config.svg?style=flat-square)](https://github.com/dopustim/eslint-config/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/dopustim/eslint-config.svg?style=flat-square)](https://github.com/dopustim/eslint-config/issues)

[![License](https://img.shields.io/badge/license-ISC-green.svg?style=flat-square)](/LICENSE.md)

## Features

- Provide Errors and Warnings
- 4 spaces for indentation (warning)
- 100 symbols per line (warning)
- Unix linebreaks (warning)
- Support ES2018
- Support ECMAScript Modules
- No environment

## Usage

Install `@dopustim/eslint-config` package via [NPM](https://www.npmjs.com/package/@dopustim/eslint-config):

```sh
$ npm i -D eslint @dopustim/eslint-config
```

Extend this config in your `.eslintrc.json`:

```json
{
    "extends": "@dopustim/eslint-config"
}
```

Or use your `package.json`:

```json
"eslintConfig": {
    "extends": "@dopustim/eslint-config"
}
```

You can also set environment and reassign any rule for your needs:

```json
{
    "extends": "@dopustim/eslint-config",
    "env": {
        "node": true
    },
    "rules": {
        "require-jsdoc": 0,
        "no-console": 0
    }
}
```

## Rules

You can find all rules on [official site](https://eslint.org/docs/rules/).

## License

[ISC License](./LICENSE.md) © 2018 Dopustim Vladimir
