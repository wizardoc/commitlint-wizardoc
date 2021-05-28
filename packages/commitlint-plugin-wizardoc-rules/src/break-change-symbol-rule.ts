import { BREAK_CHANGE_SYMBOL } from "./constants";
import { Commit, RuleOutcome, RuleConfigCondition } from "@commitlint/types";

export type WithSymbol<T> = T & {
  symbol: string;
};

export type CommitWithSymbol = WithSymbol<Commit>;

export const breakChangeSymbolRule = (
  walkData: Commit,
  _when?: RuleConfigCondition,
  value: string = BREAK_CHANGE_SYMBOL
): RuleOutcome => {
  const { symbol } = walkData as CommitWithSymbol;
  const isRuleValid = !symbol || symbol === value;

  return [
    isRuleValid,
    `break change must be symbol with "${value}" e.g: ${value}[Type::scope] subject`,
  ];
};
