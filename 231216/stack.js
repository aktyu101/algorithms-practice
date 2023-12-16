function Stack(array = []) {
  if (!Array.isArray(array)) throw "no array";
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Stack.prototype.peek = function () {
  return this.array.at(-1);
};

Stack.prototype.push = function (value) {
  this.array.push(value);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};
//shift/pop, unshift/push
const stack1 = new Stack();

stack1.push(() => {
  console.log("stack1");
});

stack1.push(() => {
  console.log("stack2");
});

stack1.pop()();
stack1.pop()();

// console.log(stack1.getBuffer());

// console.log(stack1.peek());

//pop : 원본을 변형시킴, 뒤에 요소를 빼면서 반환

console.log("stack1", stack1);
