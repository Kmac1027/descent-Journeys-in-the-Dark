import '../styles/randomTreasure.css';
import { useEffect, useState } from 'react'
import { health_potion, vitality_potion } from './Shop'
import { bagArray } from './Bag';

function RandomTreasure({
  showTreasureDiv,
  setShowTreasureDiv,
  randomTreasure,
  setRandomTreasure,
  potionsArray,
  money,
  setMoney,
  copperTreasureArray,
  silverTreasureArray,
  goldTreasureArray
}) {
  const [bgColor, setBgColor] = useState()

  // useEffect(() => {
  //   if (randomTreasure.name === 'Treasure Cache') {
  //     // setRandomTreasure()
  //     setMoney(money => money + randomTreasure.gold)
  //     if (randomTreasure.health_potion === true) {
  //       potionsArray.push(health_potion)
  //     }
  //     if (randomTreasure.vitality_potion === true) {
  //       potionsArray.push(vitality_potion)
  //     }
  //     let pickRandomItem = Math.floor(Math.random() * (copperTreasureArray.length - 1))
  //     let randomItem = copperTreasureArray[pickRandomItem]
  //     setRandomTreasure(randomItem)
  //     copperTreasureArray.splice(copperTreasureArray.indexOf(randomItem), 1);
  //   } else if (randomTreasure.name !== 'Treasure Cache') {
  //     bagArray.push(randomTreasure)
  //   }

  // }, [collect])


  useEffect(() => {
    if (randomTreasure.treasure === 'copper') {
      setBgColor('#b87333')
    } else if (randomTreasure.treasure === 'silver') {
      setBgColor('#c0c0c0')
    } else if (randomTreasure.treasure === 'gold') {
      setBgColor('#ffd700')
    } else {
      setBgColor('gray')
    }
  }, [])

  function closeTreasure() {
    setShowTreasureDiv(false)
  }
  useEffect(() => {
    dragElement(document.getElementById("randomTreasure"));

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
    <div id='randomTreasure' style={{ left: '30%', top: '50%', backgroundColor: `${bgColor}` }}>
      <h2>YOU GOT A {randomTreasure.name}!</h2>
      <h5>It has been added to your bag</h5>
      <img className='card' src={randomTreasure.img_path} alt={'Treasure'} />
      <br />
      <button onClick={() => closeTreasure()}>Close</button>
    </div>
  );
}

export default RandomTreasure;