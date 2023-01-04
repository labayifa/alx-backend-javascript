export default function getListStudentIds(students) {
  let studentList = [];
  if (!(students instanceof Array)) {
    return [];
  }
  studentList = students.map((student) => student.id);
  return studentList;
}
