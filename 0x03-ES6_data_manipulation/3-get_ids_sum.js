export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((prev, curr) => prev + curr.id, 0);
  }
  return 0;
}
