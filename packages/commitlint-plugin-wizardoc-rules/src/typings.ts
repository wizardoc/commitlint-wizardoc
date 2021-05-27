export type RuleResolver = (
  parsed: Partial<{
    type: string;
    scope: string;
    subject: string;
    merge: string;
    header: string;
    body: string;
    footer: string;
    notes: string[];
    references: string[];
    mentions: string[];
    revert: string;
    raw: string;
  }>,
  when?: string,
  value?: string | number | boolean | (string | number)[]
) => (string | boolean)[];

export interface CommitlintPlugin {
  rules: {
    [key: string]: RuleResolver;
  };
}
declare const commitlintPlugin: CommitlintPlugin;

export default commitlintPlugin;
