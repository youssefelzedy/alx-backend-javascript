export default function cleanSet(set, startString) {
  const str = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      str.push(element.slice(startString.length));
    }
  });
  return str.join('-');
}
