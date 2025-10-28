const Peg = ({ player, cx, cy }) => {
    if(player == 0) {
        return "blue"
    } else if(player == 1) {
        return "red"
    } else {
        return "black"
    }
    
    return <circle cx={cx} cy={cy} r="6"  fill = {props.color}/>
}

export default Peg