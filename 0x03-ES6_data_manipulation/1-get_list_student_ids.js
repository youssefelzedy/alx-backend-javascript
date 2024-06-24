/*get all ids*/
export default function getListStudentIds(obj) {
  const ids = [];
  for (const id of obj) {
    // console.log(id)
    if (id.id !== undefined) ids.push(id.id);
  }
  return ids;
}
