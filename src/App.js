import './App.css';
import { Routes, Route, NavLink } from "react-router-dom"
import { useState,createContext } from 'react';
import './Pages/Game'
import Game from './Pages/Game';
import Game2 from './Pages/Game2';
export const gameContext=createContext()
function App() {
  const [player, setPlayer] = useState("")
  const [computer, setComputer] = useState("")
  const contextValue={player, setPlayer, computer, setComputer}

  return (
    <gameContext.Provider value={contextValue}>
    <div className="App">
      
      <NavLink to="/Game">Play PvP!</NavLink>
      <NavLink to="/Game2">Player vs CPU!</NavLink>
      <Routes>
     <Route path='/Game' element={<Game/>}></Route>
     <Route path='/Game2' element={<Game2/>}></Route>
     </Routes>
    </div>
     </gameContext.Provider>
  );
}

export default App;
