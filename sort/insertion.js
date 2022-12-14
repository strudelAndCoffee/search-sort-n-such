// Insertion Sort is best for almost fully sorted arrays
// Works for 'live' incoming data, arrays that are being added to in real time
// Good for small data sets

// Big O (time) = best: O(N), worst: O(N^2), average: (N^2)
// Big O (space) = O(1)

export default function insertionSort(arr) {
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}
