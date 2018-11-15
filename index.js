module.exports = {

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    extends: [
        './rules/possible-errors.json',
        './rules/best-practices.json',
        './rules/variables.json',
        './rules/nodejs.json',
        './rules/stylistic-issues.json',
        './rules/ecmascript-6.json'
    ].map(require.resolve)
};
