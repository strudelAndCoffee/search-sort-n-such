// Big O (time):
// insert, delete, access = O(1) best/average case

import { hashString } from '../helpers/utils.js'

export default class HashTable {
  constructor(size = 53) {
    this.key_map = new Array(size)
  }

  _hash(key) {
    if (typeof key === 'string') return hashString(key, this.key_map.length)
    // if (typeof key === 'number') hashNumber(key, this.key_map.length)
    // if (typeof key === 'bigint') hashBigint(key, this.key_map.length)
    // if (typeof key === 'boolean') hashBoolean(key, this.key_map.length)
    // if (typeof key === 'symbol') hashSymbol(key, this.key_map.length)
  }

  set(key, val) {
    const index = this._hash(key)
    if (!this.key_map[index]) this.key_map[index] = []
    for (let i = 0; i < this.key_map[index].length; i++) {
      let item = this.key_map[index][i]
      if (item[0] === key) {
        item[1] = val
        return
      }
    }
    this.key_map[index].push([key, val])
  }

  get(key) {
    const index = this._hash(key)
    let value

    if (this.key_map[index]) {
      this.key_map[index].forEach((item) => {
        if (item[0] === key) value = item[1]
      })
    }

    return value
  }

  keys() {
    let keys = []
    this.key_map.forEach((index) => {
      if (index.length) {
        index.forEach((item) => {
          if (!keys.includes(item[0])) keys.push(item[0])
        })
      }
    })
    return keys
  }

  values() {
    let values = []
    this.key_map.forEach((index) => {
      if (index.length) {
        index.forEach((item) => {
          if (!values.includes(item[1])) values.push(item[1])
        })
      }
    })
    return values
  }
}
