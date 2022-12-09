function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.ceil(end / 2);

  while (start <= end) {
    if (arr[mid] === val) return mid;
    if (arr[mid] > val) end = mid - 1;
    else start = mid + 1;
    mid = Math.ceil((end + start) / 2);
  }
  return -1;
}

module.exports = binarySearch;
