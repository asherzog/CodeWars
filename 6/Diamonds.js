/*
You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters.
Please see provided test cases for exact output format.
The shape that will be returned from print method resembles a diamond, where the number provided as input represents
the number of *’s printed on the middle line.
The line above and below will be centered and will have 2 less *’s than the middle line.
This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.
Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).
*/
function diamond(n){
  if (n % 2 == 0 || n < 1){
    return null;
  }
  let first = [];
  let count = (n / 2) -0.5;
  for (var i = 0; i < count; i ++) {
    first.push(((' ').repeat(count - i) + '*'.repeat(i) + (' ').repeat(count - i)));
  }
  console.log(first.join('\n'));
}
