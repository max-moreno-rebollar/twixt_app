export function createNode(id, row, col) {
    return { id, row, col, neighbors: [], player: null}
}


export function initGraph() {
    const nodes = []
    for(let r = 0; r < 24; r++) {
        for(let c = 0; c < 24; c++) {
            const id = r * 24 + c
            nodes.push(createNode(id, r, c))
        }
    }

    
    nodes.push(createNode(576, -1, -1)) // top node
    nodes.push(createNode(577, -1, -1)) // bot node
    nodes.push(createNode(578, -1, -1)) // left node
    nodes.push(createNode(579, -1, -1)) // right node

    // connect top row to top node
    for(let i = 0; i < 24; i++) {
        nodes[i].neighbors.push(576)
    }

    // connect bottom row to bottom bode
    for(let i = 0; i < 24; i++) {
        nodes[575 - i].neighbors.push(577)
    }

    // connect left most column to left node
    
    // connect right most column to right node


    return nodes
}

let nodes = initGraph()
console.log(nodes)