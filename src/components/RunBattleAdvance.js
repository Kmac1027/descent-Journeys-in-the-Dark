import '../styles/runBattleAdvance.css';

import { useState, useEffect } from "react";




function RunBattleadvance({ setNumberOfAttacks, baseSpeed, setSpeed }) {


    function battle() {
        setNumberOfAttacks(3);
        setSpeed(0);
    }
    function run() {
        setNumberOfAttacks(0);
        setSpeed(baseSpeed * 3);
    }
    function advance() {
        setNumberOfAttacks(2);
        setSpeed(baseSpeed);
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
            <div>
                <button onClick={run}>Run</button>
                <button onClick={battle}>Battle</button>
                <button onClick={advance}>Advance</button>
            </div>
            <button>Select</button>
        </div >
    );
}

export default RunBattleadvance;