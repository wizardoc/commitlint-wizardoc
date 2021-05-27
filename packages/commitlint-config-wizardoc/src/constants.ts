export enum LexicalElement {
  SUBJECT = "subject",
  TYPE = "type",
  SCOPE = "scope",
  TICKET = "ticket",
  SYMBOL = "symbol",
}

export enum CommitType {
  FEAT = "Feat",
  INIT = "Init",
  REMOVE = "Remove",
  DELETE = "Delete",
  UPDATE = "Update",
  REFACTOR = "Refactor",
  MOVE = "Move",
  NEW = "New",
  ADD = "Add",
  PATCH = "Patch",
  FIX = "Fix",
  TEST = "Test",
  STUB = "Stub",
  CHORE = "Chore",
}

export const CONVERSION_MATCH_REGEX = /^(.?)\[(\w+?)(?:\:\:(\w*))?\]\s(.*)$/;
