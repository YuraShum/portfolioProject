import { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [allDice, setAllDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [timeTheBegGame, setTimeTheBegGame] = useState(new Date().getTime())
  const [timeTheEndGame, setTimeTheEndGame] = useState();
  const [counterRoll, setCounterRoll] = useState(0);
  const [bestTime, setBestTime] = useState(
    JSON.parse(localStorage.getItem('bestTime'))|| '9007199254740992'
  )
  const [screen, setScreen] = useState({})


  useEffect(() =>{
    localStorage.setItem('bestTime', JSON.stringify(bestTime))

  }, [bestTime])


  useEffect(() =>{
    let counter = 0;
    let FirstHald = allDice[0].isHeld;
    let FisrtValue = allDice[0].value;
    for(let i = 1; i < allDice.length; i++){
      if(FirstHald === allDice[i].isHeld && FisrtValue === allDice[i].value){
        counter +=1;
      }
    }
    if( counter === 9){
      setTenzies(true)
      setTimeTheEndGame(new Date().getTime())
    } else {
      setTenzies(false)
    }

  }, [allDice])


  useEffect(()=> {
    setBestTime(oldBestTime => {
      return (Number(oldBestTime) >= Number(`${( timeTheEndGame - timeTheBegGame)/1000}`) && Number(`${( timeTheEndGame - timeTheBegGame)/1000}`) >= 0)?
      `${( timeTheEndGame - timeTheBegGame)/1000}` :
      oldBestTime
    })
  },  [timeTheEndGame])




  function UpdateDuce(){
    setCounterRoll(prevCounter => prevCounter + 1);
    setAllDice((oldAllDice) => oldAllDice.map((elem) =>{
      if(!elem.isHeld){
        return {
          ...generateNewDice()
        }
      }else{
        return {...elem}
      }
      }))
  }

  function generateNewDice(){
    return{
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function NewGame(){
    setAllDice(allNewDice());
    setTenzies(false);
    setCounterRoll(0)
    setTimeTheBegGame(new Date().getTime())

  }


  function haldDice(id){
    setAllDice( (prevAllDice) => prevAllDice.map(elem =>{
      if(elem.id === id){
        return {...elem, isHeld: !elem.isHeld}
      }else{
        return {...elem}
      }
    }))
  }

  function allNewDice(){
    let array = [];
    for(let i = 0; i < 10; i++){
      array[i] = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      };
    }
    return array;
  }

  useEffect( () => {
    setScreen(
      {
        width: window.screen.width,
        fullHeightWindow: Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight,
        )
      }
    )
  }, [tenzies])
  
  



  let elementDie = allDice.map((elem) => 
  <Die  
    key = {elem.id} 
    value ={elem.value}  
    isHeld = {elem.isHeld} 
    haldDice = {haldDice} 
    id = {elem.id}>

  </Die>)


  return (
    <main className='content'>
        {tenzies && <Confetti
        width={screen.width}
        height ={screen.fullHeightWindow}/>}
        <h1 className="content__title">Tenzies</h1>
        <p className="content__text"> Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
        <div className="grid__content">
          {elementDie}
        </div>
        <button className="button__roll" onClick={tenzies? NewGame : UpdateDuce}>{tenzies ? "New Game": "Roll"}</button>
        {tenzies && 
        <div className="content__result">
          <p>Current time: {timeTheEndGame && `${( timeTheEndGame - timeTheBegGame)/1000} sec` }</p>
          <p>Number of moves: {counterRoll}</p>
          <p>Best time: {bestTime} sec</p>
        </div>}
        
    </main>
  );
}

export default App;
