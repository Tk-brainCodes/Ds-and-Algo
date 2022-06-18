//implemetation of stack using linkedlist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  pop() {
    if (!this.top) return null;
    if ((this.top == this.bottom) | (this.length == 0)) this.bottom = null;
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }
  isEmpty() {
    if (this.length == 0) return true;
    return false;
  }
}

const myStack = new Stack();
myStack.push("thankgod");
myStack.push("rhoda");
myStack.pop();
myStack.pop();
console.log(myStack);
