export default function getStudentIdsSum(students){
  if (!(students instanceof Array)){
    return 0;
  }
  return students.reduce(((previousValue, currentValue) => previousValue += currentValue.id), +0);
}
