const DEFAULT_REGEXP = /\/\/\s*\@pageMeta:(?<propertyKey>\w+)\s+(?<propertyValue>.*)/g;

export function extractProperties(prefix: string, content: string): Map<string, string> {
  const regexp = new RegExp(DEFAULT_REGEXP.source.replace('pageMeta', prefix), 'g');
  const propertyMap = new Map<string, string>();

  let match: RegExpExecArray | null;
  while ((match = regexp.exec(content)) !== null) {
    if (!match.groups) {
      continue;
    }
    const { propertyKey, propertyValue } = match.groups;
    if (propertyKey != null && propertyValue != null) {
      propertyMap.set(propertyKey, propertyValue);
    }
  }

  return propertyMap;
}
