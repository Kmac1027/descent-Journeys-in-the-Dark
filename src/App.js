
// import './styles/reset.css';
import './styles/App.css';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import Canvas from './components/Canvas';
import TilesAndTokens from './components/TilesAndTokens';
import Overlord from './components/Overlord';
import { map1, collisionDetection } from './data/dungeonMaps/map1';
import { quest1, quest1CollisionDetection, revealAreas } from './data/dungeonMaps/quest1';

function App() {
  // let chosenHero = 'battlemage_jaes'
  let chosenHero = 'steelhorns'
  let chosenQuest = quest1;

  const [turn, setTurn] = useState('player')
  function endTurn() {
    if (turn === 'player') {
      setTurn('overlord')
    } else {
      setTurn('player')
    }
    console.log(turn)
  }

  return (
    <div className="App" style={{ backgroundImage: `url("images/background.png")` }}>
      <header>
        <button style={{ height: '100px', width: '300px' }} onClick={() => endTurn()}>End Turn</button>
        <TilesAndTokens chosenHero={chosenHero} />
        <Canvas chosenHero={chosenHero} chosenQuest={chosenQuest}
          collisionDetection={quest1CollisionDetection} />
        <Player chosenHero={chosenHero} chosenQuest={chosenQuest} revealAreas={revealAreas} turn={turn} />
        <Overlord chosenHero={chosenHero} chosenQuest={chosenQuest} turn={turn} setTurn={setTurn} />

      </header>

    </div >
  );
}

export default App;
