
// import './styles/reset.css';
import './styles/App.css';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import Canvas from './components/Canvas';

import TilesAndTokens from './components/TilesAndTokens';
import Overlord from './components/Overlord';
import { map1, collisionDetection } from './data/dungeonMaps/map1';

function App() {
  // let chosenHero = 'battlemage_jaes'
  let chosenHero = 'steelhorns'
  let chosenQuest = map1;


  return (
    <div className="App">
      <header>
        <TilesAndTokens chosenHero={chosenHero} />

        <Canvas chosenHero={chosenHero} chosenQuest={chosenQuest}
          collisionDetection={collisionDetection} />
        <Player chosenHero={chosenHero} chosenQuest={chosenQuest} />
        <Overlord />


      </header>

    </div >
  );
}

export default App;
