module.exports = function check(str, bracketsConfig) {

  let pairElements = Object.fromEntries(bracketsConfig);
  let stack = [];

  for(let i = 0; i < str.length; i++) {
    let curSymbol = str[i];

    if(pairElements[curSymbol] === curSymbol) {
      if(stack[stack.length - 1] === curSymbol) {
        stack.pop();
      } else {
        stack.push(curSymbol);
      }
    } else if(pairElements[curSymbol]) {
      stack.push(curSymbol);
    } else if(pairElements[stack[stack.length - 1]] === curSymbol) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

