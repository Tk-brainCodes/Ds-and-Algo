class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first == this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("jane");
myQueue.enqueue("ann");
myQueue.enqueue("crooz");
// myQueue.dequeue();
console.log(myQueue);
