import '../styles/shop.css'
import { shopItemData } from '../data/items/shopItems';
import { useState, useEffect } from 'react';

export let shopItemsArray = [];
for (let key in shopItemData) {
  console.log('sword pushed into array')
  shopItemsArray.push(shopItemData[key])
}


function Shop({ weapon1, setWeapon1, weapon2, setWeapon2, money, setMoney }) {
  const [availableItems, setAvailableItems] = useState(shopItemsArray);
  // const [soldOut, setSoldOut] = useState(false)

  function buy(item) {
    if (item.type === 'melee' || item.type === 'ranged' || item.type === 'magic' || item.type === 'shield') {
      if (weapon1 && weapon2) {
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
    } else if (item.type === 'anything') {
      alert('not of type created yet')
    }

  }
  // useEffect(() => {
  //   if (availableItems === []) {
  //     setSoldOut(true);
  //   } else {
  //     setSoldOut(false);
  //   }
  // }, [availableItems]);


  return (
    <div id='shop' style={{ left: '30%', top: '30%', }}>
      <h2>Shop</h2>
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