import '../styles/jumpScreen.css'
import { useEffect } from 'react'

function JumpScreen({ heroToken, setShowJumpScreen }) {

  function close() {
    setShowJumpScreen(false)
  }
  useEffect(() => {
    dragElement(document.getElementById("jumpScreen"));

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
    <div id='jumpScreen' >
      <div >
        <button onClick={() => close()}>Close</button>
        <br />
        <button>Jump Up</button>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button>Jump Left</button>
          <button>Jump right</button>
        </div>
        <button>Jump Down</button>
      </div>
    </div >
  );
}

export default JumpScreen;