import '../styles/shop.css';
import { heroData } from '../data/heroData';
import { shopItemData } from '../data/items/shopItems';
import { copperTreasures } from '../data/items/copperTreasures';
import { silverTreasures } from '../data/items/silverTreasures';
import { goldTreasures } from '../data/items/goldTreasures';
import { useState, useEffect } from 'react';
import { potionsArray } from './Potions';
import { bagArray } from './Bag';
import RandomTreasure from './RandomTreasure';


export let shopItemsArray = [];
for (let key in shopItemData) {
  shopItemsArray.push(shopItemData[key]);
}
export let copperTreasureArray = [];
for (let key in copperTreasures) {
  copperTreasureArray.push(copperTreasures[key]);
}
export let silverTreasureArray = [];
for (let key in silverTreasures) {
  silverTreasureArray.push(silverTreasures[key]);
}
export let goldTreasureArray = [];
for (let key in goldTreasures) {
  goldTreasureArray.push(goldTreasures[key]);
}
//potions
export let health_potion = {
  name: "Health Potion",
  type: "potion",
  restore: 3,
  cost: 50,
  img_path: "./images/items/shop/health_potion.png",
};
export let vitality_potion = {
  name: "Vitality Potion",
  type: "potion",
  restore: "max fatigue",
  cost: 50,
  img_path: "./images/items/shop/vitality_potion.png",
};

function Shop({
  chosenHero,
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
  setEquipRunes,
  other1,
  setOther1,
  other2,
  setOther2,
  meleePowerDie,
  setMeleePowerDie,
  magicPowerDie,
  setMagicPowerDie,
  rangedPowerDie,
  setRangedPowerDie,
  foundCopperTreasure,
  foundSilverTreasure,
  foundGoldTreasure,
  showTreasureDiv,
  setShowTreasureDiv,
  randomTreasure,
  setRandomTreasure,
}) {
  const [availableItems, setAvailableItems] = useState(shopItemsArray);

  function addPotion(type) {
    if (money < health_potion.cost) {
      alert(`you dont have enough money for this Potion`);
    } else {
      if (potionsArray.length >= 3) {
        let result = window.confirm(
          "You have no more room for potions, would you like to add it to your bag?"
        );
        if (result === true) {
          if (bagArray.length >= 3) {
            alert("Your Bag is Full!");
          } else {
            if (type === "health") {
              bagArray.push(health_potion);
            } else if (type === "vitality") {
              bagArray.push(vitality_potion);
            }
            let newMoney = Math.floor(money - health_potion.cost);
            setMoney(newMoney);
          }
        }
      } else {
        if (type === "health") {
          potionsArray.push(health_potion);
        } else if (type === "vitality") {
          potionsArray.push(vitality_potion);
        }
        let newMoney = Math.floor(money - health_potion.cost);
        setMoney(newMoney);
        alert("potion purchased and placed in potions bag");
      }
    }
  }

  function addPowerDice(type) {
    if (money < 500) {
      alert(`you dont have enough money for this Power Dice`);
    } else {
      if (type === "melee") {
        if (meleePowerDie >= 5) {
          alert("You already have the maximum of 5 Power dice for this Trait");
        } else {
          setMeleePowerDie((meleePowerDie) => meleePowerDie + 1);
        }
      } else if (type === "ranged") {
        if (rangedPowerDie >= 5) {
          alert("You already have the maximum of 5 Power dice for this Trait");
        } else {
          setRangedPowerDie((rangedPowerDie) => rangedPowerDie + 1);
        }
      } else if (type === "magic") {
        if (magicPowerDie >= 5) {
          alert("You already have the maximum of 5 Power dice for this Trait");
        } else {
          setMagicPowerDie((magicPowerDie) => magicPowerDie + 1);
        }
      }
      let newMoney = Math.floor(money - 500);
      setMoney(newMoney);
    }
  }

  function getRandomTreasure(type) {
    if (bagArray.length >= 3) {
      alert("You have no room in your bag for a Treasure!");
    } else {
      if (type === "copper") {
        if (money < 250) {
          alert("You do not have enough money to purchawe a Copper treasure");
        } else {
          if (copperTreasureArray.length <= 0) {
            alert("All the Copper Treasures are Gone");
          } else {
            let newMoney = Math.floor(money - 250);
            setMoney(newMoney);
            let pickRandomItem = Math.floor(
              Math.random() * (copperTreasureArray.length - 1)
            );
            let randomItem = copperTreasureArray[pickRandomItem];
            bagArray.push(randomItem);
            setRandomTreasure(randomItem);
            copperTreasureArray.splice(
              copperTreasureArray.indexOf(randomItem),
              1
            );
            setShowTreasureDiv(true);
          }
        }
      }
      if (type === "silver") {
        if (money < 500) {
          alert("You do not have enough money to purchase a Silver treasure");
        } else {
          if (silverTreasureArray.length <= 0) {
            alert("All the Silver Treasures are Gone");
          } else {
            let newMoney = Math.floor(money - 500);
            setMoney(newMoney);
            let pickRandomItem = Math.floor(
              Math.random() * (silverTreasureArray.length - 1)
            );
            console.log(silverTreasureArray[pickRandomItem]);
            let randomItem = silverTreasureArray[pickRandomItem];
            bagArray.push(randomItem);
            setRandomTreasure(randomItem);
            silverTreasureArray.splice(
              silverTreasureArray.indexOf(randomItem),
              1
            );
            setShowTreasureDiv(true);
          }
        }
      }
      if (type === "gold") {
        if (money < 750) {
          alert("You do not have enough money to purchase a Gold treasure");
        } else {
          if (goldTreasureArray.length <= 0) {
            alert("All the Gold Treasures are Gone");
          } else {
            let newMoney = Math.floor(money - 750);
            setMoney(newMoney);
            let pickRandomItem = Math.floor(
              Math.random() * (goldTreasureArray.length - 1)
            );
            console.log(goldTreasureArray[pickRandomItem]);
            let randomItem = goldTreasureArray[pickRandomItem];
            bagArray.push(randomItem);
            setRandomTreasure(randomItem);
            goldTreasureArray.splice(goldTreasureArray.indexOf(randomItem), 1);
            setShowTreasureDiv(true);
          }
        }
      }
    }
  }

  function buy(item) {
    if (money < item.cost) {
      alert(`you dont have enough money for this ${item.name}`);
    } else {
      if (
        item.type === "melee" ||
        item.type === "ranged" ||
        item.type === "magic" ||
        item.type === "shield"
      ) {
        if (item.rune === true && equipRunes === false) {
          let result = window.confirm(
            `Your Armor Prevents you from Equiping this ${item.name}, would you like to add it to your Bag?`
          );
          if (result === true) {
            if (bagArray.length >= 3) {
              alert("Your Bag is Full!");
            } else {
              bagArray.push(item);
              let newMoney = Math.floor(money - item.cost);
              setMoney(newMoney);
              if (item.number_available > 1) {
                item.number_available -= 1;
              } else {
                shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
              }
              setAvailableItems(shopItemsArray);
            }
          }
        } else {
          if (
            (weapon1 && weapon2) ||
            (weapon1 && item.hands === 2) ||
            (weapon2 && item.hands === 2) ||
            (weapon1 && weapon1.hands === 2) ||
            (weapon2 && weapon2.hands === 2)
          ) {
            let result = window.confirm(
              `You have no space for this ${item.name}, would you like to add it to your Bag?`
            );
            if (result === true) {
              if (bagArray.length >= 3) {
                alert("Your Bag is Full!");
              } else {
                bagArray.push(item);
                let newMoney = Math.floor(money - item.cost);
                setMoney(newMoney);
                if (item.number_available > 1) {
                  item.number_available -= 1;
                } else {
                  shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
                }
                setAvailableItems(shopItemsArray);
              }
            }
          } else {
            let newMoney = Math.floor(money - item.cost);
            setMoney(newMoney);
            if (item.number_available > 1) {
              item.number_available -= 1;
            } else {
              shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
            }
            setAvailableItems(shopItemsArray);
            if (!weapon1 && !weapon2) {
              setWeapon1(item);
            } else if (weapon1 && !weapon2) {
              setWeapon2(item);
            } else if (!weapon1 && weapon2) {
              setWeapon1(item);
            }
          }
        }
      } else if (item.type === "armor") {
        if (armor) {
          let result = window.confirm(
            `You have no space for this ${item.name}, would you like to add it to your Bag?`
          );
          if (result === true) {
            if (bagArray.length >= 3) {
              alert("Your Bag is Full!");
            } else {
              bagArray.push(item);
              let newMoney = Math.floor(money - item.cost);
              setMoney(newMoney);
              if (item.number_available > 1) {
                item.number_available -= 1;
              } else {
                shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
              }
              setAvailableItems(shopItemsArray);
            }
          }
        } else {
          if (
            (weapon1 &&
              weapon1.rune === true &&
              item.special_abilities.equipRunes === false) ||
            (weapon2 &&
              weapon2.rune === true &&
              item.special_abilities.equipRunes === false) ||
            (other1 &&
              other1.rune === true &&
              item.special_abilities.equipRunes === false) ||
            (other2 &&
              other2.rune === true &&
              item.special_abilities.equipRunes === false)
          ) {
            let result = window.confirm(
              `Your Equipt Runes prevent you from weaing this type of Armor, would you like to add it to your Bag?`
            );
            if (result === true) {
              if (bagArray.length >= 3) {
                alert("Your Bag is Full!");
              } else {
                bagArray.push(item);
              }
            }
          } else {
            if (item.special_abilities.equipRunes === false) {
              setEquipRunes(false);
            }
            let newMoney = Math.floor(money - item.cost);
            setMoney(newMoney);
            if (item.number_available > 1) {
              item.number_available -= 1;
            } else {
              shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
            }
            setAvailableItems(shopItemsArray);
            setArmor(item);
          }
        }
      } else if (item.type === "other") {
        if (item.rune === true && equipRunes === false) {
          let result = window.confirm(
            `Your Armor Prevents you from Equiping this ${item.name}, would you like to add it to your Bag?`
          );
          if (result === true) {
            if (bagArray.length >= 3) {
              alert("Your Bag is Full!");
            } else {
              bagArray.push(item);
              let newMoney = Math.floor(money - item.cost);
              setMoney(newMoney);
              if (item.number_available > 1) {
                item.number_available -= 1;
              } else {
                shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
              }
              setAvailableItems(shopItemsArray);
            }
          }
        } else if (other1 && other2) {
          let result = window.confirm(
            `You have no space for this ${item.name}, would you like to add it to your Bag?`
          );
          if (result === true) {
            if (bagArray.length >= 3) {
              alert("Your Bag is Full!");
            } else {
              bagArray.push(item);
              let newMoney = Math.floor(money - item.cost);
              setMoney(newMoney);
              if (item.number_available > 1) {
                item.number_available -= 1;
              } else {
                shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
              }
              setAvailableItems(shopItemsArray);
            }
          }
        } else {
          let newMoney = Math.floor(money - item.cost);
          setMoney(newMoney);
          if (item.number_available > 1) {
            item.number_available -= 1;
          } else {
            shopItemsArray.splice(shopItemsArray.indexOf(item), 1);
          }
          setAvailableItems(shopItemsArray);
          if (!other1 && !other2) {
            setOther1(item);
          } else if (other1 && !other2) {
            setOther2(item);
          } else if (!other1 && other2) {
            setOther1(item);
          }
        }
      }
    }
  }

  useEffect(() => {
    dragElement(document.getElementById("shop"));

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown =
          dragMouseDown;
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
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }, []);

  return (
    <div id="shop" style={{ left: "30%", top: "50%" }}>
      <h2>Shop</h2>
      <button onClick={() => showShopItems()}>Close Shop</button>
      <br />
      <br />
      <div id="shopItems">
        {availableItems.map((item, i) => (
          <div key={i} style={{ border: "outset" }}>
            <input
              type="image"
              className="card"
              src={item.img_path}
              alt={item.name}
              onClick={() => buy(item)}
            ></input>
            <p>Item: {item.name}</p>
            <p>Price: {item.cost} Gold</p>
            <p>Number Available: {item.number_available}</p>
          </div>
        ))}
      </div>

      <h3>Potions</h3>

      <div
        id="potionsPurchase"
        className="shopDiv"
        style={{ display: "flex", flexdirection: "row" }}
      >
        <div id="healthPotion" style={{ padding: "10px", border: "outset" }}>
          <input
            type="image"
            height="50"
            width="50"
            src={health_potion.img_path}
            alt={health_potion.name}
            onClick={() => addPotion("health")}
          ></input>
          <p>Item: {health_potion.name}</p>
          <p>Healths 3 Wounds</p>
          <p>Price: {health_potion.cost} Gold</p>
        </div>

        <div id="vitalityPotion" style={{ padding: "10px", border: "outset" }}>
          <input
            type="image"
            height="50"
            width="50"
            src={vitality_potion.img_path}
            alt={vitality_potion.name}
            onClick={() => addPotion("vitality")}
          ></input>
          <p>Item: {vitality_potion.name}</p>
          <p>
            Restores Fatigue <br /> to Maximum
          </p>
          <p>Price: {vitality_potion.cost} Gold</p>
        </div>
      </div>

      <h3>Power Dice</h3>
      <div
        id="powerDice"
        className="shopDiv"
        style={{ display: "flex", flexdirection: "row" }}
      >
        <div
          id="meleePowerDicePurchase"
          style={{ padding: "10px", border: "outset" }}
        >
          <input
            type="image"
            height="50"
            width="50"
            src="./images/melee_black_dice_purchase.jpg"
            alt="Purchase 1 Melee Power Dice"
            onClick={() => addPowerDice("melee")}
          ></input>
          <p>Item: +1 Melee Power Dice</p>
          <p>Price: 500 Gold</p>
        </div>
        <div
          id="rangedPowerDicePurchase"
          style={{ padding: "10px", border: "outset" }}
        >
          <input
            type="image"
            height="50"
            width="50"
            src="./images/ranged_black_dice_purchase.jpg"
            alt="Purchase 1 Ranged Power Dice"
            onClick={() => addPowerDice("ranged")}
          ></input>
          <p>Item: +1 Ranged Power Dice</p>
          <p>Price: 500 Gold</p>
        </div>
        <div
          id="magicPowerDicePurchase"
          style={{ padding: "10px", border: "outset" }}
        >
          <input
            type="image"
            height="50"
            width="50"
            src="./images/magic_black_dice_purchase.jpg"
            alt="Purchase 1 Magic Power Dice"
            onClick={() => addPowerDice("magic")}
          ></input>
          <p>Item: +1 Magic Power Dice</p>
          <p>Price: 500 Gold</p>
        </div>
      </div>

      <h3>Treasures</h3>
      <h4>
        Treasures Become Available For Purchase <br /> once a Treasure Chest of
        that Color is Found in the Dungeon
      </h4>
      <div
        id="treasuresPurchase"
        className="shopDiv"
        style={{ display: "flex", flexdirection: "row" }}
      >
        {foundCopperTreasure ? (
          <div
            id="coppertreasure"
            style={{ border: "outset", padding: "10px" }}
          >
            <input
              type="image"
              className="card"
              src="./images/copper_treasure_back.png"
              alt="Copper Treasure"
              onClick={() => getRandomTreasure("copper")}
            ></input>
            <p>Random Copper Treasure</p>
            <p>Cost: 250 Gold</p>
          </div>
        ) : (
          <div
            id="coppertreasure"
            style={{ border: "outset", padding: "10px" }}
          >
            <img
              src="./images/copper_treasure_back.png"
              alt="Copper Treasure"
            ></img>
            <p>Not Available</p>
          </div>
        )}

        {foundSilverTreasure ? (
          <div
            id="silvertreasure"
            style={{ border: "outset", padding: "10px" }}
          >
            <input
              type="image"
              className="card"
              src="./images/silver_treasure_back.png"
              alt="Silver Treasure"
              onClick={() => getRandomTreasure("silver")}
            ></input>
            <p>Random Silver Treasure</p>
            <p>Cost: 500 Gold</p>
          </div>
        ) : (
          <div
            id="silvertreasure"
            style={{ border: "outset", padding: "10px" }}
          >
            <img
              src="./images/silver_treasure_back.png"
              alt="Silver Treasure"
            ></img>
            <p>Not Available</p>
          </div>
        )}

        {foundGoldTreasure ? (
          <div id="goldtreasure" style={{ border: "outset", padding: "10px" }}>
            <input
              type="image"
              className="card"
              src="./images/gold_treasure_back.png"
              alt="Gold Treasure"
              onClick={() => getRandomTreasure("gold")}
            ></input>
            <p>Random Gold Treasure</p>
            <p>Cost: 750 Gold</p>
          </div>
        ) : (
          <div id="goldtreasure" style={{ border: "outset", padding: "10px" }}>
            <img
              src="./images/gold_treasure_back.png"
              alt="Gold Treasure"
            ></img>
            <p>Not Available</p>
          </div>
        )}
      </div>

      <h3>Skills</h3>
      <div
        id="skillsPurchase"
        className="shopDiv"
        style={{ display: "flex", flexdirection: "row" }}
      >
        <div
          id="meleeSkillPurchase"
          style={{ border: "outset", padding: "10px" }}
        >
          <input
            type="image"
            className="card"
            src="./images/melee_skill_back.png"
            alt="Melee Skill"
            onClick={() => console.log("purchased Melee Skill")}
          ></input>
          <p>Random Melee Skill</p>
          <p>Cost: 1000 Gold</p>
        </div>
        <div
          id="subterfugeSkillPurchase"
          style={{ border: "outset", padding: "10px" }}
        >
          <input
            type="image"
            className="card"
            src="./images/subterfuge_skill_back.png"
            alt="Subterfuge Skill"
            onClick={() => console.log("purchased Subterfuge Skill")}
          ></input>
          <p>Random Subterfuge Skill</p>
          <p>Cost: 1000 Gold</p>
        </div>
        <div
          id="wizardrySkillPurchase"
          style={{ border: "outset", padding: "10px" }}
        >
          <input
            type="image"
            className="card"
            src="./images/wizardry_skill_back.png"
            alt="Wizardry Skill"
            onClick={() => console.log("purchased Wizardry Skill")}
          ></input>
          <p>Random Wizardry Skill</p>
          <p>Cost: 1000 Gold</p>
        </div>
      </div>
      <br />
      <button onClick={() => showShopItems()}>Close Shop</button>
      {/* 
      {showTreasureDiv ?
        <RandomTreasure
          showTreasureDiv={showTreasureDiv}
          setShowTreasureDiv={setShowTreasureDiv}
          randomTreasure={randomTreasure}
          setRandomTreasure={setRandomTreasure}
          potionsArray={potionsArray}
          money={money}
          setMoney={setMoney}
          copperTreasureArray={copperTreasureArray}
          silverTreasureArray={silverTreasureArray}
          goldTreasureArray={goldTreasureArray}
        /> : null} */}
    </div>
  );
}

export default Shop;