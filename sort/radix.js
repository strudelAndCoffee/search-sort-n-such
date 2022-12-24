// Radix Sort is best for large data sets of integers only

// N = number of integers
// k = word size (number of digits)
// Big O (time) = best: O(Nk), worst: O(Nk), average: (Nk* <or> N log N**)
// *if k is a uniform or close to uniform length for all N integers
// **if k is a random distrubution of any length
// Big O (space) = O(N + k)

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const countDigits = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, countDigits(nums[i]));
  }
  return max;
};

// Arg 'arr' must be an array of integers
export default function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let n of arr) {
      let digit = getDigit(n, i);
      buckets[digit].push(n);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
