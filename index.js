const bubbleSort = require("./sort/bubble.js");
const selectioSort = require("./sort/selection.js");
const insertionSort = require("./sort/insertion.js");

const arr = [2, 5, 3, 1, 7, 4];

// bubbleSort(arr);
// selectioSort(arr);
insertionSort(arr);

console.log(arr);
