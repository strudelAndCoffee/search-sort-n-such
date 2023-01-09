// import { linearSearch, binarySearch } from './search/index.js';
// import {
//   bubbleSort,
//   selectioSort,
//   insertionSort,
//   mergeSort,
//   quickSort,
//   radixSort,
// } from './sort/index.js';
// import { randomBetween, shuffle, findMedian } from './helpers/utils.js';
// import { SinglyLinkedList, DoublyLinkedList } from './list/index.js';
// import { Stack, Queue } from './queue/index.js'
import { BinarySearchTree } from './tree/index.js'

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(7)
tree.insert(2)

let result = tree.find(3)
console.log(result)
