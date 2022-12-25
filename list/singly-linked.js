class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if (this.length === 0) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node = this.head;
    let count = 0;
    while (count < index) {
      node = node.next;
      count++;
    }

    return node;
  }
  set(index, val) {
    let node = this.get(index);
    if (node == null) return false;

    node.val = val;
    return true;
  }
}
