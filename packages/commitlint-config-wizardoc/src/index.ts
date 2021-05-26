import { LexicalElement } from "./typings";

const config = {
  parserOpts: {
    headerPattern: /^\[(\w*)::(\w*)\]\s(.*)$/,
    headerCorrespondence: [
      LexicalElement.TYPE,
      LexicalElement.SCOPE,
      LexicalElement.SUBJECT,
    ],
  },
  rules: {
    "body-leading-blank": [1, "always"],
  },
};

export = config;
