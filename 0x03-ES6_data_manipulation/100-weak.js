const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  else weakMap.set(endpoint, 0);
  const res = weakMap.get(endpoint);
  if (res >= 5) throw new Error('Endpoint load is high');
  return res;
}

export { weakMap, queryAPI };
