/* createInt8TypedArray */
export default function updateStudentGradeByCity(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buff = new DataView(new ArrayBuffer(length), 0, length);
  buff.setInt8(position, value);
  return buff;
}
