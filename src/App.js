
// import './styles/reset.css';
import './styles/App.css';
import { useState, useEffect } from 'react';
import Player from './components/Player';
import Canvas from './components/Canvas';

import TilesAndTokens from './components/TilesAndTokens';
import Shop from './components/Shop';
import Overlord from './components/Overlord';
// import { targetClicked, mousePos, correctedPosition } from './player_actions/mouseClick'


function App() {
  // let chosenHero = 'battlemage_jaes'
  let chosenHero = 'steelhorns'
  let chosenQuest = 'map1';

  // useEffect(() => {
  //   document.addEventListener("mousemove", function (e) {
  //     mousePos.x = e.clientX;
  //     mousePos.y = e.clientY;
  //   });
  //   let canvasClick = document.getElementById('canvas');
  //   canvasClick.addEventListener('click', targetClicked);
  // }, []);


  return (
    <div className="App">
      <header>
        <TilesAndTokens chosenHero={chosenHero} />

        <Canvas chosenHero={chosenHero} chosenQuest={chosenQuest} />
        <Player chosenHero={chosenHero} chosenQuest={chosenQuest} />
        <Overlord />


      </header>

    </div >
  );
}

export default App;
