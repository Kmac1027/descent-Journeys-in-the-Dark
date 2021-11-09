
// import './styles/reset.css';
import './styles/App.css';
import { useState } from 'react';
import Player from './components/Player';
import Canvas from './components/Canvas';
import DiceRoll from './components/Dice';
import TilesAndTokens from './components/TilesAndTokens';
import Shop from './components/Shop';
import Overlord from './components/Overlord';


function App() {
  // let chosenHero = 'battlemage_jaes'
  let chosenHero = 'steelhorns'
  const [showDice, setShowDice] = useState(false);
  const [showShop, setShowShop] = useState(false);

  function showDiceRoll() {
    if (showDice === false) {
      setShowDice(true);
    } else {
      setShowDice(false);
    }
  }
  function showShopItems() {
    if (showShop === false) {
      setShowShop(true);
    } else {
      setShowShop(false);
    }
  }

  return (
    <div className="App">
      <header>
        <TilesAndTokens chosenHero={chosenHero} />
        {showDice ? <DiceRoll showDiceRoll={showDiceRoll} /> : null}
        {showShop ? <Shop showShopItems={showShopItems} /> : null}
        <Canvas chosenHero={chosenHero} />
        <Player
          chosenHero={chosenHero}
          showDiceRoll={showDiceRoll}
          showShopItems={showShopItems}
        />
        <Overlord />


      </header>

    </div >
  );
}

export default App;
