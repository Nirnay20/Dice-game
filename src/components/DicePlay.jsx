import { useState } from 'react'
import styled from 'styled-components'

const DicePlay = ({currentDice,roleDice}) => {
  
   
  return (
    <DiceContsiner>
      <div className='dice'
      onClick={roleDice}>
        <img src={`/images/diceimages/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContsiner>
  )
}

export default DicePlay;

const DiceContsiner =styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
.dice {
cursor:pointer;
}
p {
  font-size:24px;
}

`;
