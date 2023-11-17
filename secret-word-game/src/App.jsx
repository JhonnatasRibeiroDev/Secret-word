import "./App.css";

import { useCallback, useEffect, useState } from "react";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//data
import { words } from './data/words';


const stage = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App (){
  const [gameStage, setGameStage] = useState(stage[0].name);
  const [secretWord, setSecretWord] = useState(words);
  console.log(secretWord);

  const startGame = ()=>{
    setGameStage(stage[1].name);
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen start={startGame} />}
      {gameStage === "game" && <Game/>}
      {gameStage === "end" && <GameOver/>}
    </div>
  )
}export default App;