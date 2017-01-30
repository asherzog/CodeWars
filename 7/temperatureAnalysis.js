// You were given a string of integer temperature values.
// Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.

function lowestTemp(t) {
  if (t == '') {
    return null;
  }
  let num = t.split(' ').map(newNumber => {
    return Number(newNumber);
  });
  let sorted = num.sort((a,b) => {
    return a - b;
  });
  return sorted[0];
}
