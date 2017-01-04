/*
You're given a single word. Your task is to swap the halves.
If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.
Examples:
reverseByCenter("agent") == "nteag" // center character is e
reverseByCenter("secret")  == "retsec" // no center character
*/

function reverseByCenter(s){
  let first = s.slice(0, s.length / 2);
  let second = s.slice(s.length / 2, s.length);
  if (s.length % 2 != 0) {
    second = second.slice(1) + second.slice(0, 1);
  }
  return second + first;
}
