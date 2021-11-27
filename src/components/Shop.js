import '../styles/shop.css';
import { heroData } from '../data/heroData';
import { shopItemData } from '../data/items/shopItems';
import { useState, useEffect } from 'react';

export let shopItemsArray = [];
for (let key in shopItemData) {
  console.log('sword pushed into array')
  shopItemsArray.push(shopItemData[key])
}


function Shop({ chosenHero,
  weapon1,
  setWeapon1,
  weapon2,
  setWeapon2,
  money,
  setMoney,
  showShopItems,
  armor,
  setArmor,
  equipRunes,
  setEquipRunes
}) {
  const [availableItems, setAvailableItems] = useState(shopItemsArray);


  function buy(item) {
    if (item.type === 'melee' || item.type === 'ranged' || item.type === 'magic' || item.type === 'shield') {
      if (item.rune === true && equipRunes === false) {
        alert('Your Armor Prevents you from Equiping this rune')
      } else {
        if ((weapon1 && weapon2) || (weapon1 && item.hands === 2) || (weapon2 && item.hands === 2) || (weapon1 && weapon1.hands === 2) || (weapon2 && weapon2.hands === 2)) {
          alert(`You have no space for this ${item.name} `);
        } else {
          if (money < item.cost) {
            alert(`you dont have enough money for this ${item.name}`);
          } else {
            let newMoney = Math.floor(money - item.cost);
            setMoney(newMoney);
            if (item.number_available > 1) {
              item.number_available -= 1
            } else {
              shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
            }
            setAvailableItems(shopItemsArray);
            if (!weapon1 && !weapon2) {
              setWeapon1(item);
            } else if (weapon1 && !weapon2) {
              setWeapon2(item);
            } else if (!weapon1 && weapon2) {
              setWeapon1(item)
            }
          }
        }
      }
    } else if (item.type === 'armor') {
      if (armor) {
        alert(`you have no space for this ${item.name}`)
      } else {
        if (((weapon1 && weapon1.rune === true) && item.special_abilities.equipRunes === false) || ((weapon2 && weapon2.rune === true) && item.special_abilities.equipRunes === false)) {
          alert('Your Equipt Runes prevent you from weaing this type of armor')
        } else {
          if (item.special_abilities.equipRunes === false) {
            setEquipRunes(false)
          }
          let newMoney = Math.floor(money - item.cost);
          setMoney(newMoney);
          if (item.number_available > 1) {
            item.number_available -= 1
          } else {
            shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
          }
          setAvailableItems(shopItemsArray);
          setArmor(item)
        }
      }
    }
  }
  useEffect(() => {
    dragElement(document.getElementById("shop"));

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
    <div id='shop' style={{ left: '30%', top: '30%', }}>
      <h2>Shop</h2>
      <button onClick={() => showShopItems()}>Close Shop</button>
      <div id='shopItems' >
        {availableItems.map((item, i) =>
          <div key={i}>
            <input type='image' className='card' src={item.img_path} alt={item.name} onClick={() => buy(item)}></input>
            <p>Item: {item.name}</p>
            <p>Price: {item.cost} Gold</p>
            <p>Number Available: {item.number_available}</p>
          </div>
        )}
      </div>
    </div >

  );
}

export default Shop;