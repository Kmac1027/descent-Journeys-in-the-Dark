import { useState, useEffect } from "react";
import ChoseHero from "./ChoseHero";
import ChoseQuest from "./ChoseQuest";
import HowToPlay from "./HowToPlay";


function HomeScreen({ playGame, setPlayGame, chosenHero, setChosenHero, setHomeScreen, chosenQuest, setChosenQuest }) {
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [choseHero, setChoseHero] = useState(false);
    const [pickQuest, setPickQuest] = useState(false);

    function startGame() {
        window.scrollBy(0, 700);
        setShowHowToPlay(false);
        setPickQuest(true);
        setChoseHero(true);
    }
    function rules() {
        if (showHowToPlay === false) {
            window.scrollBy(0, 700);
            setShowHowToPlay(true);
        } else {
            window.scrollBy(0, -700);
            setShowHowToPlay(false);
        }

    }


    return (
        <div >
            <h1>Beta</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img src="images/box_front.jpg"></img>
                <br />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <button style={{ height: "100px", width: "200px" }} onClick={startGame}>Play Game</button>
                    <br />
                    <br />
                    <button style={{ height: "100px", width: "200px" }} onClick={rules}>How To Play</button>
                </div>
            </div>
            <br />
            {showHowToPlay ? <HowToPlay showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay} /> : null}
            {pickQuest ? <ChoseQuest setChosenQuest={setChosenQuest} /> : null}
            {choseHero ? <ChoseHero playGame={playGame} setPlayGame={setPlayGame} chosenHero={chosenHero} setChosenHero={setChosenHero} setHomeScreen={setHomeScreen} chosenQuest={chosenQuest} /> : null}

        </div >
    );
}

export default HomeScreen;