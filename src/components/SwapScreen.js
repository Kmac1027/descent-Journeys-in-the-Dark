import '../styles/swapScreen.css'
import { useEffect, useState } from 'react'

function SwapScreen({weapon1, setWeapon1,weapon2, setWeapon2, }) {



  useEffect(() => {
    dragElement(document.getElementById("swapScreen"));

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
    <div id='swapScreen' style={{ left: '30%', top: '30%', }}>
        <h1>Which item do you wish to swap out?</h1>
        <div>
        <input className='card' type='image' src={weapon1.img_path} alt={weapon1.name}
           onClick={() =>console.log(weapon1)}
         ></input>
          <input className='card' type='image' src={weapon2.img_path} alt={weapon1.name}
           onClick={() => console.log(weapon2)}
         ></input>
     </div>
    </div>
  );
}

export default SwapScreen;