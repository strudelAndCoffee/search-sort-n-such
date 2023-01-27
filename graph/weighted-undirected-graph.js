import { Stack, Queue } from '../queue/index.js'
import { PriorityQueue } from '../heap/index.js'

export default class WeightedUndirectedGraph {
  constructor() {
    this.adjacency_list = {}
  }

  addVertex(v) {
    if (!this.adjacency_list[v]) this.adjacency_list[v] = []
  }

  addEdge(v1, v2, weight) {
    // if (!this.adjacency_list[v1] || !this.adjacency_list[v2]) return

    this.adjacency_list[v1].push({ node: v2, weight })
    this.adjacency_list[v2].push({ node: v1, weight })
  }

  removeEdge(v1, v2) {
    if (!this.adjacency_list[v1] || !this.adjacency_list[v2]) return

    this.adjacency_list[v1] = this.adjacency_list[v1].filter((v) => {
      v.node !== v2.node
    })
    this.adjacency_list[v2] = this.adjacency_list[v2].filter((v) => {
      v.node !== v1.node
    })
  }

  removeVertex(v) {
    if (!this.adjacency_list[v]) return

    this.adjacency_list[v].forEach((e) => this.removeEdge(e, v))
    delete this.adjacency_list[v]
  }

  depthFirstTraversalRecursive(start) {
    const result = []
    const visited = {}

    const dfs = (vertex) => {
      if (!vertex) return null

      result.push(vertex)
      visited[vertex] = true
      this.adjacency_list[vertex].forEach((v) => {
        if (!visited[v.node]) return dfs(v.node)
      })
    }
    dfs(start)

    return result
  }

  depthFirstTraversalIterative(start) {
    const result = []
    const visited = {}
    const stack = new Stack()

    stack.push(start)
    visited[start] = true

    let vertex
    while (stack.size) {
      vertex = stack.pop()
      result.push(vertex)
      this.adjacency_list[vertex].forEach((v) => {
        if (!visited[v.node]) {
          visited[v.node] = true
          stack.push(v.node)
        }
      })
    }

    return result
  }

  breadthFirstTraversal(start) {
    const result = []
    const visited = {}
    const queue = new Queue()

    queue.enqueue(start)
    visited[start] = true

    let vertex
    while (queue.size) {
      vertex = queue.dequeue()
      result.push(vertex)
      this.adjacency_list[vertex].forEach((v) => {
        if (!visited[v.node]) {
          visited[v.node] = true
          queue.enqueue(v.node)
        }
      })
    }

    return result
  }

  dijkstraShortestPath(start, end) {
    const distances = {}
    const previous = {}
    const queue = new PriorityQueue()
    let path = []

    // initialize data structures
    for (let v in this.adjacency_list) {
      if (v === start) {
        distances[v] = 0
        queue.enqueue(v, 0)
      } else {
        distances[v] = Infinity
        queue.enqueue(v, Infinity)
      }
      previous[v] = null
    }

    let smallest
    while (queue.values.length) {
      smallest = queue.dequeue().value
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacency_list[smallest]) {
          // find neighboring node
          let next_node = this.adjacency_list[smallest][neighbor]
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + next_node.weight

          if (candidate < distances[next_node.node]) {
            // update new smallest distance to neighbor
            distances[next_node.node] = candidate
            // update previous, i.e. how we got to neighbor
            previous[next_node.node] = smallest
            // enqueue in queue with new priority
            queue.enqueue(next_node.node, candidate)
          }
        }
      }
    }

    return path.concat(smallest).reverse()
  }
}
