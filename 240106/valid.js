import { Stack } from "../231216/stack.js";

function isParenthesisValid(validationString) {
  const stack = new Stack();
  for (let currentChar of validationString) {
    // console.log("currentChar", currentChar);
    if (currentChar === "(") {
      stack.push(currentChar);
    }
    if (currentChar === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}
console.log("false", isParenthesisValid("(()))"));
console.log("false", isParenthesisValid("()()("));
console.log("true", isParenthesisValid("(())"));
