import '../styles/player.css';
import Shop, { shopItemsArray } from './Shop';
import DiceRoll from './Dice';
import { useState, useEffect } from 'react';
import { heroData } from '../data/heroData.js';
// import { monsterData } from '../data/monsterData.js';
import { shopItemData } from '../data/items/shopItems';
import { heroToken } from '../player_actions/movement';
import { map1, startingMoney } from '../data/dungeonMaps/map1';
import { attack, checkRange, checkMiss } from '../player_actions/attack';
import { targetClicked, mousePos, correctedPosition, attackTargetClicked } from '../player_actions/mouseClick';


function Player({ chosenHero, chosenQuest }) {
  // useEffect(() => {
  //   document.addEventListener("mousemove", function (e) {
  //     mousePos.x = e.clientX;
  //     mousePos.y = e.clientY;
  //   });
  //   let canvasClick = document.getElementById('canvas');
  //   canvasClick.addEventListener('click', targetClicked);
  // }, []);
  //player stats
  const [currentHealth, setCurrentHealth] = useState(heroData[chosenHero].max_wounds);
  const [maxHealth, setMaxHealth] = useState(heroData[chosenHero].max_wounds);
  const [currentFatigue, setCurrentFatigue] = useState(heroData[chosenHero].max_fatigue);
  const [maxFatigue, setMaxFatigue] = useState(heroData[chosenHero].max_fatigue);
  const [currentConquestTokens, setCurrentConquestTokens] = useState(heroData[chosenHero].max_fatigue);
  const [maxConquestTokens, setMaxConquestTokens] = useState(heroData[chosenHero].max_fatigue);
  const [baseArmor, setBaseArmor] = useState(heroData[chosenHero].base_armor);
  const [maxSpeed, setMaxSpeed] = useState(heroData[chosenHero].speed);
  const [speed, setSpeed] = useState(heroData[chosenHero].speed)
  const [money, setMoney] = useState(map1.startingMoney.amount);
  const [meleePowerDie, setMeleePowerDie] = useState(heroData[chosenHero].traits.melee_trait);
  const [rangedPowerDie, setrangedPowerDie] = useState(heroData[chosenHero].traits.ranged_trait);
  const [magicPowerDie, setMagicPowerDie] = useState(heroData[chosenHero].traits.magic_trait);


  //attack
  const [herosDice, setHerosDice] = useState(heroData[chosenHero].dice)
  const [numberOfAttacks, setNumberOfAttacks] = useState(0);
  const [attackActive, setAttackActive] = useState(false);
  const [pickTargetText, setPickTargetText] = useState(false)


  function attackOn() {
    if (attackActive === false) {
      setAttackActive(true)
    } else {
      setAttackActive(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });
    let canvasClick = document.getElementById('canvas');
    if (attackActive === false) {
      canvasClick.removeEventListener('click', attackTargetClicked)
      canvasClick.addEventListener('click', targetClicked);
    } else if (attackActive === true) {
      canvasClick.removeEventListener('click', targetClicked)
      canvasClick.addEventListener('click', attackTargetClicked);
    }

  }, [attackActive]);


  //weapons and items
  const [weapon1, setWeapon1] = useState(shopItemData.sword);
  const [weapon2, setWeapon2] = useState();
  const [armor, setArmor] = useState({});

  //shop
  const [showShop, setShowShop] = useState(false);
  function showShopItems() {
    if (showShop === false) {
      setShowShop(true);
    } else {
      setShowShop(false);
    }
  }

  function sell(item) {
    if (!item) {
      alert('you have no item to sell')
    } else {
      let sellAmount = Math.floor(item.cost / 2);
      let newMoney = money + sellAmount;
      setMoney(newMoney);
      if (shopItemsArray.includes(item) === false) {
        shopItemsArray.push(item)
      } else {
        item.number_available += 1
      }
      if (item.combat_dice) {
        for (let color in item.combat_dice) {
          heroData[chosenHero].dice[color] -= item.combat_dice[color]
        }
        setHerosDice(heroData[chosenHero].dice)
      }
    }
  }

  //attacking
  const [showDice, setShowDice] = useState(false);
  function showDiceRoll() {
    if (showDice === false) {
      setShowDice(true);
    } else {
      setShowDice(false);
    }
  }

  // const [checkMeleeAttack, setCheckMeleeAttack] = useState(true);
  // function clicked() {
  //   if (checkMeleeAttack === false) {
  //     setCheckMeleeAttack(true)
  //   } else {
  //     setCheckMeleeAttack(false)
  //   }
  // }
  // useEffect(() => {
  //   // console.log('i ran')

  // }, [checkMeleeAttack]);




  return (
    <div>
      <div id='playerContainer'>
        <div id='heroCardDiv'>
          <img className='heroCard' src={heroData[chosenHero].hero_card_img_path} alt={heroData.steelhorns.name} />
          <p>Name: {heroData[chosenHero].name}</p>
          <p>Gold: {money} </p>
          <p>conquest tokens:{currentConquestTokens}/{maxConquestTokens}</p>


          <button height='100px' width='100px' onClick={showShopItems}>shop</button>
          <button height='100px' width='100px' onClick={attackOn}>{attackActive ? 'Stop Attack' : 'Attack'}</button>
          {attackActive ? <p>Select a target to attack, then select the weapon you wish to use</p> : null}


        </div>
        <div id='statBlock'>
          <div id='stats'>
            <h3>Stats</h3>
            <p>Health: {currentHealth} / {maxHealth}</p>
            <p>Fatigue: {currentFatigue} / {maxFatigue}</p>
            <p>Armor: {baseArmor}</p>
            <p>Speed: {speed}/{maxSpeed} </p>
          </div>
          <div id='traits'>
            <h3>Traits</h3>
            <p>Number of attacks left: {numberOfAttacks}</p>
            <p>Melee Power Die: {meleePowerDie}</p>
            <p>Ranged Power Die: {rangedPowerDie}</p>
            <p>Magic Power Die: {magicPowerDie} </p>
          </div>
          <div id='heroAbility'>
            <h3>Hero Ability:</h3>
            <p>{heroData[chosenHero].hero_ability}</p>
          </div>
        </div>

        <div id='weapons'>

          {/* weapon 1 */}
          <div>
            {attackActive ?
              <div>
                <p>Weapon 1:</p>
                {weapon1 ? <input type='image' id='weapon1' className='card' src={weapon1.img_path} alt='Weapon 1'
                  onClick={() => attack(weapon1, weapon2, meleePowerDie, rangedPowerDie, magicPowerDie, heroToken, correctedPosition)}></input> : null}
              </div>
              :
              <div>
                <p>Weapon 1:</p>
                {weapon1 ? <img id='weapon1' className='card' src={weapon1.img_path} alt='Weapon 1' /> : null}
              </div>}
            <div>
              {showShop ? <button onClick={() => { sell(weapon1); setWeapon1(); }}>Sell</button> : null}
            </div>
          </div>

          {/* weapon 2 */}
          <div>

            {attackActive ?
              <div>
                <p>Weapon 2:</p>
                {weapon2 ? <input type='image' id='weapon2' className='card' src={weapon2.img_path} alt='Weapon 2'
                  onClick={() => attack(weapon2, weapon1, meleePowerDie, rangedPowerDie, magicPowerDie, heroToken, correctedPosition)}></input> : null}
              </div>
              :
              <div>
                <p>Weapon 2:</p>
                {weapon2 ? <img id='weapon2' className='card' src={weapon2.img_path} alt='Weapon 2' /> : null}
              </div>}

            <div>
              {showShop ? <button onClick={() => { sell(weapon2); setWeapon2(); }}>Sell</button> : null}
            </div>
          </div>

          {/* armor */}
          <div>
            <p>Armor:</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
            <div>
              {showShop ? <button onClick={() => sell(armor)}>Sell</button> : null}
            </div>
          </div>
        </div>
        <div id='other'>
          <div>
            <p>Other 1:</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
            <div>
              {showShop ? <button onClick={sell}>Sell</button> : null}
            </div>
          </div>
          <div>
            <p>Other 2:</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
            <div>
              {showShop ? <button onClick={sell}>Sell</button> : null}
            </div>
          </div>
        </div>

        <div id='bag'>
          <div>
            <p>Potions:</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
            <div>
              {showShop ? <button onClick={sell}>Sell</button> : null}
            </div>
          </div>
          <div>
            <p>Bag:</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
          </div>
        </div>


        <div id='skills'>
          <div>
            <p>Skills 1</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
          </div>
          <div>
            <p>Skills 2</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
          </div>
          <div>
            <p>Skills 3</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
          </div>
        </div>
      </div>
      {showShop ? <Shop
        chosenHero={chosenHero}
        weapon1={weapon1}
        setWeapon1={setWeapon1}
        weapon2={weapon2}
        setWeapon2={setWeapon2}
        money={money}
        setMoney={setMoney}
        showShopItems={showShopItems}
        herosdice={herosDice}
        setHerosDice={setHerosDice}
      /> : null}
      {showDice ? <DiceRoll
        chosenHero={chosenHero}
        showDiceRoll={showDiceRoll}
        herosdice={herosDice}
        setHerosDice={setHerosDice}
        showDice={showDice}
      /> : null}
    </div >

  );
}

export default Player;

// "homepage": "http://Kmac1027.github.io/descent-Journeys-in-the-Dark",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"

// onClick={() => attack(weapon2, meleePowerDie, rangedPowerDie, magicPowerDie, heroToken, map1.tokenPlacement.monsters.skeletonToken, correctedPosition)