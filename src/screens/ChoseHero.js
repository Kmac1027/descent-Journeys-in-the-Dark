import { useState, useEffect } from "react";
import HowToPlay from "./HowToPlay";


function ChoseHero({ setPlayGame, setHomeScreen, chosenHero, setChosenHero, chosenQuest }) {
  const [showStartButton, setShowStartButton] = useState(false);
  const [nameForStartButton, setNameForStartButton] = useState();

  function startGame() {
    if (chosenHero === null) {
      alert('You have Not Chosen a Hero');
    }
    if (chosenQuest === null) {
      alert('You have Not Chosen a Quest');
    }
    if (chosenHero === null && chosenQuest === null) {
      alert('You must chose a Hero and a Quest');
    }
    else if (chosenHero !== null && chosenQuest !== null) {
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
          <button style={{ height: "85px" }} onClick={startGame}>
            Start
            <br />
            {!chosenQuest ? null : chosenQuest.name}
            <br />
            as
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
        <div style={{ height: "400px", width: "475px" }}>
          <input

            type="image"
            id="steelhorns"
            src="images/hero_card/steelhorns.jpg"
            onClick={() => choseThisHero("steelhorns")}
          ></input>
          <p style={{ width: '70%' }}>Hero Ability adjusted for Beta: "Steelhorns can make one MELEE attack when he declares a RUN action"</p>
        </div>
        <div style={{ height: "400px", width: "475px" }}>
          <input

            type="image"
            id="silhouette"
            src="images/hero_card/silhouette.jpg"
            onClick={() => choseThisHero("silhouette")}
          ></input>
          <p style={{ width: '70%' }}>Hero Ability adjusted for Beta: "Silhouette receives 2 free surges on every attack roll"</p>
        </div>
        <div style={{ height: "400px", width: "475px" }}>
          <input

            type="image"
            id="battlemage_jaes"
            src="images/hero_card/battlemage_jaes.jpg"
            onClick={() => choseThisHero("battlemage_jaes")}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ChoseHero;