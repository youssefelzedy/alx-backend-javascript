/* get student location */
export default function getStudentsByLocation(obj, city) {
  const ids = [];
  for (const id of obj) {
    // console.log(id)
    if (id.location === city) ids.push(id);
  }
  return ids;
}
