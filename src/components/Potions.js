import '../styles/potions.css'
import { useEffect } from 'react'
import {health_potion, vitality_potion} from './Shop'



function Potions({
    showPotions, 
    setShowPotions,
    potions,
    setPotions,
    currentHealth,
    setCurrentHealth,
    currentFatigue,
    setCurrentFatigue
}) {

    useEffect(() => {
        dragElement(document.getElementById("potions"));
    
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
    <div id='potions'>
        <button onClick={()=>setShowPotions(false)}>Close</button>
        <h1>Potions</h1>
        {potions.map((potion, i)=>
        <input type='image' src='potion.img_url'>Put something heres</input>
        )}
    </div>
  );
}

export default Potions;
