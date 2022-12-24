// Merge Sort is best for large data sets
// Not always efficient for small data sets

// Big O (time) = best: O(N log N), worst: O(N log N), average: (N log N)
// Bug O (space) = O(N)

module.exports = function mergeSort(array) {
  const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    return result;
  };

  const runMergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = runMergeSort(arr.slice(0, mid));
    let right = runMergeSort(arr.slice(mid));

    return merge(left, right);
  };

  return runMergeSort(array);
};
