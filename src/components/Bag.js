import '../styles/bag.css'
import { useEffect, useState } from 'react'
import { potionsArray } from './Potions';
import SwapScreen from './SwapScreen'

export let bagArray = [];

function Bag({
  showBag,
  setShowBag,
  showShop,
  sell,
  equipRunes,
  weapon1,
  setWeapon1,
  weapon2,
  setWeapon2,
  armor,
  setArmor
}) {

  const [bag, setBag] = useState(bagArray);
  const [bagCheck, setBagCheck] = useState(true)
  const [swapDuelWield, setSwapDuelWield] = useState(false)

  function swap(item) {
    let result = window.confirm(`Do you want to Equip this ${item.name}?`)
    if (result === true) {
      if (item.type === 'melee' || item.type === 'ranged' || item.type === 'magic') {
        if (item.rune === true && equipRunes === false) {
          alert('Your Armor Prevents you from Equiping this rune')
        } else {
          if (item.hands === 2) {
            if (weapon1 && weapon2) {
              bagArray.push(weapon1, weapon2)
              setWeapon1(item)
              setWeapon2()
            } else if (!weapon1 && !weapon2) {
              setWeapon1(item)
            } else if (weapon1 && !weapon2) {
              bagArray.push(weapon1)
              setWeapon1(item)
            } else if (!weapon1 && weapon2) {
              bagArray.push(weapon2)
              setWeapon1(item)
            }


          } else if (item.hands === 1) {
            if (weapon1 && weapon2) {
              setSwapDuelWield(true)
              //either this or prompt boxes
            }


            else if (!weapon1 || (!weapon1 && !weapon2)) {
              setWeapon1(item)
            } else if ((weapon1 && !weapon2) && weapon1.hands !== 2) {
              setWeapon2(item)
            } else if (weapon1.hands === 2) {
              bagArray.push(weapon1)
              setWeapon1(item)
            } else if (weapon2.hands === 2) {
              bagArray.push(weapon2)
              setWeapon1(item)
            }
          }
        }
        bagArray.splice(bagArray.indexOf(item), 1)
      } else if(item.type === 'armor'){
        bagArray.push(armor)
        setArmor(item)
      }
    }
    if(bagCheck === true){
      setBagCheck(false)
    } else {
      setBagCheck(true)
    }
  }

  function addPotionToPotionBag(potion){
    if(potionsArray.length >= 3){
      alert('You have no room to add a potion to your potion bag')
    } else {
      potionsArray.push(potion)
      bagArray.splice(bagArray.indexOf(potion), 1)
    }
    if(bagCheck === true){
      setBagCheck(false)
    } else {
      setBagCheck(true)
    }
  }

useEffect(()=>{
setBag(bagArray)

}, [bagCheck, sell])

  useEffect(() => {
    dragElement(document.getElementById("storageBag"));

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
    <div id='storageBag' style={{ left: '30%', top: '30%', }}>
      <button onClick={() => setShowBag(false)}>Close</button>
      <h1>Item Bag</h1>
      
      <div style={{ display: 'flex', flexdirection: 'row' }}>
        {bag.map((item, i) =>
        item.type !== 'potion' ?
          <div key={i} id={i} style={{ padding: '10px' }}>
            <input className='card' type='image' src={item.img_path} alt={item.name}
              onClick={() => swap(item)}></input>
            <br />
            {showShop ? <button onClick={() => { sell(item);
               bagArray.splice(bagArray.indexOf(item), 1) }}>Sell</button> : null}
          </div>
            :  
          <div key={i} id={i} style={{ padding: '10px' }}>
          <input height='50px' width='50px' type='image' src={item.img_path} alt={item.name}
           onClick={() => addPotionToPotionBag(item)}
         ></input>
         <br />
         {showShop ? <button onClick={() => { sell(item); bagArray.splice(bagArray.indexOf(item), 1) }}>Sell</button> : null}
         </div>
        )}
      </div>
      {swapDuelWield ? <SwapScreen 
      weapon1={weapon1} 
      setWeapon1={setWeapon1}
      weapon2={weapon2} 
      setWeapon2={setWeapon2}
      /> : null}
    </div>
  );
}

export default Bag;
