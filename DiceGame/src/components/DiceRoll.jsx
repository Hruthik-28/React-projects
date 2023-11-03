import {dice_1, dice_2, dice_3, dice_4, dice_5, dice_6} from '../assets/index.js'

function DiceRoll({roleDice, currentDice}) {
    const diceArray = ['', dice_1, dice_2, dice_3, dice_4, dice_5, dice_6]
    return <>
        <div onClick={roleDice}>
            <img src={diceArray[currentDice]} alt="diceRoll" width={140} className='cursor-pointer' />
        </div>
    </>
}

export default DiceRoll
