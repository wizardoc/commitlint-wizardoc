type Enum<T> = Record<string, T>;

export const enumerateValues = <T>(e: Enum<T>) => Object.values<T>(e);
export const enumerateKeys = (e: Enum<unknown>) => Object.keys(e);
