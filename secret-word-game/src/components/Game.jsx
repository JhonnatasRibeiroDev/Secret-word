/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './Game.css';
import { useState, useRef} from 'react';
// eslint-disable-next-line react/prop-types
function Game({ verifyLetter, pickedCategory, letters, wrongLetters, guessedLetters, score, guesses, handleLetter }) {
    // eslint-disable-next-line no-unused-vars
    const [letter, setLetter] = useState("");
    const[letterInputRef, setLetterInputRef] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        verifyLetter(letter)
        setLetter('')
        letterInputRef.focus()
    }
    return (
        <div className='game'>
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavras: <span className="colorLetterYellow">{pickedCategory}</span>
            </h3>
            <p>Você ainda tem <mark>{guesses} tentativa(s)</mark></p>
            <div className="wordContainer">
                {letters.map((letter, index) => (
                    guessedLetters.includes(letter) ?
                        <span key={index} className='letter'>{letter}</span> : <span key={index} className='blankSquare'></span>
                ))}


            </div>
            <div className="letterContainer">
                <p>Tente advinhar uma letra da palavra:</p>
                <form onSubmit={ handleSubmit}>
                    <input type="text"
                        maxLength="1"
                        name='letter'
                        required onChange={(e) => setLetter(e.target.value)}
                        value={letter} // isso faz com que o input seja controlado pelo estado do componente e não pelo DOM (Document Object Model)
                        ref={setLetterInputRef}
                    />
                    <button className='btn' >Verificar</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.length === 0 ? <p>Nenhuma letra errada até o momento</p> : /* eslint-disable-next-line react/prop-types */
                    wrongLetters.map((letter, index) => (
                        <span key={index} 
                        className="wrongLetter">{letter}</span>
                    ))
                    }
                    {console.log(wrongLetters)}
            </div>
        </div>
    )
} export default Game;