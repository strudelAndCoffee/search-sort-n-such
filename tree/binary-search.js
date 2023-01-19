// Binary Search Trees are best for number data and not storing repeat numbers
// Good for fast insertion and searching
// Not ideal for consistently increasing number values, root should be median value if possible

// Big O (time)
// -- Insertion: O(log N)
// -- Searching: O(log N)

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

  // best for trees with narrow branching
  breadthFirstSearch(start = null) {
    if (this.root === null) return null

    let data = []
    let queue = []
    let node = start ? start : this.root
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }

  // best for trees with wide branching
  depthFirstSearchPreOrder(start = null) {
    // returns data from root to leaves
    // preserves original order of root and branching of tree
    if (this.root === null) return null

    let data = []
    let current = start ? start : this.root

    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)

    return data
  }

  depthFirstSearchPostOrder(start = null) {
    // returns data from leaves to root
    if (this.root === null) return null

    let data = []
    let current = start ? start : this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(current)

    return data
  }

  depthFirstSearchInOrder(start = null) {
    // returns data in order of values
    if (this.root === null) return null

    let data = []
    let current = start ? start : this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(current)

    return data
  }
}
