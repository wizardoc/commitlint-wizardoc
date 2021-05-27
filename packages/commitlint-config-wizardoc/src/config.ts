import {
  LexicalElement,
  CommitType,
  CONVERSION_MATCH_REGEX,
} from "./constants";
import { UserConfig } from "@commitlint/types";
import { enumerateValues } from "./utils/enum";
import { plugins } from "commitlint-plugin-wizardoc-rules";

export const config: UserConfig = {
  parserPreset: {
    name: "",
    path: "",
    parserOpts: {
      headerPattern: CONVERSION_MATCH_REGEX,
      headerCorrespondence: [
        LexicalElement.SYMBOL,
        LexicalElement.TYPE,
        LexicalElement.SCOPE,
        LexicalElement.SUBJECT,
      ],
    },
  },
  ...plugins,
  rules: {
    "break-change-prefix": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 72],
    "subject-full-stop": [2, "never", "."],
    "type-empty": [2, "never"],
    "scope-empty": [1, "never"],
    "type-enum": [2, "always", enumerateValues(CommitType)],
  },
};
