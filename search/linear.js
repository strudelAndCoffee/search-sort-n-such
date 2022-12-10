// Big O (time) = best: O(1), worst: O(N), average: O(N)
// Big O (space) = O(1)

module.exports = function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};
