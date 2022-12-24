import { linearSearch, binarySearch } from './search/index.js';
import {
  bubbleSort,
  selectioSort,
  insertionSort,
  mergeSort,
} from './sort/index.js';

const arr = [2, 5, 3, 1, 7, 4];
console.log(arr);

// bubbleSort(arr);
// selectioSort(arr);
// insertionSort(arr);
const newArr = mergeSort(arr);

console.log(newArr);
