function titleCase(str, args) {
  if (!args) {
    return str.length > 0 ? str.split(' ').map(word => word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()).join(' ') : ''
  }
  
  let splitStr = str.split(' ')
  let splitArgs = args.split(' ')

  let upper = splitStr.map(word => {
    word = word.toLowerCase()
    if (!splitArgs.some(arg => arg.toLowerCase() === word)) {
      word = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
    }
    return word
  })
  upper[0] = upper[0].substr(0,1).toUpperCase() + upper[0].substr(1).toLowerCase()
  return upper.join(' ')
}

console.log(titleCase(''))
console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In', 'The Wind in the Willows'))
