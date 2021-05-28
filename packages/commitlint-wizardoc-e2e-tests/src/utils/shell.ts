import shell from "shelljs";

export const $ = (pieces: TemplateStringsArray, args?: unknown[]) =>
  shell.exec(
    pieces.reduce((pre, cur, i) => pre + cur + ((args ?? [])[i] ?? ""), "")
  );
