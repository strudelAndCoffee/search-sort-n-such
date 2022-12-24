// Quick Sort is best for large data sets
// Worst case time complexity if array is already sorted:
// -- pick first pivot to be either random item or median value of items

// Big O (time) = best: O(N log N), worst: O(N^2), average: (N log N)
// Bug O (space) = O(log N)

import { swap, findMedian } from '../utils.js';

const pivot = (arr, start = findMedian(arr), end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
};

export default function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
