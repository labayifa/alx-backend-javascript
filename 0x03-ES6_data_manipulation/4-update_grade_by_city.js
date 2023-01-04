export default function updateStudentGradeByCity(students, city, newGrades){
  return students.filter((s) => s.location === city).map((e) => {
    const newStudents = e;
    newStudents.grade = 'N/A';
    for (const grade of newGrades) {
      if (newStudents.id === grade.studentId) {
        newStudents.grade = grade.grade;
      }
    }
    return newStudents;
  })
}
