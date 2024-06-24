/* Add new grade */
export default function updateStudentGradeByCity(students, city, newGrade) {
  const cityFiltered = students.filter((student) => student.location === city);
  return cityFiltered.map((student) => {
    const gradeFilter = newGrade.filter((grade) => grade.studentId === student.id);
    if (gradeFilter.length > 0) {
      return {
        ...student, grade: gradeFilter[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
