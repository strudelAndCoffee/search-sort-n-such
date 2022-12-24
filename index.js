const { linearSearch, binarySearch } = require('./search');
const {
  bubbleSort,
  selectioSort,
  insertionSort,
  mergeSort,
} = require('./sort');

const arr = [2, 5, 3, 1, 7, 4];
console.log(arr);

// bubbleSort(arr);
// selectioSort(arr);
// insertionSort(arr);
mergeSort(arr);

console.log(arr);
