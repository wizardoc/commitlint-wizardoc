import breakChangeSymbolRuleResolver from "../break-change-symbol-rule-resolver";

describe("breakChangeSymbolRuleResolver", () => {
  it("should return a error response if breakChangeSymbol is not !", () => {
    const parsed = {
      raw: "$[Type::scope] subject",
    };
    expect(breakChangeSymbolRuleResolver(parsed)[0]).toEqual(false);
  });
  it("should return a success response if no breakChangeSymbol", () => {
    const parsed = {
      raw: "[Type::scope] subject",
    };
    expect(breakChangeSymbolRuleResolver(parsed)[0]).toEqual(true);
  });
  it("should return a success response if breakChangeSymbol is !", () => {
    const parsed = {
      raw: "![Type::scope] subject",
    };
    expect(breakChangeSymbolRuleResolver(parsed)[0]).toEqual(true);
  });
});
