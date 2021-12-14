const eslint = require("eslint")
const config = require("../")

const linter = new eslint.ESLint({
    useEslintrc: false,
    baseConfig: {
        env: { browser: true, es2020: true },
        parserOptions: { ecmaVersion: 2020 },
        ...config
    }
})

describe("With rule \"array-callback-return\"", () => {

    const validFiles = [ "./spec/fixtures/array-callback-return/valid.js" ]
    const invalidFiles = [ "./spec/fixtures/array-callback-return/invalid.js" ]

    let res

    describe("valid file", () => {

        beforeAll(async () => {
            res = await linter.lintFiles(validFiles)
        })
        it("has no errors", () => {
            expect(res[0].errorCount).toBeFalsy()
        })
        it("has no warnings", () => {
            expect(res[0].warningCount).toBeFalsy()
        })
    })

    describe("invalid file", () => {

        beforeAll(async () => {
            res = await linter.lintFiles(invalidFiles)
        })
        it("has errors", () => {
            expect(res[0].errorCount).toBeTruthy()
        })
        it("has error for rule \"array-callback-return\"", () => {
            expect(res[0].messages[0].ruleId).toBe("array-callback-return")
            expect(res[0].messages[0].severity).toBe(2)
        })
    })
})

describe("With rule \"constructor-super\"", () => {

    const validFiles = [ "./spec/fixtures/constructor-super/valid.js" ]
    const invalidFiles = [ "./spec/fixtures/constructor-super/invalid.js" ]

    let res

    describe("valid file", () => {

        beforeAll(async () => {
            res = await linter.lintFiles(validFiles)
        })
        it("has no errors", () => {
            expect(res[0].errorCount).toBeFalsy()
        })
        it("has no warnings", () => {
            expect(res[0].warningCount).toBeFalsy()
        })
    })

    describe("invalid file", () => {

        beforeAll(async () => {
            res = await linter.lintFiles(invalidFiles)
        })
        it("has errors", () => {
            expect(res[0].errorCount).toBeTruthy()
        })
        it("has error for rule \"constructor-super\"", () => {
            expect(res[0].messages[0].ruleId).toBe("constructor-super")
            expect(res[0].messages[0].severity).toBe(2)
        })
    })
})
