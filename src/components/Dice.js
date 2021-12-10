import '../styles/attackPannel.css'
import Dice from 'react-dice-roll';
import { useState, useEffect } from 'react'
import { heroData } from '../data/heroData'
import { } from '../data/monsterData'
import { diceSideData } from '../data/diceSideData.js';
import SurgePurchase from './SurgePurchase'

let redDiceArray = [];
let blueDiceArray = [];
let whiteDiceArray = [];
let yellowDiceArray = [];
let greenDiceArray = [];
let meleePowerDiceArray = [];
let rangedPowerDiceArray = [];
let magicPowerDiceArray = [];



function DiceRoll({
  chosenHero,
  chosenQuest,
  showDiceRoll,
  herosDice,
  setHerosDice,
  selectedTarget,
  map1,
  weaponCardsActive,

  attack,
  attackOn,
  attackCardsActive,
  attackActive,
  selectedWeapon,
  offHand,
  meleePowerDie,
  rangedPowerDie,
  magicPowerDie,
  heroToken,
  correctedPosition,
  other1,
  other2,
  attackType,
  threatTokens,
  setThreatTokens
}) {
  const [checkSelectedTarget, setCheckSelectedTarget] = useState(selectedTarget)
  const [turnDiceOff, setTurnDiceOff] = useState(true);
  const [turnMainDiceOff, setTurnMainDiceOff] = useState(true);
  const [addToAttackPannel, setAddToAttackPannel] = useState(false)
  const [enhance, setEnhance] = useState(0)
  const [enhanceChoice, setEnhanceChoice] = useState(false)
  const [purchaseSurgeAbilities, setPurchaseSurgeAbilities] = useState(false)
  const [pierce, setPierce] = useState(0)
  const [blast, setBlast] = useState(0)
  const [powerDieRolled, setPowerDieRolled] = useState(0)

  const [redDice, setRedDice] = useState(redDiceArray);
  const [blueDice, setBlueDice] = useState(blueDiceArray);
  const [whiteDice, setWhiteDice] = useState(whiteDiceArray);
  const [greenDice, setGreenDice] = useState(greenDiceArray);
  const [yellowDice, setYellowDice] = useState(yellowDiceArray);
  const [meleePowerDice, setMeleePowerDice] = useState(meleePowerDiceArray);
  const [rangedPowerDice, setRangedPowerDice] = useState(rangedPowerDiceArray);
  const [magicPowerDice, setMagicPowerDice] = useState(magicPowerDiceArray);


  const [damage, setDamage] = useState(0)
  const [range, setRange] = useState(0)
  const [surge, setSurge] = useState(0)
  const [rangeNeeded, setRangeNeeded] = useState(0)

  useEffect(() => {
    let interval = window.setInterval(() => {
      setCheckSelectedTarget(selectedTarget)
      if (checkSelectedTarget.id) {
        setTurnMainDiceOff(false)
        if (!addToAttackPannel) {
          addToAttackPannelFunction()
          clearInterval(interval)
        }
      }
    }, 1000);
  }, [])

  useEffect(() => {
    redDiceArray = [];
    blueDiceArray = [];
    whiteDiceArray = [];
    greenDiceArray = [];
    yellowDiceArray = [];
    meleePowerDiceArray = [];
    rangedPowerDiceArray = [];
    magicPowerDiceArray = [];

    for (let i = 0; i < selectedWeapon.combat_dice.red; i++) {
      redDiceArray.push(1)
    }
    setRedDice(redDiceArray);
    for (let i = 0; i < selectedWeapon.combat_dice.blue; i++) {
      blueDiceArray.push(1)
    }
    setBlueDice(blueDiceArray);
    for (let i = 0; i < selectedWeapon.combat_dice.white; i++) {
      whiteDiceArray.push(1)
    }
    setWhiteDice(whiteDiceArray);
    for (let i = 0; i < selectedWeapon.combat_dice.green; i++) {
      greenDiceArray.push(1)
    }
    setGreenDice(greenDiceArray);
    for (let i = 0; i < selectedWeapon.combat_dice.yellow; i++) {
      yellowDiceArray.push(1)
    }
    setYellowDice(yellowDiceArray);

    if (selectedWeapon.type === 'melee') {
      for (let i = 0; i < meleePowerDie; i++) {
        meleePowerDiceArray.push(1)
      }
      setMeleePowerDice(meleePowerDiceArray)
    } else if (selectedWeapon.type === 'ranged') {
      for (let i = 0; i < rangedPowerDie; i++) {
        rangedPowerDiceArray.push(1)
      }
      setRangedPowerDice(rangedPowerDiceArray)
    } else if (selectedWeapon.type === 'magic') {
      for (let i = 0; i < magicPowerDie; i++) {
        magicPowerDiceArray.push(1)
      }
      setMagicPowerDice(magicPowerDiceArray)
    }
  }, [attackActive])

  function addToAttackPannelFunction() {
    if (attackType.blast === true) {
      let enemyPicDiv = document.getElementById('enemyPic');
      let blastAttack = document.createElement('p')
      blastAttack.textContent = 'BLAST ATTACK'
      enemyPicDiv.appendChild(blastAttack)
      let weaponPicDiv = document.getElementById('weaponCard');
      let weaponImg = document.createElement('img');
      weaponImg.src = selectedWeapon.img_path
      weaponImg.className = 'card';
      weaponPicDiv.appendChild(weaponImg);
      let x = Math.abs(heroToken.x - selectedTarget.id.x) / 50
      let y = Math.abs(heroToken.y - selectedTarget.id.y) / 50
      console.log(x, y)
      if (x >= y) {
        setRangeNeeded(x)
      } else {
        setRangeNeeded(y)
      }
    } else {
      // let stringify = [checkSelectedTarget.name][0][0].toUpperCase() + [checkSelectedTarget.name][0].slice(1);

      let selectedMonster = chosenQuest.tokenPlacement.monsters[selectedTarget.name + selectedTarget.id.toString()];

      let enemyPicDiv = document.getElementById('enemyPic');
      let enemyImg = document.createElement('img');
      enemyImg.src = selectedMonster.token_path
      enemyImg.height = 75;
      enemyImg.width = 75;
      enemyPicDiv.appendChild(enemyImg);

      let enemyHealth = document.createElement('p')
      enemyHealth.textContent = `Health: ${selectedMonster.max_wounds}`
      enemyPicDiv.appendChild(enemyHealth);
      let enemyArmor = document.createElement('p')
      enemyArmor.textContent = `Armor ${selectedMonster.base_armor}`
      enemyPicDiv.appendChild(enemyArmor);

      let enemyCardDiv = document.getElementById('enemyCard');
      let enemyCardImg = document.createElement('img');
      enemyCardImg.src = selectedMonster.monster_card_img_path
      enemyCardImg.className = 'card';
      enemyCardDiv.appendChild(enemyCardImg)

      let weaponPicDiv = document.getElementById('weaponCard');
      let weaponImg = document.createElement('img');
      weaponImg.src = selectedWeapon.img_path
      weaponImg.className = 'card';
      weaponPicDiv.appendChild(weaponImg);
      // console.log(selectedWeapon.img_path)
      if (selectedWeapon.type === 'ranged' || (selectedWeapon.type === 'magic' && selectedWeapon.name !== 'Word of Vaal')) {
        let selectedMonster = chosenQuest.tokenPlacement.monsters[selectedTarget.name + selectedTarget.id.toString()]
        let x = Math.abs(heroToken.x - selectedMonster.x) / 50
        let y = Math.abs(heroToken.y - selectedMonster.y) / 50
        // console.log(x, y)
        if (x >= y) {
          setRangeNeeded(x)
        } else {
          setRangeNeeded(y)
        }
      } else {
        setRangeNeeded('N/A')
      }

      setAddToAttackPannel(true);

    }

  }

  function addDiceRoll(roll, color, id) {
    if (diceSideData[color].sides[`side${roll}`].miss === true) {
      alert('Attack Missed');
      selectedTarget.name = null;
      selectedTarget.id = null;
      attackOn()
      attackCardsActive()
    } else {
      setTurnDiceOff(false)

      setDamage(damage => damage + diceSideData[color].sides[`side${roll}`].damage)
      setRange(range => range + diceSideData[color].sides[`side${roll}`].range)
      setSurge(surge => surge + diceSideData[color].sides[`side${roll}`].surge)

      let dicePicDiv = document.getElementById('dicePic');
      let diceImg = document.createElement('img');
      diceImg.src = diceSideData[color].sides[`side${roll}`].img_path;
      diceImg.height = 50;
      diceImg.width = 50;
      dicePicDiv.appendChild(diceImg);

      let hide = document.getElementById(id)
      hide.className = 'hidden'

    }
  }



  function addPowerDiceRoll(roll, id) {
    setSurge(surge => surge + diceSideData.powerDice.sides[`side${roll}`].surge)
    setPowerDieRolled(powerDieRolled => powerDieRolled + 1)

    let dicePicDiv = document.getElementById('dicePic');
    let diceImg = document.createElement('img');
    diceImg.src = diceSideData.powerDice.sides[`side${roll}`].img_path;
    diceImg.height = 50;
    diceImg.width = 50;
    dicePicDiv.appendChild(diceImg);

    if (diceSideData.powerDice.sides[`side${roll}`].enhancment === true) {
      // diceImg.style.border = '6px inset red'
      setEnhance(enhance => enhance + 1)


    }
    let hide = document.getElementById(id)
    hide.className = 'hidden'
  }

  function addEnhancment(choice) {
    console.log(choice)
    if (choice === 'damage') {
      setDamage(damage => damage + 1)
    } else if (choice === 'range') {
      setRange(range => range + 1)
    }
    setEnhance(enhance => enhance - 1)
  }

  //calculate special abilities and off hand weapon bonuses
  useEffect(() => {
    //special abilities
    if (selectedWeapon.special_abilities.other !== false) {
      // console.log('Special Abilities ', selectedWeapon.special_abilities.other)
      let specialAbility = selectedWeapon.special_abilities.other
      for (let key in specialAbility) {
        if (specialAbility[key].type === 'addDamage') {
          setDamage(damage => damage + specialAbility[key].amount)
        }
        if (specialAbility[key].type === 'addRange') {
          setRange(range => range + specialAbility[key].amount)
        }
        if (specialAbility[key].type === 'addSurge') {
          setSurge(surge => surge + specialAbility[key].amount)
        }
        if (specialAbility[key].type === 'addPierce') {
          setPierce(pierce => pierce + specialAbility[key].amount)
        }
        if (specialAbility[key].type === 'addBlast') {
          setBlast(blast => blast + specialAbility[key].amount)
        }
        if (specialAbility[key].type === 'addDamagePierce') {
          setDamage(damage => damage + specialAbility[key].damageAmount)
          setPierce(pierce => pierce + specialAbility[key].pierceAmount)
        }
        if (specialAbility[key].type === 'removeThreat') {
          setThreatTokens(threatTokens => threatTokens - specialAbility[key].amount)
        }
      }
    }
    //offHand
    if (offHand) {
      if (offHand.special_abilities.off_hand_bonus !== false) {
        let offHandBonus = offHand.special_abilities.off_hand_bonus
        // console.log('Off hand weapon: ', offHand.special_abilities.off_hand_bonus)
        for (let key in offHandBonus) {
          let weaponPicDiv = document.getElementById('abilities');
          let offHandText = document.createElement('p')
          offHandText.innerText = offHandBonus[key].text
          weaponPicDiv.appendChild(offHandText);

          if (offHandBonus[key].type === 'addDamage') {
            setDamage(damage => damage + offHandBonus[key].amount)
          }
          if (offHandBonus[key].type === 'addRange') {
            setRange(range => range + offHandBonus[key].amount)
          }
          if (offHandBonus[key].type === 'addSurge') {
            setSurge(surge => surge + offHandBonus[key].amount)
          }
          if (offHandBonus[key].type === 'addPierce') {
            setPierce(pierce => pierce + offHandBonus[key].amount)
          }
          if (offHandBonus[key].type === 'addBlast') {
            setBlast(blast => blast + offHandBonus[key].amount)
          }
        }
      }

    }
    //checks for Other1 special abilities
    if (other1 && other1.special_abilities.other !== false) {
      let specialAbility = other1.special_abilities.other

      for (let key in specialAbility) {
        if (specialAbility[key].type === 'addDamage' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setDamage(damage => damage + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addRange' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setRange(range => range + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addSurge' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setSurge(surge => surge + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addPierce' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setPierce(pierce => pierce + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addBlast' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setBlast(blast => blast + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
      }
    }
    //checks for Other2 special abilities
    if (other2 && other2.special_abilities.other !== false) {
      // console.log('Special Abilities ', selectedWeapon.special_abilities.other)
      let specialAbility = other2.special_abilities.other
      for (let key in specialAbility) {
        if (specialAbility[key].type === 'addDamage' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setDamage(damage => damage + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addRange' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setRange(range => range + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addSurge' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setSurge(surge => surge + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addPierce' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setPierce(pierce => pierce + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
        if (specialAbility[key].type === 'addBlast' && (specialAbility[key].onlyFor === selectedWeapon.type || specialAbility[key].onlyFor === 'any')) {
          setBlast(blast => blast + specialAbility[key].amount)
          let weaponPicDiv = document.getElementById('abilities');
          let abilityText = document.createElement('p')
          abilityText.innerText = specialAbility[key].text
          weaponPicDiv.appendChild(abilityText);
        }
      }
    }
  }, [])


  useEffect(() => {
    dragElement(document.getElementById("attackPannel"));
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
    <div id='dicePool' style={{ left: '40%', top: '70%', }}>
      <div id='attackPannel'>

        <div id='weaponCard'>

        </div>

        <div id='abilities'><p>abilities</p></div>
        <div id='roll'>
          <p>Damage: {damage}</p>
          <p>Range: {range} / Range Needed: {rangeNeeded}</p>
          {pierce !== 0 ? <p>Pierce: {pierce}</p> : null}
          {blast !== 0 ? <p>Blast: {blast}</p> : null}

          {surge > 0 ? <button onClick={() => setPurchaseSurgeAbilities(true)}>Surge: {surge}</button> : null}
          <br />
          {enhance > 0 ? <button onClick={() => setEnhanceChoice(true)}>Add Enhancment: {enhance}</button> : null}
        </div>

        <div id='dicePic'>
          <button id='attackButton' onClick={() => attack(checkSelectedTarget, chosenQuest, heroToken, damage, range, surge, pierce, blast, selectedWeapon, offHand, selectedTarget, attackOn, attackCardsActive, showDiceRoll)}>click to attack</button>
        </div>

        <div id='enemyPic'><p></p></div>
        <div id='enemyCard'><p></p></div>



      </div>

      <div id='diceRow'>
        {redDice.map((die, i) =>
          <div key={i} id={i} className='singleDie'>
            <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'red', i))}
              triggers={['click', 'Enter']}
              disabled={turnMainDiceOff}
              defaultValue={1}
              faces={[`${diceSideData.red.sides.side1.img_path}`,
              `${diceSideData.red.sides.side2.img_path}`,
              `${diceSideData.red.sides.side3.img_path}`,
              `${diceSideData.red.sides.side4.img_path}`,
              `${diceSideData.red.sides.side5.img_path}`,
              `${diceSideData.red.sides.side6.img_path}`]}
              cheatValue={4}
            />
          </div>
        )}
        {whiteDice.map((die, i) =>
          <div key={i} id={i + 100} className='singleDie'>
            {/* {console.log(document.getElementById(i))} */}
            <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'white', i + 100))}
              triggers={['click']}
              disabled={turnMainDiceOff}
              defaultValue={2}
              faces={[`${diceSideData.white.sides.side1.img_path}`,
              `${diceSideData.white.sides.side2.img_path}`,
              `${diceSideData.white.sides.side3.img_path}`,
              `${diceSideData.white.sides.side4.img_path}`,
              `${diceSideData.white.sides.side5.img_path}`,
              `${diceSideData.white.sides.side6.img_path}`]}
            />
          </div>
        )}
        {blueDice.map((die, i) =>
          <div key={i} id={i + 200} className='singleDie'>
            <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'blue', i + 200))}
              triggers={['click']}
              disabled={turnMainDiceOff}
              defaultValue={1}

              faces={[`${diceSideData.blue.sides.side1.img_path}`,
              `${diceSideData.blue.sides.side2.img_path}`,
              `${diceSideData.blue.sides.side3.img_path}`,
              `${diceSideData.blue.sides.side4.img_path}`,
              `${diceSideData.blue.sides.side5.img_path}`,
              `${diceSideData.blue.sides.side6.img_path}`]}
            />
          </div>
        )}
        {greenDice.map((die, i) =>
          <div key={i} id={i + 300} className='singleDie'>
            <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'green', (i + 300)))}
              triggers={['click']}
              disabled={turnDiceOff}
              defaultValue={1}

              faces={[`${diceSideData.green.sides.side1.img_path}`,
              `${diceSideData.green.sides.side2.img_path}`,
              `${diceSideData.green.sides.side3.img_path}`,
              `${diceSideData.green.sides.side4.img_path}`,
              `${diceSideData.green.sides.side5.img_path}`,
              `${diceSideData.green.sides.side6.img_path}`]}

            />
          </div>
        )}
        {yellowDice.map((die, i) =>
          <div key={i} id={i + 400} className='singleDie'>
            <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'yellow', i + 400))}
              triggers={['click']}
              disabled={turnDiceOff}
              defaultValue={1}
              faces={[`${diceSideData.yellow.sides.side1.img_path}`,
              `${diceSideData.yellow.sides.side2.img_path}`,
              `${diceSideData.yellow.sides.side3.img_path}`,
              `${diceSideData.yellow.sides.side4.img_path}`,
              `${diceSideData.yellow.sides.side5.img_path}`,
              `${diceSideData.yellow.sides.side6.img_path}`]}

            />
          </div>
        )}


        {/* POWER DICE */}

        {selectedWeapon.type === 'melee' ? meleePowerDice.map((die, i) =>
          <div key={i} id={i + 500} className='singleDie'>
            <Dice size={100} onRoll={(roll => addPowerDiceRoll(roll, i + 500))}
              triggers={['click']}
              disabled={turnDiceOff}
              defaultValue={1}
              faces={[`${diceSideData.powerDice.sides.side1.img_path}`,
              `${diceSideData.powerDice.sides.side2.img_path}`,
              `${diceSideData.powerDice.sides.side3.img_path}`,
              `${diceSideData.powerDice.sides.side4.img_path}`,
              `${diceSideData.powerDice.sides.side5.img_path}`,
              `${diceSideData.powerDice.sides.side6.img_path}`]}
            // cheatValue={6}
            />
          </div>
        ) : null}

        {selectedWeapon.type === 'ranged' ? rangedPowerDice.map((die, i) =>
          <div key={i} id={i + 500} className='singleDie'>
            <Dice size={100} onRoll={(roll => addPowerDiceRoll(roll, i + 500))}
              triggers={['click']}
              disabled={turnDiceOff}
              defaultValue={1}
              faces={[`${diceSideData.powerDice.sides.side1.img_path}`,
              `${diceSideData.powerDice.sides.side2.img_path}`,
              `${diceSideData.powerDice.sides.side3.img_path}`,
              `${diceSideData.powerDice.sides.side4.img_path}`,
              `${diceSideData.powerDice.sides.side5.img_path}`,
              `${diceSideData.powerDice.sides.side6.img_path}`]}
            />
          </div>
        ) : null}

        {selectedWeapon.type === 'magic' ? magicPowerDice.map((die, i) =>
          <div key={i} id={i + 500} className='singleDie'>
            <Dice size={100} onRoll={(roll => addPowerDiceRoll(roll, i + 500))}
              triggers={['click']}
              disabled={turnDiceOff}
              defaultValue={1}
              faces={[`${diceSideData.powerDice.sides.side1.img_path}`,
              `${diceSideData.powerDice.sides.side2.img_path}`,
              `${diceSideData.powerDice.sides.side3.img_path}`,
              `${diceSideData.powerDice.sides.side4.img_path}`,
              `${diceSideData.powerDice.sides.side5.img_path}`,
              `${diceSideData.powerDice.sides.side6.img_path}`]}
            />
          </div>
        ) : null}


      </div>

      {
        enhanceChoice && enhance !== 0 ?
          <div style={{ position: 'absolute', backgroundColor: 'black', height: '150px', width: '250px' }}
          >
            <button onClick={() => setEnhanceChoice(false)}>Exit</button>
            <p>Enhancments left: {enhance}</p>
            <button onClick={() => addEnhancment('damage')}>Damage</button>
            <button onClick={() => addEnhancment('range')}>Range</button>
          </div>
          :
          null
      }

      {purchaseSurgeAbilities && surge !== 0 ? <SurgePurchase
        surge={surge}
        setSurge={setSurge}
        setPurchaseSurgeAbilities={setPurchaseSurgeAbilities}
        selectedWeapon={selectedWeapon}
        damage={damage}
        setDamage={setDamage}
        range={range}
        setRange={setRange}
        pierce={pierce}
        setPierce={setPierce}
        powerDieRolled={powerDieRolled}
        setPowerDieRolled={setPowerDieRolled}
        blast={blast}
        setBlast={setBlast}
        setThreatTokens={setThreatTokens}
      /> : null}
    </div >
  );
}

export default DiceRoll;
