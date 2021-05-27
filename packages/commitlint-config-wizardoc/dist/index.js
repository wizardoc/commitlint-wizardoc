"use strict";
const constants_1 = require("./constants");
const enum_1 = require("./utils/enum");
const config = {
    parserPreset: {
        name: "",
        path: "",
        parserOpts: {
            headerPattern: constants_1.CONVERSION_MATCH_REGEX,
            headerCorrespondence: [
                constants_1.LexicalElement.TYPE,
                constants_1.LexicalElement.SCOPE,
                constants_1.LexicalElement.SUBJECT,
            ],
        },
    },
    rules: {
        // 'subject-exclamation-mark': [2, 'never'],
        "footer-leading-blank": [1, "always"],
        "header-max-length": [2, "always", 72],
        // 'scope-case': [2, 'always', 'lower-case'],
        "subject-case": [2, "never", ["upper-case"]],
        // 'subject-empty': [2, 'never'],
        "subject-full-stop": [2, "never", "."],
        "type-empty": [2, "never"],
        "scope-empty": [1, "never"],
        "type-enum": [2, "always", enum_1.enumerateValues(constants_1.CommitType)],
    },
};
module.exports = config;
