import '../styles/potions.css'
import { useEffect, useState } from 'react'

export let potionsArray = [];

function Potions({
  showPotions,
  setShowPotions,
  maxHealth,
  currentHealth,
  setCurrentHealth,
  maxFatigue,
  currentFatigue,
  setCurrentFatigue,
  showShop,
  sell
}) {
  const [potions, setPotions] = useState(potionsArray)
  const [checkPotions, setCheckPotions] = useState(true)
  const [discardButton, setDiscardButton] = useState(false)

  function drinkPotion(type) {
    // console.log(type)
    if (type === 'Health Potion') {
      setCurrentHealth(currentHealth => currentHealth + 3)
    }
    if (type === 'Vitality Potion') {
      setCurrentFatigue(maxFatigue)
    }
    for (let i = 0; i < potionsArray.length; i++) {
      if (potionsArray[i].name === type) {
        var removePotion = potionsArray[i];
        break;
      }
    }
    // console.log(potionsArray.indexOf(removePotion))
    potionsArray.splice(potionsArray.indexOf(removePotion), 1)
    if (checkPotions === true) {
      setCheckPotions(false)
    } else {
      setCheckPotions(true)
    }

  }

  function discardItemButton() {
    if (discardButton === false) {
      setDiscardButton(true)
    } else {
      setDiscardButton(false)
    }

  }
  function discardItem(item) {
    let result = window.confirm(`Once you Discard this ${item.name} it is gone Forever. Do you Really Want to Discard it?`)
    if (result === true) {
      potionsArray.splice(potionsArray.indexOf(item), 1)
    }
    if (checkPotions === true) {
      setCheckPotions(false)
    } else {
      setCheckPotions(true)
    }
  }

  useEffect(() => {
    if (currentHealth > maxHealth) {
      setCurrentHealth(maxHealth)
    }
    setPotions(potionsArray)
  }, [checkPotions])


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
    <div id='potions' style={{ left: '30%', top: '30%', }}>
      <button onClick={() => setShowPotions(false)}>Close</button>
      <h1>Potions</h1>
      <div style={{ display: 'flex', flexdirection: 'row' }}>
        {potions.map((potion, i) =>
          <div key={i} id={i} style={{ padding: '10px' }}>
            <input type='image' height='50' width='50'
              src={potion.img_path} alt={potion.name}
              onClick={() => drinkPotion(potion.name)}
            >
            </input>
            <p>Restore: {potion.name}</p>
            <p>Restore: {potion.restore}</p>
            {showShop ? <button onClick={() => { sell(potion); potionsArray.splice(potionsArray.indexOf(potion), 1) }}>Sell</button> : null}
            {discardButton ? <button onClick={() => { discardItem(potion) }}>Discard Item</button> : null}
          </div>
        )}
      </div>
      {discardButton ? <button onClick={discardItemButton}>Keep Items</button> :
        <button onClick={discardItemButton}>Discard an Item</button>}
    </div>
  );
}

export default Potions;
