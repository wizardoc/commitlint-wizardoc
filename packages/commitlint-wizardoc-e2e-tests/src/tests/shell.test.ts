/* eslint-disable import/no-extraneous-dependencies */
import { $ } from "../utils/shell";

const SUCCESS_SIGNAL = 0;
const shellUrl = "./.github/shell/branchName.sh";
const executeCommand = `chmod +x ${shellUrl} && ${shellUrl}`;

describe("branchNameTest", () => {
  it("success branch name", () => {
    const res = $`sh ${executeCommand} feature/git-rebase-test`;

    console.log(`res`, res);

    expect(res.code).toEqual(SUCCESS_SIGNAL);
  });

  it("type error", () => {
    const res = $`sh ${executeCommand} test/git-rebase-test`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("empty branch name error", () => {
    const res = $`sh ${executeCommand} feature/`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("separator branch name error", () => {
    const res = $`chmod +x ${executeCommand} feature/brach_name`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("upper Case branch name error", () => {
    const res = $`sh ${executeCommand} feature/brachName`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });
});
