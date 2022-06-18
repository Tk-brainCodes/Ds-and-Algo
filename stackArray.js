//Stack implementation with array

let stackArray = [];

const peek = () => {
  if (stackArray.length == 0) return;
  return stackArray[stackArray.length - 1];
};

const push = (value) => {
  return stackArray.unshift(value);
};

const pop = () => {
  return stackArray.shift();
};

const isEmpty = () => {
  return stackArray.length;
};

push("jane");
push("mark");
console.log(peek());
console.log(stackArray);
