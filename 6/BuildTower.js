function towerBuilder(nFloors) {
  let answer = ['*'];
  while (answer.length < nFloors){
    answer.push(answer[answer.length -1] + '**');
  }
  answer.forEach(level => {
    if (level.length < (nFloors + 2)) {
      level = level.split('');
      while (level.length < nFloors + 2){
        level.push(' ');
        level.unshift(' ');
      }
    }
    console.log(level);
  });
  return answer;
}
