import { linearSearch, binarySearch } from './search/index.js';
import {
  bubbleSort,
  selectioSort,
  insertionSort,
  mergeSort,
  quickSort,
} from './sort/index.js';

const arr = [2, 5, 3, 1, 7, 4];
console.log(arr);

// bubbleSort(arr);
// selectioSort(arr);
// insertionSort(arr);
const newArr = quickSort(arr);

console.log(newArr);
