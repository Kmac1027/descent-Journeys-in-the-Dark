import '../styles/shop.css'
import { shopItems } from '../data/items/shopItems';



function Shop() {

  let shopItemsArray = [];
  for (let key in shopItems) {
    console.log('sword pushed into array')
    shopItemsArray.push(shopItems[key])
  }
  console.log(shopItemsArray[0])
  return (
    <div id='shop' style={{ left: '30%', top: '30%', }}>
      <h2>Shop</h2>
      <div id='shopItems' >
        {shopItemsArray.map((item) =>
          <div>
            <img className='card' src={item.img_path} alt={item.name} />
            <p>Item: {item.name}</p>
            <p>Price: {item.cost} Gold</p>
          </div>
        )}
      </div>
    </div >

  );
}

export default Shop;