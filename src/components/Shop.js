import '../styles/shop.css';
import { heroData } from '../data/heroData';
import { shopItemData } from '../data/items/shopItems';
import { useState } from 'react';

export let shopItemsArray = [];
for (let key in shopItemData) {
  console.log('sword pushed into array')
  shopItemsArray.push(shopItemData[key])
}


function Shop({ chosenHero, weapon1, setWeapon1, weapon2, setWeapon2, money, setMoney, showShopItems }) {
  const [availableItems, setAvailableItems] = useState(shopItemsArray);


  function buy(item) {
    if (item.type === 'melee' || item.type === 'ranged' || item.type === 'magic' || item.type === 'shield') {
      if ((weapon1 && weapon2) || (weapon1 && item.hands === 2) || (weapon2 && item.hands === 2)) {
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
          if (item.combat_dice) {
            for (let color in item.combat_dice) {
              heroData[chosenHero].dice[color] += item.combat_dice[color]
            }
            // setHerosDice(heroData[chosenHero].dice)
          }
        }
      }
    } else if (item.type === 'anything') {
      alert('not of type created yet')
    }

  }


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