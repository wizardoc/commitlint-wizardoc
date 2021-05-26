import { LexicalElement } from "./typings";
declare const config: {
    parserOpts: {
        headerPattern: RegExp;
        headerCorrespondence: LexicalElement[];
    };
    rules: {
        "body-leading-blank": (string | number)[];
    };
};
export = config;
