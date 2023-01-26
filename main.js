// import { linearSearch, binarySearch } from './search/index.js';
// import {
//   bubbleSort,
//   selectioSort,
//   insertionSort,
//   mergeSort,
//   quickSort,
//   radixSort,
// } from './sort/index.js';
// import { randomBetween, shuffle, findMedian } from './helpers/utils.js';
// import { SinglyLinkedList, DoublyLinkedList } from './list/index.js';
// import { Stack, Queue } from './queue/index.js'
// import { BinarySearchTree } from './tree/index.js'
// import { MaxBinaryHeap } from './heap/index.js'
// import HashTable from './hash_table/hash-table.js'
import { Graph } from './graph/index.js'

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.depthFirstTraversalRecursive('A'))
