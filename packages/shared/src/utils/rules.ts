import {
  CaseRuleConfig,
  RuleConfig,
  RuleConfigSeverity,
} from "@commitlint/types";

export enum RuleSwitch {
  ALWAYS = "always",
  NEVER = "never",
}

export type RuleParams = {
  values?: any;
  status?: RuleSwitch;
};

const ruleCons =
  (level: RuleConfigSeverity) =>
  (params?: RuleParams): RuleConfig | CaseRuleConfig => {
    const config = [level, params?.status ?? RuleSwitch.ALWAYS] as RuleConfig;
    const values = params?.values;

    return values
      ? (config.concat(values) as unknown as CaseRuleConfig)
      : config;
  };

export const warnRule = ruleCons(RuleConfigSeverity.Warning);

export const errorRule = ruleCons(RuleConfigSeverity.Error);

export const missingRule = ruleCons(RuleConfigSeverity.Disabled);
