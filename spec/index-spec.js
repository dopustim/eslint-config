const eslint = require('eslint');
const config = require('../');

const linter = new eslint.CLIEngine({
    useEslintrc: false,
    baseConfig: config
});

describe('Lint result for valid JS file', () => {

    let res;

    beforeAll(() => {
        res = linter.executeOnFiles(['./spec/valid.js']);
    });
    it('has no errors', () => {
        expect(res.results[0].errorCount).toBeFalsy();
    });
    it('has no warnings', () => {
        expect(res.results[0].warningCount).toBeFalsy();
    });
});

describe('Lint result for invalid JS file', () => {

    let res;

    beforeAll(() => {
        res = linter.executeOnFiles(['./spec/invalid.js']);
    });
    it('has errors', () => {
        expect(res.results[0].errorCount).toBeTruthy();
    });
    it('has warning for rule "prefer-const"', () => {
        expect(res.results[0].messages[0].ruleId).toBe('prefer-const');
        expect(res.results[0].messages[0].severity).toBe(1);
    });
    it('has warning for rule "quotes"', () => {
        expect(res.results[0].messages[1].ruleId).toBe('quotes');
        expect(res.results[0].messages[1].severity).toBe(1);
    });
    it('has error for rule "semi"', () => {
        expect(res.results[0].messages[2].ruleId).toBe('semi');
        expect(res.results[0].messages[2].severity).toBe(2);
    });
});
