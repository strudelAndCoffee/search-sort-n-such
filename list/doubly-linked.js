// Doubly Linked Lists are best for fast searching
// They take up more memory, so not ideal if storage is a concern

// Big O (time):
// -- insert: O(1)
// -- remove: O(1)
// -- search: O(1) to O(N)
// -- access: O(1) to O(N)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;

    return this;
  }
  unshift(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;

    return popped;
  }
  shift() {
    if (this.length === 0) return undefined;

    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;

    return shifted;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let count, current;
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let node = new Node(val);
    let prev = this.get(index - 1);
    let next = prev.next;

    prev.next = node;
    node.prev = prev;
    node.next = next;
    next.prev = node;
    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let target = this.get(index);
    let prev = target.prev;
    let next = target.next;

    prev.next = next;
    next.prev = prev;
    target.next = null;
    target.prev = null;
    this.length--;

    return target;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;
    current = this.head;

    while (current.prev) {
      next = current.prev;
      current.prev = prev;
      current.next = next;
      current = next;
    }

    this.tail.next = null;
    return this;
  }
}
