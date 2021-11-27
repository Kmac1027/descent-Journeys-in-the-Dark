import '../styles/player.css';
import Shop, { shopItemsArray } from './Shop';
import DiceRoll from './Dice';
import { useState, useEffect } from 'react';
import { heroData } from '../data/heroData.js';
// import { monsterData } from '../data/monsterData.js';
import { shopItemData } from '../data/items/shopItems';
import { heroToken, disableMovment } from '../player_actions/movement';
import { map1 } from '../data/dungeonMaps/map1';
import { attack, attackType, } from '../player_actions/attack';
import { targetClicked, mousePos, correctedPosition, attackTargetClicked, selectedTarget } from '../player_actions/mouseClick';


function Player({ chosenHero, chosenQuest }) {


  // const [addToAttackPannel, setAddToAttackPannel] = useState(false)
  const [currentHealth, setCurrentHealth] = useState(heroData[chosenHero].max_wounds);
  const [maxHealth, setMaxHealth] = useState(heroData[chosenHero].max_wounds);
  const [currentFatigue, setCurrentFatigue] = useState(heroData[chosenHero].max_fatigue);
  const [maxFatigue, setMaxFatigue] = useState(heroData[chosenHero].max_fatigue);
  const [currentConquestTokens, setCurrentConquestTokens] = useState(heroData[chosenHero].max_fatigue);
  const [maxConquestTokens, setMaxConquestTokens] = useState(heroData[chosenHero].max_fatigue);
  const [currentArmor, setCurrentArmor] = useState(heroData[chosenHero].base_armor);
  const [maxSpeed, setMaxSpeed] = useState(heroData[chosenHero].speed);
  const [speed, setSpeed] = useState(heroData[chosenHero].speed)
  const [money, setMoney] = useState(map1.startingMoney.amount);
  const [equpRunes, setEquipRunes] = useState(true)
  const [meleePowerDie, setMeleePowerDie] = useState(heroData[chosenHero].traits.melee_trait);
  const [rangedPowerDie, setrangedPowerDie] = useState(heroData[chosenHero].traits.ranged_trait);
  const [magicPowerDie, setMagicPowerDie] = useState(heroData[chosenHero].traits.magic_trait);


  //attack

  const [numberOfAttacks, setNumberOfAttacks] = useState(0);
  const [attackActive, setAttackActive] = useState(false);
  const [weaponCardsActive, setWeaponCardsActive] = useState(false);
  // const [dicePool, setDicePool] = useState();



  function attackCardsActive() {
    if (weaponCardsActive === false) {
      setWeaponCardsActive(true)
    } else {
      setWeaponCardsActive(false)
      if (showDice === true) {
        showDiceRoll()
        attackOn()
        map1.tokenPlacement.marker.x = -100
        map1.tokenPlacement.marker.y = -100
        selectedTarget.id = null
      }

    }
  }
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

  //attacking
  const [selectedWeapon, setSelectedWeapon] = useState({});
  const [offHand, setOffHand] = useState({})

  function attacking(weapon, offHandWeapon) {
    attackType.type = weapon.type;
    attackOn();
    setSelectedWeapon(weapon)
    setOffHand(offHandWeapon)
    showDiceRoll();
  }

  const [showDice, setShowDice] = useState(false);
  function showDiceRoll() {
    if (showDice === false) {
      setShowDice(true);
    } else {
      setShowDice(false);
    }
  }


  //weapons and items
  const [weapon1, setWeapon1] = useState(shopItemData.sword);
  const [weapon2, setWeapon2] = useState(shopItemData.crossbow);
  const [armor, setArmor] = useState(shopItemData.leather_armor);

  useEffect(() => {
    if (armor) {
      if (armor.specialAbilities !== false) {
        console.log(armor.specialAbilities)
      }
      setCurrentArmor(heroData[chosenHero].base_armor + armor.armor)

    } else {
      setCurrentArmor(heroData[chosenHero].base_armor)
    }

  }, [armor])

  //shop and town
  const [showReturnToTown, setShowReturnToTown] = useState(false)
  const [showShop, setShowShop] = useState(false);

  useEffect(() => {
    if (heroToken.x === map1.tokenPlacement.start_area.x && heroToken.y === map1.tokenPlacement.start_area.y) {
      setShowReturnToTown(true)
    } else {
      setShowReturnToTown(false)
    }
  }, [])

  function returnToTown() {
    if (heroToken.x === map1.town.x + 50 && heroToken.y === map1.town.y + 50) {
      heroToken.x = map1.tokenPlacement.start_area.x
      heroToken.y = map1.tokenPlacement.start_area.y
      setShowReturnToTown(true)
      disableMovment.up = false;
      disableMovment.left = false;
      disableMovment.right = false;
      disableMovment.down = false;
      disableMovment.downRight = false
      disableMovment.upLeft = false;
      disableMovment.upRight = false;
      disableMovment.downLeft = false;
    } else if (heroToken.x === map1.tokenPlacement.start_area.x && heroToken.y === map1.tokenPlacement.start_area.y) {
      heroToken.x = map1.town.x + 50;
      heroToken.y = map1.town.y + 50;
      setShowReturnToTown(false)
    } else {
      alert('you are not at a glyph of teleportation')
    }

  }

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
      if (item.type === 'armor') {
        console.log(item.special_abilities.equipRunes)
        if (item.special_abilities.equipRunes === false) {
          setEquipRunes(true)
        }
      }
      let sellAmount = Math.floor(item.cost / 2);
      let newMoney = money + sellAmount;
      setMoney(newMoney);
      if (shopItemsArray.includes(item) === false) {
        shopItemsArray.push(item)
      } else {
        item.number_available += 1
      }
    }
  }





  return (
    <div>
      <div id='playerContainer'>
        <div id='heroCardDiv'>
          <img className='heroCard' src={heroData[chosenHero].hero_card_img_path} alt={heroData.steelhorns.name} />
          <p>Name: {heroData[chosenHero].name}</p>
          <p>Gold: {money} </p>
          <p>conquest tokens:{currentConquestTokens}/{maxConquestTokens}</p>

          <div>
            {showReturnToTown ?
              <div>
                {showReturnToTown ? <button height='100px' width='100px' onClick={attackCardsActive}>{weaponCardsActive ? 'Stop Attack' : 'Attack'}</button> : null}

                {weaponCardsActive ? <p>Select the Weapon you want to use, then your target</p> : null}
              </div>
              :
              <div>
                <button height='100px' width='100px' onClick={showShopItems}>shop</button>
              </div>}

            <button height='100px' width='100px' onClick={returnToTown}>{showReturnToTown ? 'Go to Town' : 'Go to Dungeon'}</button>
          </div>

        </div>
        <div id='statBlock'>
          <div id='stats'>
            <h3>Stats</h3>
            <p>Health: {currentHealth} / {maxHealth}</p>
            <p>Fatigue: {currentFatigue} / {maxFatigue}</p>
            <p>Armor: {currentArmor}</p>
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
            {weaponCardsActive ?
              <div>
                <p>Weapon 1:</p>
                {weapon1 ? <input type='image' id='weapon1' className='card' src={weapon1.img_path} alt='Weapon 1'
                  onClick={() => attacking(weapon1, weapon2)}></input> : null}
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

            {weaponCardsActive ?
              <div>
                <p>Weapon 2:</p>
                {weapon2 ? <input type='image' id='weapon2' className='card' src={weapon2.img_path} alt='Weapon 2'
                  onClick={() => attacking(weapon2, weapon1)}></input> : null}
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
            {armor ? <img className='card' src={armor.img_path} alt={armor.name}></img> : null}
            <div>
              {showShop ? <button onClick={() => { sell(armor); setArmor(); }}>Sell</button> : null}
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
        armor={armor}
        setArmor={setArmor}
        equipRunes={equpRunes}
        setEquipRunes={setEquipRunes}
      /> : null}

      {showDice ? <DiceRoll
        chosenHero={chosenHero}
        showDiceRoll={showDiceRoll}
        selectedTarget={selectedTarget}
        map1={map1}
        // addToAttackPannel={addToAttackPannel}
        // setAddToAttackPannel={setAddToAttackPannel}
        weaponCardsActive={weaponCardsActive}

        attack={attack}
        attackOn={attackOn}
        attackCardsActive={attackCardsActive}
        attackActive={attackActive}
        selectedWeapon={selectedWeapon}
        offHand={offHand}
        meleePowerDie={meleePowerDie}
        rangedPowerDie={rangedPowerDie}
        magicPowerDie={magicPowerDie}
        heroToken={heroToken}
        correctedPosition={correctedPosition}
      /> : null}

    </div >

  );
}

export default Player;








// "homepage": "http://Kmac1027.github.io/descent-Journeys-in-the-Dark",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"