import {
  LexicalElement,
  CommitType,
  CONVERSION_MATCH_REGEX,
} from "./constants";
import { UserConfig } from "@commitlint/types";
import { enumerateValues } from "./utils/enum";

export const config: UserConfig = {
  parserPreset: {
    name: "",
    path: "",
    parserOpts: {
      headerPattern: CONVERSION_MATCH_REGEX,
      headerCorrespondence: [
        LexicalElement.TYPE,
        LexicalElement.SCOPE,
        LexicalElement.SUBJECT,
      ],
    },
  },
  rules: {
    // 'subject-exclamation-mark': [2, 'never'],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 72],
    // 'scope-case': [2, 'always', 'lower-case'],
    "subject-case": [2, "never", ["upper-case"] as any],
    // 'subject-empty': [2, 'never'],
    "subject-full-stop": [2, "never", "."],
    "type-empty": [2, "never"],
    "scope-empty": [1, "never"],
    "type-enum": [2, "always", enumerateValues(CommitType)],
  },
};
