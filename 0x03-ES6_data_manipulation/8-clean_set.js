export default function cleanSet(set, startString) {
  return Array.from(set).filter((string) => startString && string.startsWith(startString))
    .map((string) => string.replace(startString, ''))
    .join('-');
}
