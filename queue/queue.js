// Stores data in a FIFO order
// Can only add to end of queue
// Can only remove from start of queue

// Big O (time)
//   insertion O(1)
//   removal O(1)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let node = new Node(val)
    if (!this.fist) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.size
  }

  dequeue() {
    if (!this.first) return null
    let node = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return node.value
  }
}
