import './StartScreen.css';
// eslint-disable-next-line react/prop-types
function StartScreen({start}) {
  return (
    <div className="StartScreen">
      <h2>Secret Word Game</h2>
      <p>Clique abaixo para começar</p>
        <button onClick={start}>Jogar</button>
    </div>
  )
}export default StartScreen;