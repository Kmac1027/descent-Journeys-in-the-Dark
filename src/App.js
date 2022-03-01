// import './styles/reset.css';
import "./styles/App.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import Canvas from "./components/Canvas";
import TilesAndTokens from "./components/TilesAndTokens";
import HomeScreen from "./screens/HomeScreen";
import {
  quest1,
  quest1CollisionDetection,
  revealAreas,
} from "./data/dungeonMaps/quest1";

function App() {
  let chosenQuest = quest1;

  const [turn, setTurn] = useState("player");
  const [playGame, setPlayGame] = useState(false);
  const [chosenHero, setChosenHero] = useState(null);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url("images/background.png")` }}
    >
      <header>
        {!playGame ?
          <HomeScreen playGame={playGame} setPlayGame={setPlayGame} chosenHero={chosenHero} setChosenHero={setChosenHero} />
          : null}
        {playGame ? <>
          <TilesAndTokens chosenHero={chosenHero} />
          <Canvas
            chosenHero={chosenHero}
            chosenQuest={chosenQuest}
            collisionDetection={quest1CollisionDetection}
          />
          <Player
            chosenHero={chosenHero}
            chosenQuest={chosenQuest}
            revealAreas={revealAreas}
            turn={turn}
            setTurn={setTurn}
          />
          {/* <Overlord chosenHero={chosenHero} chosenQuest={chosenQuest} turn={turn} setTurn={setTurn} /> */}
          {/* <button style={{ height: '100px', width: '300px' }} onClick={() => endTurn()}>End Turn</button> */}

        </> : null}

      </header>
    </div>
  );
}

export default App;
