// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.
// Some examples:
// "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"
// The string will never be null and will never be empty.
// It will contain only lowercase-letters and whitespaces.

function sortTheInnerContent(words) {
  let splitWord = words.split(' ');
  splitWord.forEach(word => {
    let letters = word.split('').slice(1, word.length - 1);
    letters.sort(function(a, b) {return b-a;});
  });
}
