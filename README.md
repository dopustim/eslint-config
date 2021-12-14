
# @dopustim/eslint-config

Configuration file for ESLint

[![NPM](https://img.shields.io/npm/dt/@dopustim/eslint-config?style=flat-square)](https://www.npmjs.com/package/@dopustim/eslint-config)

## Features

- Provide Errors and Warnings
- 4 spaces for indentation (warning)
- 90 symbols per line (warning)
- Unix linebreaks (warning)

## Usage

Install `@dopustim/eslint-config` package via [NPM](https://www.npmjs.com/package/@dopustim/eslint-config):

```sh
npm install -D eslint @dopustim/eslint-config
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
        "browser": true,
        "es2020": true,
        "node": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2020
    },
    "rules": {
        "max-len": [ 1, { "code": 100 } ]
    }
}
```

## About

Visit the [ESLint website](https://eslint.org) to find out all rules and descriptions.
