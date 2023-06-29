import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill } from "react-icons/bs";


export default function Die(props) {

    // style for the icon
    let styleForIcon = {
        color: "purple",
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    // style for die which will contain icon inside
    const styleForDie = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    // create array to hold all the dice icons
    const dices = [
        <BsFillDice1Fill style={styleForIcon} />,
        <BsFillDice2Fill style={styleForIcon} />,
        <BsFillDice3Fill style={styleForIcon} />,
        <BsFillDice4Fill style={styleForIcon} />,
        <BsFillDice5Fill style={styleForIcon} />,
        <BsFillDice6Fill style={styleForIcon} />
    ];
    
    return (
        <div className="die" onClick={() => props.holdDice()} style={styleForDie}>
            {dices[props.value - 1]}
        </div>
    )
}