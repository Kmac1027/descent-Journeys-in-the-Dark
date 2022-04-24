import '../styles/runBattleAdvance.css';

import { useState, useEffect } from "react";




function RunBattleadvance({ numberOfAttacks, setNumberOfAttacks, speed, baseSpeed, setSpeed, showRunBattleAdvance, setShowRunBattleAdvance, chosenHero }) {
    const [chosenAction, setChosenaction] = useState("");

    function battle() {
        setNumberOfAttacks(3);
        setSpeed(0);
        setChosenaction("BATTLE");
    }
    function run() {
        if (chosenHero === 'steelhorns') {
            setNumberOfAttacks(1);
            setSpeed(baseSpeed * 3);
            setChosenaction("RUN");
        } else {
            setNumberOfAttacks(0);
            setSpeed(baseSpeed * 3);
            setChosenaction("RUN");
        }
    }
    function advance() {
        setNumberOfAttacks(2);
        setSpeed(baseSpeed);
        setChosenaction("ADVANCE");
    }

    function selectAction() {
        setShowRunBattleAdvance(false);
    }

    useEffect(() => {
        dragElement(document.getElementById("runBattleAdvance"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }, []);

    return (
        <div id='runBattleAdvance' style={{ left: '30%', top: '50%', }}>
            <h2>Select wich Action you would like to take this turn</h2>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ border: "dotted", height: "200px", width: "200px" }}>
                    <button style={{ height: "50px", width: "70px" }} onClick={run}>Run</button>
                    <p>The "RUN" action allows you to move your base speed up to three times</p>
                </div>
                <div style={{ border: "dotted", height: "200px", width: "200px" }}>
                    <button style={{ height: "50px", width: "70px" }} onClick={battle}>Battle</button>
                    <p>The "BATTLE" action allows you to make three attacks</p>
                </div>
                <div style={{ border: "dotted", height: "200px", width: "200px" }}>
                    <button style={{ height: "50px", width: "70px" }} onClick={advance}>Advance</button>
                    <p>The "ADVANCE" action allows you to move your base speed and make two attacks</p>
                </div>
            </div>
            <br />
            Movement: {speed}
            <br />
            Attacks: {numberOfAttacks}
            <br />
            <br />
            {chosenAction !== "" ?
                <button style={{
                    height: "100px", width: "200px"
                }} onClick={() => selectAction()}>Choose the "{chosenAction}" action</button>
                : null
            }

        </div >
    );
}

export default RunBattleadvance;