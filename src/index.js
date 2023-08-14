module.exports = function check(str, bracketsConfig) {
  const bracketsMap = new Map(bracketsConfig);
  const stack = [];

  for (const symbol of str) {
    if (bracketsMap.get(stack[stack.length - 1]) == symbol) {
      stack.pop();
    } else {
      stack.push(symbol);
    }
  }
  return stack.length === 0;
};
