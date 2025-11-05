interface Node {
  id: number;
  row: number;
  col: number;
  neighbors: number[];
  player: number | undefined;
}

type Graph = Node[];

export function initNode(id: number, row: number, col: number): Node {
  return { id, row, col, neighbors: [], player: undefined };
}

export function initGraph() {
  const nodes = [];
  for (let r = 0; r < 24; r++) {
    for (let c = 0; c < 24; c++) {
      const id = r * 24 + c;
      nodes.push(initNode(id, r, c));
    }
  }

  nodes.push(initNode(576, -1, -1)); // top node
  nodes.push(initNode(577, -1, -1)); // bot node
  nodes.push(initNode(578, -1, -1)); // left node
  nodes.push(initNode(579, -1, -1)); // right node

  // connect top row to top node
  for (let i = 0; i < 24; i++) {
    nodes[i].neighbors.push(576);
  }

  // connect bottom row to bottom bode
  for (let i = 0; i < 24; i++) {
    nodes[575 - i].neighbors.push(577);
  }

  // connect left most column to left node
  for (let i = 0; i < 24; i++) {
    nodes[i * 24].neighbors.push(578);
  }

  // connect right most column to right node
  for (let i = 0; i < 24; i++) {
    nodes[(i + 1) * 24 - 1].neighbors.push(579);
  }

  return nodes;
}

export function addEdge(nodeA: Node, nodeB: Node) {
  nodeA.neighbors.push(nodeB.id);
  nodeB.neighbors.push(nodeA.id);
}
