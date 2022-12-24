// import { linearSearch, binarySearch } from './search/index.js';
import {
  bubbleSort,
  selectioSort,
  insertionSort,
  mergeSort,
  quickSort,
} from './sort/index.js';
import { randomBetween, shuffle, findMedian } from './utils.js';

const arr = [];
for (let i = 50; i > 0; i--) arr.push(randomBetween(1, 100));
shuffle(arr);

// bubbleSort(arr);
// selectioSort(arr);
// insertionSort(arr);
// const newArr = mergeSort(arr);
// const newArr = quickSort(arr);

// console.log(arr);
// console.log(newArr);
