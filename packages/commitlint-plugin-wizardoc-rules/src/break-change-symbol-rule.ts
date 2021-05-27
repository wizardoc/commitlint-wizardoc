import { BREAK_CHANGE_SYMBOL } from "./constants";
import { Commit, Rule, RuleOutcome } from "@commitlint/types";

export type WithSymbol<T> = T & {
  symbol: string;
};

export type CommitWithSymbol = WithSymbol<Commit>;

export const breakChangeSymbolRule = (walkData: Commit): RuleOutcome => {
  const { symbol } = walkData as CommitWithSymbol;
  const isRuleValid = !symbol || symbol === BREAK_CHANGE_SYMBOL;

  return [
    isRuleValid,
    `break change must be symbol with "${BREAK_CHANGE_SYMBOL}" e.g: ${BREAK_CHANGE_SYMBOL}[Type::scope] subject`,
  ];
};
