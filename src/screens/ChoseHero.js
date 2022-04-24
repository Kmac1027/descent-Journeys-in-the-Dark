import { useState, useEffect } from "react";
import HowToPlay from "./HowToPlay";


function ChoseHero({ setPlayGame, setHomeScreen, chosenHero, setChosenHero }) {
  const [showStartButton, setShowStartButton] = useState(false);
  const [nameForStartButton, setNameForStartButton] = useState();

  function startGame() {
    if (chosenHero === null) {
      alert('You have Not Chosen a Hero');
    } else {
      setHomeScreen(false);
      setPlayGame(true);
    }

  }

  function choseThisHero(name) {
    setChosenHero(name);
    setNameForStartButton(name);
    setShowStartButton(true);
  }

  return (
    <>
      <h2>Chose Your Hero!</h2>
      {showStartButton ? (
        <div>
          <button style={{ height: "75px" }} onClick={startGame}>
            Start Game as
            <br />
            <br />
            {nameForStartButton === "battlemage_jaes"
              ? "BATTLEMAGE JAES"
              : nameForStartButton.toUpperCase()}
          </button>
        </div>
      ) : null}
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <input
          style={{ height: "400px", width: "475px" }}
          type="image"
          id="steelhorns"
          src="../images/hero_card/steelhorns.jpg"
          onClick={() => choseThisHero("steelhorns")}
        ></input>
        <p>Hero Ability adjusted for Beta to: "Steelhorns can make one MELEE attack when he declares a RUN action"</p>
        <input
          style={{ height: "400px", width: "475px" }}
          type="image"
          id="silhouette"
          src="../images/hero_card/silhouette.jpg"
          onClick={() => choseThisHero("silhouette")}
        ></input>
        <p>Hero Ability adjusted for Beta to: "Silhouette receives 2 free surges on every attack roll"</p>
        <input
          style={{ height: "400px", width: "475px" }}
          type="image"
          id="battlemage_jaes"
          src="../images/hero_card/battlemage_jaes.jpg"
          onClick={() => choseThisHero("battlemage_jaes")}
        ></input>
      </div>
    </>
  );
}

export default ChoseHero;