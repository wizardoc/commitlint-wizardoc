/* eslint-disable import/no-extraneous-dependencies */
import { $ } from "../utils/shell";

const SUCCESS_SIGNAL = 0;

describe("commitlintPluginRuleTests", () => {
  const successfulCase = "![Add::scope] subject";

  it("success provided commitlint config", () => {
    const res = $`echo "${successfulCase}" | npx commitlint`;

    expect(res.code).toEqual(SUCCESS_SIGNAL);
  });

  it("success provided commitlint config", () => {
    const res = $`echo "${successfulCase}" | npx commitlint`;

    expect(res.code).toEqual(SUCCESS_SIGNAL);
  });

  it("type fail provided commitlint config", () => {
    const res = $`echo ![add::scope] subject | npx commitlint`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("scope fail provided commitlint config", () => {
    const res = $`echo @[add@scope] subjectFail | npx commitlint`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("symbol fail provided commitlint config", () => {
    const res = $`echo @[add::scope] subject | npx commitlint`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("subject fail provided commitlint config", () => {
    const res = $`echo @[add::scope] subject_fail | npx commitlint`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });

  it("subject fail provided commitlint config", () => {
    const res = $`echo @[add::scope] subjectFail | npx commitlint`;

    expect(res.code).not.toEqual(SUCCESS_SIGNAL);
  });
});
