const eslint = require("eslint")
const config = require("../")
const fs = require("fs")

const linter = new eslint.ESLint({
    useEslintrc: false,
    baseConfig: {
        env: { browser: true, es2020: true },
        parserOptions: { ecmaVersion: 2020 },
        ...config
    }
})

for (const ruleName in config.rules) {

    if (!fs.existsSync(`./spec/fixtures/${ruleName}`) ||
        !fs.lstatSync(`./spec/fixtures/${ruleName}`).isDirectory())
        continue

    describe(`With rule "${ruleName}"`, () => {

        const validFiles = [ `./spec/fixtures/${ruleName}/valid.js` ]
        const invalidFiles = [ `./spec/fixtures/${ruleName}/invalid.js` ]

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
            switch (config.rules[ruleName][0]) {
                case 1:
                    // Warnings
                    it("has warnings", () => {
                        expect(res[0].warningCount).toBeTruthy()
                    })
                    it(`has warning for rule "${ruleName}"`, () => {
                        expect(res[0].messages[0].ruleId).toBe(ruleName)
                        expect(res[0].messages[0].severity).toBe(1)
                    })
                    break
                case 2:
                    // Errors
                    it("has errors", () => {
                        expect(res[0].errorCount).toBeTruthy()
                    })
                    it(`has error for rule "${ruleName}"`, () => {
                        expect(res[0].messages[0].ruleId).toBe(ruleName)
                        expect(res[0].messages[0].severity).toBe(2)
                    })
                    break
            }
        })
    })
}
