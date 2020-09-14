module.exports = function check(str, bracketsConfig) {
  let stack = new Array();
  let bracketMap = {};

  for(const inner of bracketsConfig) {
    bracketMap[inner[1]] = inner[0];
  }

  let opening = Object.values(bracketMap);
  let closing = Object.keys(bracketMap);

  for (let i = 0; i < str.length; i++) {
    if(closing.includes(str[i]) && opening.includes(str[i])) {
      if(stack.includes(str[i])) {
        if(stack[stack.length-1] !== str[i]) return false;
        else stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else if(opening.includes(str[i])) { 
      stack.push(str[i]);
    } else if(closing.includes(str[i])) {
        if(stack.length === 0) return false;
        if(stack.pop() !== bracketMap[str[i]]) {
          return false;
        }
    }
  }
    
  if(stack.length === 0) return true;
  return false;
}
