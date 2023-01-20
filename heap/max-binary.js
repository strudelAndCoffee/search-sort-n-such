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
}
