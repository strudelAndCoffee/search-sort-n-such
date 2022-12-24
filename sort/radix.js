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

export default function radixSort(arr) {}
