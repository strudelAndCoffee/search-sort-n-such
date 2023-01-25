function randomBetween(min, max) {
  return Math.floor(Math.random() * max) + min
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = randomBetween(0, i + 1)
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

function swap(arr, i1, i2) {
  ;[arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

function hashString(string, array_size) {
  let total = 0
  const prime = 17
  for (let i = 0; i < Math.min(string.length, 100); i++) {
    let char = string[i]
    let val = char.charCodeAt(0) - 96
    total = (total * prime + val) % array_size
  }
  return total
}

export { randomBetween, shuffle, swap, hashString }
