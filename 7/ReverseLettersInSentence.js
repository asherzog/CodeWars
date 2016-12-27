/*
Take a sentence (string) and reverse each letter in each word in the sentence. Do not reverse the order of the words, just the letters in each word.
If there is punctuation, it should be interpreted as a regular character; no special rules.
If there is spacing before/after the input string, leave them there.
String will always be defined.
Example:
"A fun little challenge!" => 'A nuf elttil !egnellahc'
*/

function reverser(sentence) {
  let answer = [];
  sentence.split(' ').forEach(word => {
    answer.push(word.split('').reverse().join(''));
  });
  return answer.join(' ');
}
