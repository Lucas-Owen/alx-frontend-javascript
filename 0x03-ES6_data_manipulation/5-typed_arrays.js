export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer, 0, length);
  if (position >= length) throw new Error('Position outside range');
  array[position] = value;
  return new DataView(buffer);
}
