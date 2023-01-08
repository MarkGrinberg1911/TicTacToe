import { useContext, useState } from "react";
import GameBoard from "../Components/GameBoard";
import { gameContext } from "../App";
import './game.css'
function Game() {
  const {setPlayer, setComputer } = useContext(gameContext)
  const [bye, setBye]=useState("")
  function setO() {
    setPlayer("O")
    setComputer("X")
    setBye("bye")
  }
  function setX(){
    setPlayer("X")
    setComputer("O")
    setBye("bye")
  }

  return (
    <div className="App">
        <div><p>Hello player Pick a fighter!</p></div>
        <div className="pick"><input  id='x' className={bye} type='checkbox' onClick={()=>setX()}></input><label className={bye} htmlFor="x">X</label><br/><input onClick={()=>setO()}  id='o' className={bye} type='checkbox'></input><label className={bye} htmlFor="o">O</label>
        
        </div>
        <div className="gameboarddiv"><GameBoard/></div>
     
    </div>
  );
}

export default Game;
