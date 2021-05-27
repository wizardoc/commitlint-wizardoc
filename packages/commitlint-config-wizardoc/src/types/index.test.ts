import { config } from "../config";

describe("validate config structure", () => {
  it("should return a correct config", () => {
    expect(config).toHaveProperty("rules");
    expect(config).toHaveProperty("parserPreset");
  });
});
