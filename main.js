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
import { SinglyLinkedList } from './list/index.js';

const list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('!');

list.print();
list.reverse();
list.print();
