export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const value of array) {
    // eslint-disable-next-line
    array[idx++] = appendString + value;
  }

  return array;
}
