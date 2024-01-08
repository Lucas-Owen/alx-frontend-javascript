export default function updateStudentGradeByCity (students, city, newGrades) {
  if (Array.isArray(students)) {
    return students.filter(student => student.location === city).map(student => {
      return {
        ...student,
        grade: newGrades.filter(grade => grade.studentId === student.id).map(grade => grade.grade)[0] || "N/A"
      }
});
  }
return null;
}
