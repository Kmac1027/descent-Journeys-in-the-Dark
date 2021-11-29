import '../styles/player.css';
import Shop, { shopItemsArray } from './Shop';
import { copperTreasures } from '../data/items/copperTreasures';
import DiceRoll from './Dice';
import Potions, { potionsArray } from './Potions';
import Bag, { bagArray } from './Bag'
import { useState, useEffect } from 'react';
import { heroData } from '../data/heroData.js';
// import { monsterData } from '../data/monsterData.js';
import { shopItemData } from '../data/items/shopItems';
import { heroToken, disableMovment } from '../player_actions/movement';
import { map1 } from '../data/dungeonMaps/map1';
import { attack, attackType, } from '../player_actions/attack';
import { targetClicked, mousePos, correctedPosition, attackTargetClicked, selectedTarget } from '../player_actions/mouseClick';


function Player({ chosenHero, chosenQuest }) {

  const [currentHealth, setCurrentHealth] = useState(heroData[chosenHero].max_wounds);
  const [maxHealth, setMaxHealth] = useState(heroData[chosenHero].max_wounds);
  const [currentFatigue, setCurrentFatigue] = useState(heroData[chosenHero].max_fatigue);
  const [maxFatigue, setMaxFatigue] = useState(heroData[chosenHero].max_fatigue);
  const [currentConquestTokens, setCurrentConquestTokens] = useState(heroData[chosenHero].max_fatigue);
  const [maxConquestTokens, setMaxConquestTokens] = useState(heroData[chosenHero].max_fatigue);
  const [currentArmor, setCurrentArmor] = useState(heroData[chosenHero].base_armor);
  const [baseSpeed, setBaseSpeed] = useState(heroData[chosenHero].speed);
  const [speed, setSpeed] = useState(heroData[chosenHero].speed)

  // const [money, setMoney] = useState(map1.startingMoney.amount);
  const [money, setMoney] = useState(10000);

  const [equipRunes, setEquipRunes] = useState(true)
  const [showPotions, setShowPotions] = useState(false)
  const [showBag, setShowBag] = useState(false)

  const [foundCopperTreasure, setFoundCopperTreasure] = useState(true)
  const [foundSilverTreasure, setFoundSilverTreasure] = useState(true)
  const [foundGoldTreasure, setFoundGoldTreasure] = useState(true)

  const [meleePowerDie, setMeleePowerDie] = useState(heroData[chosenHero].traits.melee_trait);
  const [rangedPowerDie, setRangedPowerDie] = useState(heroData[chosenHero].traits.ranged_trait);
  const [magicPowerDie, setMagicPowerDie] = useState(heroData[chosenHero].traits.magic_trait);

  //attack
  const [numberOfAttacks, setNumberOfAttacks] = useState(0);
  const [attackActive, setAttackActive] = useState(false);
  const [weaponCardsActive, setWeaponCardsActive] = useState(false);


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
    if (weapon.surge !== false) {
      for (let key in weapon.surge) {
        if (weapon.surge[key].type === 'addBlast') {
          attackType.blast = true
          break;
        }
      }
    }
    if (weapon.special_abilities !== false) {
      for (let key in weapon.special_abilities) {
        if (weapon.special_abilities[key].type === 'addBlast') {
          attackType.blast = true
          break;
        }
      }
    }
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
  // const [weapon1, setWeapon1] = useState(shopItemData.sword);
  // const [weapon2, setWeapon2] = useState(shopItemData.crossbow);
  const [weapon1, setWeapon1] = useState(copperTreasures.bane);
  const [weapon2, setWeapon2] = useState();
  const [armor, setArmor] = useState(shopItemData.leather_armor);
  const [other1, setOther1] = useState()
  const [other2, setOther2] = useState()

  useEffect(() => {
    if (armor) {
      if (armor.special_abilities !== false) {
        if (heroData[chosenHero].speed > armor.special_abilities.speedReduce) {
          setBaseSpeed(armor.special_abilities.speedReduce)

          if (armor.special_abilities.equipRunes === false) {
            setEquipRunes(false)
          }
        }
      }
      setCurrentArmor(heroData[chosenHero].base_armor + armor.armor)
      if (speed > baseSpeed) {
        setSpeed(baseSpeed)
      }
    } else {
      setCurrentArmor(heroData[chosenHero].base_armor)
      setBaseSpeed(heroData[chosenHero].speed)
    }

  }, [armor, baseSpeed, speed, other1, other2])

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
        // console.log(item.special_abilities.equipRunes)
        if (item.special_abilities.equipRunes === false) {
          setEquipRunes(true)
        }
      }
      let sellAmount = Math.floor(item.cost / 2);
      let newMoney = money + sellAmount;
      setMoney(newMoney);
      if (shopItemsArray.includes(item) === false && item.type !== 'potion' &&
        item.treasure === 'shop'
      ) {
        shopItemsArray.push(item)
      } else {
        item.number_available += 1
      }
    }
  }

  function turnOnPotionScreen() {
    if (showPotions === false) {
      setShowPotions(true)
    } else {
      setShowPotions(false)
    }
  }

  function turnOnBagScreen() {
    if (showBag === false) {
      setShowBag(true)
    } else {
      if (bagArray.length > 3) {
        alert('Your Bag is too Full! You Must Discard Something')
      } else if (bagArray.length <= 3) {
        setShowBag(false)
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
            <p>Speed: {speed}/{baseSpeed} </p>
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
                <p style={{ padding: '5px' }}>Weapon 1</p>
                {weapon1 ? <input type='image' id='weapon1' className='card' src={weapon1.img_path} alt='Weapon 1'
                  onClick={() => attacking(weapon1, weapon2)}></input> : null}
              </div>
              :
              <div>
                <p style={{ padding: '5px' }}>Weapon 1</p>
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
                <p style={{ padding: '5px' }}>Weapon 2</p>
                {weapon2 ? <input type='image' id='weapon2' className='card' src={weapon2.img_path} alt='Weapon 2'
                  onClick={() => attacking(weapon2, weapon1)}></input> : null}
              </div>
              :
              <div>
                <p style={{ padding: '5px' }}>Weapon 2</p>
                {weapon2 ? <img id='weapon2' className='card' src={weapon2.img_path} alt='Weapon 2' /> : null}
              </div>}

            <div>
              {showShop ? <button onClick={() => { sell(weapon2); setWeapon2(); }}>Sell</button> : null}
            </div>
          </div>

          {/* armor */}
          <div>
            <p style={{ padding: '5px' }}>Armor</p>
            {armor ? <img className='card' src={armor.img_path} alt={armor.name}></img> : null}
            <div>
              {showShop ? <button onClick={() => { sell(armor); setArmor(); }}>Sell</button> : null}
            </div>
          </div>
        </div>
        <div id='other'>
          <div>
            <p style={{ padding: '5px' }}>Other 1</p>
            {other1 ? <input type='image' className='card' src={other1.img_path} alt={other1.name}
              onClick={() => console.log(other1)}></input> : null}
            <div>
              {showShop ? <button onClick={() => { sell(other1); setOther1() }}>Sell</button> : null}
            </div>
          </div>
          <div>
            <p style={{ padding: '5px' }}>Other 2</p>
            {other2 ? <input type='image' className='card' src={other2.img_path} alt={other2.name}
              onClick={() => console.log(other2)}></input> : null}

            <div>
              {showShop ? <button onClick={() => { sell(other2); setOther2() }}>Sell</button> : null}
            </div>
          </div>
        </div>

        <div id='bag'>
          <div>
            <p style={{ padding: '5px' }}>Potions:</p>
            <input type='image' className='card' src={'images/health_potion_card.png'} alt='Potions' onClick={turnOnPotionScreen}></input>
          </div>
          <div>
            <p style={{ padding: '5px' }}>Bag:</p>
            <input type='image' className='card' src={'images/bag_card.png'} alt='Item Bag'
              onClick={turnOnBagScreen}
            ></input>
          </div>
        </div>


        <div id='skills'>
          <div>
            <p style={{ padding: '5px' }}>Skills 1</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
          </div>
          <div>
            <p style={{ padding: '5px' }}>Skills 2</p>
            <img className='card' src={'images/items/shop/leather_armor.png'} alt='g'></img>
          </div>
          <div>
            <p style={{ padding: '5px' }}>Skills 3</p>
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
        equipRunes={equipRunes}
        setEquipRunes={setEquipRunes}
        other1={other1}
        setOther1={setOther1}
        other2={other2}
        setOther2={setOther2}
        magicPowerDie={magicPowerDie}
        setMagicPowerDie={setMagicPowerDie}
        meleePowerDie={meleePowerDie}
        setMeleePowerDie={setMeleePowerDie}
        rangedPowerDie={rangedPowerDie}
        setRangedPowerDie={setRangedPowerDie}
        foundCopperTreasure={foundCopperTreasure}
        foundSilverTreasure={foundSilverTreasure}
        foundGoldTreasure={foundGoldTreasure}
      /> : null}

      {showDice ? <DiceRoll
        chosenHero={chosenHero}
        showDiceRoll={showDiceRoll}
        selectedTarget={selectedTarget}
        map1={map1}
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
        other1={other1}
        other2={other2}
        attackType={attackType}
      /> : null}

      {showPotions ? <Potions
        showPotions={showPotions}
        setShowPotions={setShowPotions}
        maxHealth={maxHealth}
        currentHealth={currentHealth}
        setCurrentHealth={setCurrentHealth}
        maxFatigue={maxFatigue}
        currentFatigue={currentFatigue}
        setCurrentFatigue={setCurrentFatigue}
        showShop={showShop}
        sell={sell}
      /> : null}

      {showBag ? <Bag
        showBag={showBag}
        setShowBag={setShowBag}
        showShop={showShop}
        sell={sell}
        equipRunes={equipRunes}
        weapon1={weapon1}
        setWeapon1={setWeapon1}
        weapon2={weapon2}
        setWeapon2={setWeapon2}
        armor={armor}
        setArmor={setArmor}
        other1={other1}
        setOther1={setOther1}
        other2={other2}
        setOther2={setOther2}
      /> : null}
    </div >

  );
}

export default Player;








// "homepage": "http://Kmac1027.github.io/descent-Journeys-in-the-Dark",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"