import { Commit, RuleOutcome } from "@commitlint/types";
import { breakChangeSymbolRule, WithSymbol } from "../break-change-symbol-rule";
import { BREAK_CHANGE_SYMBOL } from "../constants";

const walkData = {
  symbol: BREAK_CHANGE_SYMBOL,
} as unknown as WithSymbol<Commit>;

const updateWalkData = (symbol: string) => (walkData.symbol = symbol);
const getIsValid = ([isValid]: RuleOutcome) => isValid;

describe("breakChangeSymbolRule", () => {
  it("should return a error response if breakChangeSymbol is not !", () => {
    updateWalkData("@");
    expect(getIsValid(breakChangeSymbolRule(walkData))).toEqual(false);
  });

  it("should return a success response if no breakChangeSymbol", () => {
    updateWalkData("");
    expect(getIsValid(breakChangeSymbolRule(walkData))).toEqual(true);
  });

  it("should return a success response if breakChangeSymbol is !", () => {
    updateWalkData(BREAK_CHANGE_SYMBOL);
    expect(getIsValid(breakChangeSymbolRule(walkData))).toEqual(true);
  });
});
