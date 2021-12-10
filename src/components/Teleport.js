import '../styles/teleport.css'
import { useEffect, useState } from 'react'
import { disableMovment } from '../player_actions/movement'



function Teleport({ port, herotoken, setShowTeleport, setShowReturnToTown }) {
  // const [teleport, setTeleport] = useState(teleportArray)
  // setTeleport(teleportArray)
  function teleport(glyph) {
    setShowReturnToTown(true)
    herotoken.x = glyph.x
    herotoken.y = glyph.y
    disableMovment.up = false;
    disableMovment.left = false;
    disableMovment.right = false;
    disableMovment.down = false;
    disableMovment.downRight = false
    disableMovment.upLeft = false;
    disableMovment.upRight = false;
    disableMovment.downLeft = false;
    setShowTeleport(false)
  }

  function close() {
    setShowReturnToTown(false)
    setShowTeleport(false)
  }

  useEffect(() => {
    dragElement(document.getElementById("teleport"));

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
  }, [])
  return (
    <div id='teleport' style={{ left: '40%', top: '70%', }}>
      <button onClick={() => close()}>Close</button>
      <h2>Select the Glyph you would like to return to</h2>
      {port.map((glyph, i) =>
        <div key={i} style={{ padding: '5px' }}>
          <button onClick={() => teleport(glyph)}>{glyph.area}</button>
        </div>
      )}
    </div >
  );
}

export default Teleport;