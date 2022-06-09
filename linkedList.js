//singly linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail; //point to the last item
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  taverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value) {
    if (value == null) return;
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.taverseToIndex(index - 1);
    const pointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = pointer;
    pointer.prev = newNode;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (index == null || index > this.length || index == "") return;
    const leader = this.taverseToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.prev;
    leader.next = unwantedNode.next;
    unwantedNode.next = unwantedNode.prev;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) return this.head;
    let firstItem = this.head;
    this.tail = this.head;
    let secondItem = firstItem.next;
    while (secondItem) {
      const temp = secondItem.next; //reference the third item
      secondItem.next = firstItem;
      firstItem = secondItem;
      secondItem = temp;
    }
    this.head.next = null;
    this.head = firstItem;
    return this;
  }
}

const newLinkedList = new DoublyLinkedList(10);
newLinkedList.append(5);
newLinkedList.append(16);
newLinkedList.prepend(1);
newLinkedList.reverse();

// console.log(newLinkedList);
console.log(newLinkedList.printList());
