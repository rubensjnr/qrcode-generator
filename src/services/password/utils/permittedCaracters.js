async function permittedCaracters() {
  let caractersSelect = [];
  if (process.env.UPPERCASE_LETTERS === 'true') {
    caractersSelect.push(...'ABCDEFGHIJKLMNOPQRSTUVXYWZ');
  }
  if (process.env.LOWERCASE_LETTERS === 'true') {
    caractersSelect.push(...'abcdefghijklmnopqrstuvxywz');
  }
  if (process.env.NUMBERS === 'true') {
    caractersSelect.push(...'0123456789');
  }
  if (process.env.SPECIAL_CARACTERS === 'true') {
    caractersSelect.push(...'#.,_-$');
  }
  return caractersSelect;
}
export default permittedCaracters;
