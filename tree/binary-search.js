class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let node = new Node(val)

    if (this.root === null) {
      this.root = node
      return this
    }
    if (val === this.root.value) return this

    let current = this.root
    while (true) {
      if (val === current.value) return this
      if (val < current.value) {
        if (current.left === null) {
          current.left = node
          return this
        }
        current = current.left
      }
      if (val > current.value) {
        if (current.right === null) {
          current.right = node
          return this
        }
        current = current.right
      }
    }
  }

  search(val) {
    if (this.root === null) return false

    let current = this.root
    let found = false
    while (current !== null && !found) {
      if (val < current.value) current = current.left
      else if (val > current.value) current = current.right
      else return true
    }

    return false
  }

  find(val) {
    if (this.root === null) return null

    let current = this.root
    while (current !== null) {
      if (val < current.value) current = current.left
      else if (val > current.value) current = current.right
      else return current
    }

    return undefined
  }
}
