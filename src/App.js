
// import './styles/reset.css';
import './styles/App.css';
import { useState } from 'react';
import Player from './components/Player'
import Canvas from './components/Canvas'
import DiceRoll from './components/Dice'
import TilesAndTokens from './components/TilesAndTokens'


function App() {
  const [showDice, setShowDice] = useState(false);

  function showDiceRoll() {
    if (showDice === false) {
      setShowDice(true);
    } else {
      setShowDice(false);
    }

  }

  return (
    <div className="App">
      <header>
        <TilesAndTokens />
        {showDice ? <DiceRoll showDiceRoll={showDiceRoll} /> : null}
        <Canvas />
        <Player showDiceRoll={showDiceRoll} />


      </header>

    </div >
  );
}

export default App;
