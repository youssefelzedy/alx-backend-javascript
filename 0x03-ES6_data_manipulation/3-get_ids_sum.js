/* get sum of id's */
export default function getListStudentIds(obj) {
  if (obj instanceof Array) {
    return obj.reduce((sum, obj) => sum + obj.id, 0);
  }
  return 0;
}
