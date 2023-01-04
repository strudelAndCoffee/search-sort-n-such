// Stores data in a LIFO order
// Can only push/pop on end of stack

// Big O (time)
//   insertion O(1)
//   removal O(1)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      let temp = this.first
      this.first = node
      this.first.next = temp
    }
    return ++this.size
  }

  pop() {
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
