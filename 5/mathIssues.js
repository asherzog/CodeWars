Math.round = function(number) {
  let splitNum = number.toString().split('.')
  let decimal = splitNum[1]
  return Number(splitNum[1]) >= 5 && decimal[0] >= 5 ? Number(splitNum[0]) + 1 : Number(splitNum[0])
}

Math.ceil = function(number) {
  let splitNum = number.toString().split('.')
  return splitNum.length > 1 ? Number(splitNum[0]) + 1 : Number(splitNum[0])
}

Math.floor = function(number) {
  let splitNum = number.toString().split('.')
  return Number(splitNum[0])
}


console.log(Math.round(19.199))
console.log(Math.ceil(0))
console.log(Math.ceil(0.4))
console.log(math.floor(1.2))
