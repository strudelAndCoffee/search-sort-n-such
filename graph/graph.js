export default class Graph {
  constructor() {
    this.adjacency_list = {}
  }

  addVertex(v) {
    if (!this.adjacency_list[v]) this.adjacency_list[v] = []
  }

  addEdge(v1, v2) {
    if (!this.adjacency_list[v1]) this.addVertex(v1)
    if (!this.adjacency_list[v2]) this.addVertex(v2)

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
}
