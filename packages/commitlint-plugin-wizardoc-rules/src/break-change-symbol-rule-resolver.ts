import { RuleResolver } from "./typings";
import { breakChangeSymbol } from "./constants";

const breakChangeSymbolRuleResolver: RuleResolver = (
  parsed,
  _when,
  value = breakChangeSymbol
) => {
  const rawCommitMessage = parsed.raw;
  if (!rawCommitMessage) return [false, "Commit message should not be empty"];

  let isRuleValid = false;

  const findedBreakChangeSymbol: string = rawCommitMessage.split("[")[0];

  // 查找[ 前一项
  if (!findedBreakChangeSymbol || findedBreakChangeSymbol === value)
    isRuleValid = true;

  return [
    isRuleValid,
    `break change must be symbol with "${value}" e.g: ${value}[Type::scope] subject`,
  ];
};
export default breakChangeSymbolRuleResolver;
