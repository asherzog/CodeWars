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
  let sorted = splitWord.map((word) => {
    let letters = word.substring(1, word.length -1);
    return letters.split('').sort((a,b) => {
      return b - a;
    });
  });
  console.log(sorted);
}
