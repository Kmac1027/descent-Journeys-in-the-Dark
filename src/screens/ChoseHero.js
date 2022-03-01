import { useState, useEffect } from "react";
import HowToPlay from "./HowToPlay";


function ChoseHero({ playGame, setPlayGame, chosenHero, setChosenHero }) {
    const [showStartButton, setShowStartButton] = useState(false);
    const [nameForStartButton, setNameForStartButton] = useState();

    function startGame() {
        if (chosenHero === null) {
            alert('You have Not Chosen a Hero');
        } else {
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
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <input
                    type="image"
                    id="steelhorns"
                    src="images/hero_card/steelhorns.jpg"
                    onClick={() => choseThisHero("steelhorns")}
                ></input>
                {showStartButton ?
                    <div style={{ display: "flex", alignSelf: "center" }}>
                        <button style={{ height: "75px" }} onClick={startGame}>Start Game as {nameForStartButton}</button>
                    </div>
                    : null}

                <input
                    type="image"
                    id="battlemage_jaes"
                    src="images/hero_card/battlemage_jaes.jpg"
                    onClick={() => choseThisHero("battlemage_jaes")}
                ></input>
            </div >


        </>
    );
}

export default ChoseHero;