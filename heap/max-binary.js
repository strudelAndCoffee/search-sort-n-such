export default class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  insert(val) {
    this.values.push(val)
    this.bubble_up()
  }

  bubble_up() {
    let index = this.values.length - 1
    const element = this.values[index]

    while (index > 0) {
      let parent_index = Math.floor((index - 1) / 2)
      let parent = this.values[parent_index]
      if (this.values[index] < this.values[parent_index]) break

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
        if (left_child > element) swap = left_i
      }
      if (right_i < length) {
        right_child = this.values[right_i]
        if (
          (swapped === null && right_child > element) ||
          (swapped !== null && right_child > left_child)
        )
          swap = right_i
      }
      if (swap === null) break

      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }

  extract_max() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.bubble_down()
    }

    return max
  }
}
