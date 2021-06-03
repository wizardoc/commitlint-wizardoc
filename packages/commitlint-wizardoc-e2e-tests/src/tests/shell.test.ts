/* eslint-disable import/no-extraneous-dependencies */
import { $ } from "../utils/shell";

const SUCCESS_SIGNAL = 0;
const BRANCH_NAME_CHECKER = ".github/shell/branch-name.sh";
const checkBranchName = (branchName: string) =>
  $`chmod +x ${BRANCH_NAME_CHECKER} && ${BRANCH_NAME_CHECKER} ${branchName}`
    .code;

describe("branchNameTest", () => {
  it("correct branch name", () => {
    const code = checkBranchName("feature/git-rebase-test");

    expect(code).toEqual(SUCCESS_SIGNAL);
  });

  it("type error", () => {
    const code = checkBranchName("test/git-rebase-test");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("underline suffix", () => {
    const code = checkBranchName("feature/git-rebase-test_");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("dash suffix", () => {
    const code = checkBranchName("feature/git-rebase-test-");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("mixin camel case branch name", () => {
    const code = checkBranchName("feature/git-rebase-branchName");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("mixin dash case branch name", () => {
    const code = checkBranchName("feature/git-rebase-xxx_xxx");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("missing type", () => {
    const code = checkBranchName("/git-rebase-xxx_xxx");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("missing branch name", () => {
    const code = checkBranchName("feature/");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("missing separator", () => {
    const code = checkBranchName("featurexxxxxx");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("include space", () => {
    const code = checkBranchName("feature/ ssss-ssss");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("invalid symbol", () => {
    const code = checkBranchName("feature/xx&xx");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("dash case branch name error", () => {
    const code = checkBranchName("feature/brach_name");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("camel case branch name error", () => {
    const code = checkBranchName("feature/brachName");

    expect(code).not.toEqual(SUCCESS_SIGNAL);
  });
});
