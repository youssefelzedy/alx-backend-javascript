export default function guardrail(mathFunction) {
  const q = [];

  try {
    q.push(mathFunction());
  } catch (err) {
    q.push(String(err));
  } finally {
    q.push('Guardrail was processed');
  }

  return q;
}
