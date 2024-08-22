import {useState} from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';


function App() {

const[isGameStarted,setisGameStarted]=useState(false);
const toggleGamePlay= ()=>{
  setisGameStarted(previsGameStarted=> !previsGameStarted)
}

  return (
    <>
    {
      isGameStarted ? <GamePlay/>:<StartGame
      toggle={toggleGamePlay}/>
    }
    </>
  )
}

export default App
