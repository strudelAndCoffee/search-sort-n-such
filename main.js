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
import { WeightedUndirectedGraph } from './graph/index.js'

const graph = new WeightedUndirectedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph.dijkstraShortestPath('A', 'E'))
