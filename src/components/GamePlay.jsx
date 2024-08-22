import {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import DicePlay from './DicePlay'
import { Button, OutlineButton } from './Buttons/Button'
import ShowRules from './ShowRules'
const GamePlay = () => {
  const [score,setScore]=useState(0)
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setcurrentDice] = useState(1);
  const [error,setError]=useState("")
  const [showRules,setshowRules]=useState(false)
  
  const generateRandomNumber =(min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const roleDice = ()=>{
    if(!selectedNumber) {
      setError("You have not select any number")
      return;
    }
    const RandomNumber=generateRandomNumber(1,7);
    setcurrentDice((prevcurrentDice) => RandomNumber)

    if(selectedNumber==RandomNumber){
      setScore(prevScore=>prevScore+RandomNumber)
    }
    else{
      setScore(prevScore=>prevScore-2)
    }
    setSelectedNumber(prevselectedNumber=>!prevselectedNumber)
  };
  const ResetScore=()=>{
    setScore(0)
  };
  const toggleRules=()=>{
    setshowRules(prevshowRules=>!prevshowRules)
  };
  return (
    <MainContainer>
        <div className='top-section'>
            <TotalScore score={score} />
            <NumberSelector 
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            />
        </div>
        <DicePlay 
        currentDice={currentDice}
        roleDice={roleDice}/>
        <div className='btn'>
          <OutlineButton onClick={ResetScore}>Reset Score</OutlineButton>
          <Button onClick={toggleRules}>{showRules?"Hide ":"Show "} Rules</Button>
        </div>
        {showRules&&<ShowRules/>}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.main`
padding:70px;
.top-section {
    display:flex;
    justify-content: space-around;
    align-item: end;
}
.btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  }
`
