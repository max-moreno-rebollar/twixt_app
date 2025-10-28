import * as Graph from '../game/graph.js'
import Peg from './Peg.jsx'

const Board = () => {
    const graph = Graph.initGraph()
    const spacing = 1000 / 24
    console.log("Rendering Board")
    console.log(graph)
    return(
        <>
            <p>Welcome!</p>
            <svg height="1000" width="1000">
                {graph.map((n) => {
                    return <Peg cx={(n.col * spacing) + (spacing / 2)} cy = {(n.row * spacing) + (spacing / 2)} player={n.player}/>
                })}
                
            </svg>
        </>
    )
}

export default Board