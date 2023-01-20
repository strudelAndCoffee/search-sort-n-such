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
// import { BinarySearchTree } from './tree/index.js'
import { MaxBinaryHeap } from './heap/index.js'

const heap = new MaxBinaryHeap()

console.log(heap)
heap.insert(55)
heap.insert(1)
heap.insert(45)
heap.insert(111)
heap.values.forEach((v) => console.log(v))
