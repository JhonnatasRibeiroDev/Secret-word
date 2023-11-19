import "./App.css";

import { useCallback, useEffect, useState } from "react";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import GameWin from "./components/GameWin";

//data
import { words } from './data/words';

const  quessesQuantity = 3;
const stage = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "win"},
  {id: 4, name: "lose"},
]

function App (){
  const [gameStage, setGameStage] = useState(stage[0].name);
  const [secretWord, setSecretWord] = useState(words);
  console.log(secretWord);

const [pickedWord, setPickedWord] = useState("");
const [pickedCategory, setPickedCategory] = useState("");
const [letters, setLetters] = useState([""]);
const [wrongLetters, setWrongLetters] = useState([]);
const [guessedLetters, setGuessedLetters] = useState([]);
const [score, setScore] = useState(0);
const [guesses, setGuesses] = useState(quessesQuantity);

const pickWordAndCategory = ()=>{
  const categories = Object.keys(secretWord);
  const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  const word = secretWord[category][Math.floor(Math.random() * secretWord[category].length)];
  console.log(categories)
  return {category, word};
}

console.log(gameStage)
//Start Game
  const startGame = ()=>{
    //pick a word

    const {category, word} = pickWordAndCategory();
    setPickedWord(word);
    setPickedCategory(category);
    


    //create an array of letters
    let wordLetter = word.split("");
    wordLetter = wordLetter.map((L)=>(
      L.toLowerCase()
    ))
    setLetters(wordLetter);
    //wordLetter = wordLetter.map((letter)=>({letter, guessed: false}));
    console.log(word, category);
    console.log(wordLetter);

    setGameStage(stage[1].name);
  }


//process the word
const verifyLetter = (letter)=>{
  const letterLower = letter.toLowerCase();
  if(guessedLetters.includes(letterLower) || wrongLetters.includes(letterLower)){
   return
  }

  if(letters.includes(letterLower)){
    setGuessedLetters([...guessedLetters, letterLower]);
    setScore(score + 1);
}else{
  setWrongLetters([...wrongLetters, letterLower]);
  setGuesses(guesses - 1);
}
}

const clearLetterStages = ()=>{
  setLetters([]);
  setGuessedLetters([]);
  setWrongLetters([]);
  setGuesses(quessesQuantity);
  

}
console.log(gameStage, "gameStage antes do useEffect")
console.log(guesses)
useEffect(()=>{
  if(guesses === 0){
    clearLetterStages();
    setGameStage(stage[3].name);
  }
}, [guesses])
console.log(gameStage, "gameStage depois do useEffect")
console.log(guesses)
console.log(guessedLetters, 'guessedLetters')
console.log(letters, "letters")
useEffect(()=>{
  if(guessedLetters.length === letters.length){
    setGameStage(stage[2].name);
  }
}, [guessedLetters])
//Restart Game
const restartGame = ()=>{
  setGameStage(stage[0].name);
}
console.log(gameStage)
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen start={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory}
      letters={letters} wrongLetters={wrongLetters} guessedLetters={guessedLetters} score={score} guesses={guesses}
      />}
      {gameStage === "win" && <GameWin/>}
      {gameStage === "lose" && <GameOver restart={restartGame}/>}
      
    </div>
  )
}export default App;
3