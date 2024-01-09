export default function hasValuesFromArray(set, array) {
  return array.map((val) => set.has(val)).reduce((prev, curr) => prev && curr, true);
}
