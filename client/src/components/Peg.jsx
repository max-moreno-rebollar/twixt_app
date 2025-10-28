const Peg = ({ player, cx, cy }) => {
    let color = ""
    if(player == 0) {
        color = "blue"
    } else if(player == 1) {
        color =  "red"
    } else {
        color = "black"
    }

    return <circle cx={cx} cy={cy} r="6" color = {color}/>
}

export default Peg