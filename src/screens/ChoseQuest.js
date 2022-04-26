import { quest1 } from "../data/dungeonMaps/quest1";
import { useState, useEffect } from "react";

export let questForMouseClick;

function ChoseQuest({ setChosenQuest }) {
    function setQuest(quest) {
        setChosenQuest(quest);
        questForMouseClick = quest;
    }

    return (
        <div >
            <h1>Chose Quest</h1>
            <div style={{ display: 'flex', justifycontent: 'space-evenly' }}>
                <div id='quest1'>
                    <h3>{quest1.name}</h3>
                    <input
                        type="image"
                        src="../images/"
                        onClick={() => setQuest(quest1)}
                    ></input>
                </div>
                <div id='quest2'>
                    <input
                        type="image"
                        src="../images/"
                    // onClick={() => setQuest(quest2)}
                    ></input>
                </div>
                <div id='quest3'>
                    <input
                        type="image"
                        src="../images/"
                    // onClick={() => setQuest(quest3)}
                    ></input>
                </div>
            </div>
        </div>

    );
}

export default ChoseQuest;