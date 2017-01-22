// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// For example:
// stringTransformer('Example Input') should return 'iNPUT eXAMPLE'


function stringTransformer(str) {
  let letters = str.split('').map(letter => {
    if (letter === letter.toUpperCase()) {
      return letter = letter.toLowerCase();
    } else {
      return letter = letter.toUpperCase();
    }
  });
  let answer = letters.join('').split(' ').reverse().join(' ');
  return answer;
}

// function stringTransformer(str) {
//   return str
//     .split(' ')
//     .reverse()
//     .join(' ')
//     .split('')
//     .map(letter => letter == letter.toUpperCase() ?
//       letter.toLowerCase() :
//       letter.toUpperCase())
//     .join('');
// }
