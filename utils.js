function randomBetween(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = randomBetween(0, i + 1);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function swap(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function findMedian(arr) {
  let sampleData = {};

  const total = arr.length;
  let sample;
  if (total <= 16) sample = 1;
  if (total > 16 && total <= 32) sample = 2;
  if (total > 32 && total <= 256) sample = 4;
  if (total > 256 && total <= 1024) sample = 16;
  if (total > 1024 && total <= 4096) sample = 32;
  if (total > 4096 && total <= 16384) sample = 128;
  if (total > 16384 && total <= 131072) sample = 512;
  if (total > 131072) sample = 1028;
  const ratio = 1 / sample;
  const sampleSize = Math.ceil(total * ratio);

  let n = sampleSize;
  while (n >= 0) {
    let index = randomBetween(0, total);

    if (sampleData[index] == null) {
      sampleData[index] = arr[index];
      n--;
    }
  }

  let vals = Object.values(sampleData);
  vals.sort((a, b) => a - b);

  return vals[Math.floor(sampleSize / 2)];
}

export { randomBetween, shuffle, swap, findMedian };
