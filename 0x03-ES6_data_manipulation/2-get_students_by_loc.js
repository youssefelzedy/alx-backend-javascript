export default function getStudentsByLocation(students, city) {
  console.log(students);

  if (students instanceof Array) {
    return students.filter((s) => s.location === city);
  }
  return [];
}
