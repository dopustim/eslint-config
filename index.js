const possibleProblems = require("./rules/possible-problems.json")
const suggestions = require("./rules/suggestions.json")
const layoutAndFormatting = require("./rules/layout-and-formatting.json")

module.exports = {
    extends: "eslint:recommended",
    rules: {
        ...possibleProblems,
        ...suggestions,
        ...layoutAndFormatting
    }
}
