// Selection Sort is best when you don't want a lot of item swapping in the array
// Good for small data sets
// Big O (time) = best: O(N^2), worst: O(N^2), average: (N^2)
// Bug O (space) = O(1)

const { swap } = require("../utils.js");

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) swap(arr, i, min);
  }
}

module.exports = selectionSort;
