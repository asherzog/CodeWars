// Create a function called reverseSentence()/reverse_sentence() that accepts a string argument.
// The function returns a string of the same length with each word reversed, but still in their original order.
// reverseSentence("Hello !Nhoj Want to have lunch?"); // => 'olleH johN! tnaW ot evah ?hcnul'


function reverseSentence(str){
  let answer = str.split(' ').map((word) => {
    return word.split('').reverse().join('');
  });
  return answer.join(' ');
}
