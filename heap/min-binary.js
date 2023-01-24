export default class MinBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(val) {
    this.values.push(val)
    this.bubble_up()
  }

  extract_min() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.bubble_down()
    }

    return min
  }

  bubble_up() {
    let index = this.values.length - 1
    const element = this.values[index]

    while (index > 0) {
      let parent_index = Math.floor((index - 1) / 2)
      let parent = this.values[parent_index]
      if (this.values[index] > this.values[parent_index]) break

      this.values[parent_index] = element
      this.values[index] = parent
      index = parent_index
    }
  }

  bubble_down() {
    const length = this.values.length
    const element = this.values[0]
    let index = 0

    while (true) {
      let left_i = 2 * index + 1
      let right_i = 2 * index + 2
      let left_child, right_child
      let swap = null

      if (left_i < length) {
        left_child = this.values[left_i]
        if (left_child < element) swap = left_i
      }
      if (right_i < length) {
        right_child = this.values[right_i]
        if (
          (swapped === null && right_child < element) ||
          (swapped !== null && right_child < left_child)
        )
          swap = right_i
      }
      if (swap === null) break

      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}
