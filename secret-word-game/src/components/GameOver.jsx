import './GameOver.css';
// eslint-disable-next-line react/prop-types
function GameOver({restart}){
    return(
        <div>
            <h3>GameOver</h3>
            <button onClick={restart}>Reiniciar</button>
        </div>
    )
}export default GameOver;