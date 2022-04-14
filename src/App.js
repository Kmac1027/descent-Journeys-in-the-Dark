// import './styles/reset.css';
import "./styles/App.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import Canvas from "./components/Canvas";
import TilesAndTokens from "./components/TilesAndTokens";
import HomeScreen from "./screens/HomeScreen";
import { quest1 } from "./data/dungeonMaps/quest1";

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
            collisionDetection={chosenQuest.collisionDetection}
          />
          <Player
            chosenHero={chosenHero}
            chosenQuest={chosenQuest}
            revealAreas={chosenQuest.revealAreas}
            turn={turn}
            setTurn={setTurn}
            playGame={playGame}
            setPlayGame={setPlayGame}
            collisionDetection={chosenQuest.collisionDetection}
          />
        </> : null}
      </header>
    </div>
  );
}

export default App;
