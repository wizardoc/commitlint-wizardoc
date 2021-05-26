"use strict";
const typings_1 = require("./typings");
const config = {
    parserOpts: {
        headerPattern: /^\[(\w*)::(\w*)\]\s(.*)$/,
        headerCorrespondence: [
            typings_1.LexicalElement.TYPE,
            typings_1.LexicalElement.SCOPE,
            typings_1.LexicalElement.SUBJECT,
        ],
    },
    rules: {
        "body-leading-blank": [1, "always"],
    },
};
module.exports = config;
