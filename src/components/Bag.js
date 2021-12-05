import '../styles/bag.css'
import { useEffect, useState } from 'react'
import { potionsArray } from './Potions';
import {
  health_potion,
  vitality_potion,
  copperTreasureArray,
  silverTreasureArray,
  goldTreasureArray
} from './Shop';


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
  setArmor,
  other1,
  setOther1,
  other2,
  setOther2,
  setEquipRunes,
  money,
  setMoney,
  setShowTreasureDiv,
  setRandomTreasure
}) {

  const [bag, setBag] = useState(bagArray);
  const [bagCheck, setBagCheck] = useState(true)
  const [discardButton, setDiscardButton] = useState(false)


  function swap(item) {
    let result = window.confirm(`Do you want to Equip this ${item.name}?`)
    if (result === true) {
      if (item.type === 'melee' || item.type === 'ranged' || item.type === 'magic' || item.type === 'shield') {
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
              setWeapon2()
              setWeapon1(item)
            }


          } else if (item.hands === 1) {
            if (weapon1 && weapon2) {
              let result = window.confirm(`Do you want to Swap out your ${weapon1.name}?`)
              if (result === true) {
                bagArray.push(weapon1)
                setWeapon1(item)
              } else {
                let result = window.confirm(`Do you want to Swap out your ${weapon2.name}?`)
                if (result === true) {
                  bagArray.push(weapon2)
                  setWeapon2(item)
                }
              }
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
          bagArray.splice(bagArray.indexOf(item), 1)
        }
      } else if (item.type === 'armor') {
        if (((weapon1 && weapon1.rune === true) && item.special_abilities.equipRunes === false)
          || ((weapon2 && weapon2.rune === true) && item.special_abilities.equipRunes === false)
          || ((other1 && other1.rune === true) && item.special_abilities.equipRunes === false)
          || ((other2 && other2.rune === true) && item.special_abilities.equipRunes === false)
        ) {
          alert(`Your Equipt Runes prevent you from weaing this type of Armor`)
        } else {
          if (armor) {
            bagArray.push(armor)
          }
          setArmor(item)
          if (item.special_abilities.equipRunes === false) {
            setEquipRunes(false)
          } else {
            setEquipRunes(true)
          }
          bagArray.splice(bagArray.indexOf(item), 1)
        }
      } else if (item.type === 'other') {
        if (other1 && other2) {
          let result = window.confirm(`Do you want to Swap out your ${other1.name}?`)
          if (result === true) {
            bagArray.push(other1)
            setOther1(item)
          } else {
            let result = window.confirm(`Do you want to Swap out your ${other2.name}?`)
            if (result === true) {
              bagArray.push(other2)
              setOther2(item)
            }
          }
        }
        else if (!other1 || (!other1 && !other2)) {
          setOther1(item)
        } else if ((other1 && !other2) && other1.hands !== 2) {
          setOther2(item)
        } else if (other1.hands === 2) {
          bagArray.push(other1)
          setOther1(item)
        } else if (other2.hands === 2) {
          bagArray.push(other2)
          setOther1(item)
        }
        bagArray.splice(bagArray.indexOf(item), 1)
      }

    }
    if (bagCheck === true) {
      setBagCheck(false)
    } else {
      setBagCheck(true)
    }
  }



  function addPotionToPotionBag(potion) {
    if (potionsArray.length >= 3) {
      alert('You have no room to add a potion to your potion bag')
    } else {
      potionsArray.push(potion)
      bagArray.splice(bagArray.indexOf(potion), 1)
    }
    if (bagCheck === true) {
      setBagCheck(false)
    } else {
      setBagCheck(true)
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
      bagArray.splice(bagArray.indexOf(item), 1)
    }
    if (bagCheck === true) {
      setBagCheck(false)
    } else {
      setBagCheck(true)
    }
  }

  function closeBag() {
    if (bagArray.length > 3) {
      alert('Your Bag is too Full! You Must Discard Something')
    } else if (bagArray.length <= 3) {
      setShowBag(false)
    }
  }

  useEffect(() => {
    setBag(bagArray)

  }, [bagCheck, sell])

  function treasureCache(item) {
    setMoney(money => money + item.gold)
    if (item.health_potion === true) {
      potionsArray.push(health_potion)
    }
    if (item.vitality_potion === true) {
      potionsArray.push(vitality_potion)
    }
    bagArray.splice(bagArray.indexOf(item), 1)
    let pickRandomItem = Math.floor(Math.random() * (copperTreasureArray.length - 1))
    let randomItem = copperTreasureArray[pickRandomItem]
    bagArray.push(randomItem)
    setRandomTreasure(randomItem)
    copperTreasureArray.splice(copperTreasureArray.indexOf(randomItem), 1);
    setShowTreasureDiv(true)
    if (bagCheck === true) {
      setBagCheck(false)
    } else {
      setBagCheck(true)
    }
  }

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
      <button onClick={closeBag}>Close</button>
      <h1>Item Bag</h1>

      <div style={{ display: 'flex', flexdirection: 'row' }}>
        {bag.map((item, i) =>
          item.type !== 'potion' && item.type !== 'treasure_cache' ?
            <div key={i} id={i} style={{ padding: '10px' }}>
              <input className='card' type='image' src={item.img_path} alt={item.name}
                onClick={() => swap(item)}></input>
              <br />
              {showShop ? <button onClick={() => {
                sell(item);
                bagArray.splice(bagArray.indexOf(item), 1)
              }}>Sell</button> : null}
              {discardButton ? <button onClick={() => { discardItem(item) }}>Discard Item</button> : null}
            </div>
            :
            item.type !== 'treasure_cache' ?
              <div key={i} id={i} style={{ padding: '10px' }}>
                <input height='50px' width='50px' type='image' src={item.img_path} alt={item.name}
                  onClick={() => addPotionToPotionBag(item)}
                ></input>
                <br />
                {showShop ? <button onClick={() => { sell(item); bagArray.splice(bagArray.indexOf(item), 1) }}>Sell</button> : null}
                {discardButton ? <button onClick={() => { discardItem(item) }}>Discard Item</button> : null}
              </div>
              :
              item.type === 'treasure_cache' &&
              <div key={i} id={i} style={{ padding: '10px' }}>
                <input className='card' type='image' src={item.img_path} alt={item.name}
                  onClick={() => treasureCache(item)}></input>
              </div>

        )}
      </div>
      {/* {swapScreen ? <SwapScreen
        setSwapScreen={setSwapScreen}
        weapon1={weapon1}
        setWeapon1={setWeapon1}
        weapon2={weapon2}
        setWeapon2={setWeapon2}
      /> : null} */}
      {discardButton ? <button onClick={discardItemButton}>Keep Items</button> :
        <button onClick={discardItemButton}>Discard an Item</button>}
    </div>
  );
}

export default Bag;
