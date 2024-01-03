export default function createIteratorObject(report) {
  let res = [];
  const employees = report.allEmployees;
  for (const key of Object.keys(employees)) {
    res = res.concat(employees[key]);
  }
  return res.values();
}
