import { breakChangeSymbolRule } from "./break-change-symbol-rule";
import { Plugin } from "@commitlint/types";

export const plugins: Record<string, Plugin[]> = {
  plugins: [
    {
      rules: {
        "break-change-prefix": breakChangeSymbolRule,
      },
    },
  ],
};
