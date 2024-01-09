const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const count = (weakMap.get(endpoint) || 0) + 1;
  weakMap.set(endpoint, count);
  if (count >= 5) throw new Error('Endpoint load is high');
  return count;
}

export { weakMap, queryAPI };
