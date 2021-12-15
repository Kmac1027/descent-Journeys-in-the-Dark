
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


  return (
    <div className="App" style={{ backgroundImage: `url("images/background.png")` }}>
      <header>

        <TilesAndTokens chosenHero={chosenHero} />
        <Canvas chosenHero={chosenHero} chosenQuest={chosenQuest}
          collisionDetection={quest1CollisionDetection} />
        <Player chosenHero={chosenHero} chosenQuest={chosenQuest} revealAreas={revealAreas} turn={turn} setTurn={setTurn} />
        <Overlord chosenHero={chosenHero} chosenQuest={chosenQuest} turn={turn} setTurn={setTurn} />
        {/* <button style={{ height: '100px', width: '300px' }} onClick={() => endTurn()}>End Turn</button> */}
      </header>

    </div >
  );
}

export default App;
