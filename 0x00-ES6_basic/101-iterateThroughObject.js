export default function iterateThroughObject(reportWithIterator) {
  let next;
  let res = '';
  next = reportWithIterator.next();
  while (!next.done) {
    res += next.value;
    next = reportWithIterator.next();
    if (!next.done) res += ' | ';
  }
  return res;
}
