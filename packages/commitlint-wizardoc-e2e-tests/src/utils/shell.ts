import { exec } from "shelljs";

export const $ = (pieces: TemplateStringsArray, ...args: unknown[]) =>
  exec(pieces.reduce((pre, cur, i) => pre + cur + ((args ?? [])[i] ?? ""), ""));
