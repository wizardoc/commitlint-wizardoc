/* eslint-disable import/no-extraneous-dependencies */
import { $ } from "../utils/shell";

const SUCCESS_SIGNAL = 0;

describe("branchNameTest", () => {
  it("success branch name", () => {
    const res = $`sh ./.github/shell/branchName.sh feature/git-rebase-test`;

    expect(res.code).toEqual(SUCCESS_SIGNAL);
  });

  it("type error", () => {
    const res = $`sh ./.github/shell/branchName.sh test/git-rebase-test`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("empty branch name error", () => {
    const res = $`sh ./.github/shell/branchName.sh feature/`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("separator branch name error", () => {
    const res = $`sh ./.github/shell/branchName.sh feature/brach_name`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("upper Case branch name error", () => {
    const res = $`sh ./.github/shell/branchName.sh feature/brachName`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });
});
