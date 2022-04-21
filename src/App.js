// import './styles/reset.css';
import "./styles/App.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import Canvas from "./components/Canvas";
import TilesAndTokens from "./components/TilesAndTokens";
import HomeScreen from "./screens/HomeScreen";
import EndScreen from "./screens/EndScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { quest1 } from "./data/dungeonMaps/quest1";


function App() {
  let chosenQuest = quest1;

  const [turn, setTurn] = useState("player");
  const [chosenHero, setChosenHero] = useState(null);
  const [homeScreen, setHomeScreen] = useState(true);
  const [playGame, setPlayGame] = useState(false);
  const [endScreen, setEndScreen] = useState(false);
  const [gameOverScreen, setGameOverScreen] = useState(false);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url("images/background.png")` }}
    >
      <header>
        {homeScreen ?
          <HomeScreen playGame={playGame} setPlayGame={setPlayGame} chosenHero={chosenHero} setChosenHero={setChosenHero} homeScreen={homeScreen} setHomeScreen={setHomeScreen} />
          : null}
        {endScreen ? <EndScreen chosenQuest={chosenQuest} /> : null}
        {gameOverScreen ? <GameOverScreen chosenQuest={chosenQuest} /> : null}
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
            setEndScreen={setEndScreen}
            setGameOverScreen={setGameOverScreen}
          />
        </> : null}


      </header>
    </div>
  );
}

export default App;
