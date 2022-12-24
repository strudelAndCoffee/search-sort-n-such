// import { linearSearch, binarySearch } from './search/index.js';
import {
  bubbleSort,
  selectioSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
} from './sort/index.js';
import { randomBetween, shuffle, findMedian } from './helpers/utils.js';

const arr = [];
for (let i = 100000; i > 0; i--) arr.push(randomBetween(1, 100000));
shuffle(arr);

// bubbleSort(arr);
// selectioSort(arr);
// insertionSort(arr);
// const newArr = mergeSort(arr);
// const newArr = quickSort(arr);
const newArr = radixSort(arr);

// console.log(newArr);
console.log(
  newArr[0],
  newArr[Math.floor(newArr.length / 2)],
  newArr[newArr.length - 1]
);
