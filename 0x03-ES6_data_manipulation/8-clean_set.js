export default function cleanSet(set, startString) {
  return typeof (startString) === 'string' && startString && set instanceof Set
    ? Array.from(set).filter((string) => string.startsWith(startString))
      .map((string) => string.replace(startString, ''))
      .join('-')
    : '';
}
