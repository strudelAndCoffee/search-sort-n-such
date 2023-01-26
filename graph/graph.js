import { Stack, Queue } from '../queue/index.js'

export default class Graph {
  constructor() {
    this.adjacency_list = {}
  }

  addVertex(v) {
    if (!this.adjacency_list[v]) this.adjacency_list[v] = []
  }

  addEdge(v1, v2) {
    // if (!this.adjacency_list[v1]) this.addVertex(v1)
    // if (!this.adjacency_list[v2]) this.addVertex(v2)

    if (!this.adjacency_list[v1].includes(v2)) this.adjacency_list[v1].push(v2)
    if (!this.adjacency_list[v2].includes(v1)) this.adjacency_list[v2].push(v1)
  }

  removeEdge(v1, v2) {
    if (!this.adjacency_list[v1] || !this.adjacency_list[v2]) return

    this.adjacency_list[v1] = this.adjacency_list[v1].filter((v) => v !== v2)
    this.adjacency_list[v2] = this.adjacency_list[v2].filter((v) => v !== v1)
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
        if (!visited[v]) return dfs(v)
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
        if (!visited[v]) {
          visited[v] = true
          stack.push(v)
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
        if (!visited[v]) {
          visited[v] = true
          queue.enqueue(v)
        }
      })
    }

    return result
  }
}
