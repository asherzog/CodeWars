/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]

INCOMPLETE!!!!
*/
function towerBuilder(nFloors) {
  let answer = ['*'];
  while (answer.length < nFloors){
    answer.push(answer[answer.length -1] + '**');
  }
  let newAns = [];
  answer.forEach(level => {
    if (level.length < (nFloors + 2)) {
      level = level.split('');
      if (nFloors > 1){
        while (level.length < nFloors + 2){
          level.push(' ');
          level.unshift(' ');
        }
      }
    }
    level = level.reduce((a,b) => {
      return a.concat(b);
    });
    newAns.push(level);
  });
  return newAns;
}
