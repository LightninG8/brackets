module.exports = function check(str, bracketsConfig) {
  str = str.split("");
  
  const openBrackets = bracketsConfig.map(item => item[0]);
  const closeBrackets = bracketsConfig.map(item => item[1]);

  let stack = [];

  for (const item of str) {
    if (openBrackets.includes(item)) {
      stack.push(openBrackets.indexOf(item));
    } else if (closeBrackets.includes(item)) {
      if (stack[stack.length - 1] !== closeBrackets.indexOf(item)) return false;

      stack.pop();
    }
  }

  return stack.length === 0;
}
