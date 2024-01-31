export default function Die({value, isHeld, haldDice, id}){
    const styles = {
        backgroundColor: isHeld ? 'rgb(76, 225, 27)': 'white'
    }
    return(
        <div  className="box" style={styles} onClick = {() => haldDice(id)}>
            {value}
        </div>
    )
}