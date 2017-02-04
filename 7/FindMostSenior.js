// You will be given an array of objects representing data about developers
// who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an array which includes the developer who is the oldest.
// In case of a tie, include all same-age senior developers listed in
// the same order as they appeared in the original input array.

function findSenior(list) {
  let maxage = 0;
  list.forEach(dev => {
    if (dev.age > maxage) {
      maxage = dev.age;
    }
  });
  return list.filter((a, b) => {
    return a.age == maxage;
  });
}
