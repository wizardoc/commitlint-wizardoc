export enum LexicalElement {
  SUBJECT = "subject",
  TYPE = "type",
  SCOPE = "scope",
  TICKET = "ticket",
}

export enum CommitType {
  FEAT = "Feat",
  INIT = "Init",
  REMOVE = "Remove",
  DELETE = "Delete",
  MOVE = "Move",
  NEW = "New",
  ADD = "Add",
  PATCH = "Patch",
  FIX = "Fix",
  TEST = "Test",
  STUB = "Stub",
}

export const CONVERSION_MATCH_REGEX = /^\[(\w+?)(?:\:\:(\w*))?\]\s(.*)$/;
