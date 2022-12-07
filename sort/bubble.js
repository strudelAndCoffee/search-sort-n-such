// Bubble Sort is best for almost fully sorted arrays
// Good for small data sets
// Big O (time) = best: O(N), worst: O(N^2), average: (N^2)
// Bug O (space) = O(1)

const { swap } = require("../utils.js");

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
}

module.exports = bubbleSort;
