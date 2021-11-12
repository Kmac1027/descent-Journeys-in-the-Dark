import Dice from 'react-dice-roll';
import { useState, useEffect } from 'react'
import { heroData } from '../data/heroData'
import { diceSideData } from '../data/diceSideData.js';
// import { selectedTarget } from '../player_actions/attack'
// import { attack } from '../player_actions/attack';
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
  showDiceRoll,
  herosDice,
  setHerosDice,
  selectedTarget,


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
  correctedPosition
}) {


  const [turnDiceOff, setTurnDiceOff] = useState(false);
  const [redDice, setRedDice] = useState(redDiceArray);
  const [blueDice, setBlueDice] = useState(blueDiceArray);
  const [whiteDice, setWhiteDice] = useState(whiteDiceArray);
  const [greenDice, setGreenDice] = useState(greenDiceArray);
  const [yellowDice, setYellowDice] = useState(yellowDiceArray);


  let diceRoll = {
    damage: 0,
    surge: 0,
    range: 0
  }

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
    } else if (selectedWeapon.type === 'ranged') {
      for (let i = 0; i < rangedPowerDie; i++) {
        rangedPowerDiceArray.push(1)
      }
    } else if (selectedWeapon.type === 'magic') {
      for (let i = 0; i < magicPowerDie; i++) {
        magicPowerDiceArray.push(1)
      }
    }
  }, [attackActive])

  function addDiceRoll(roll, color) {
    if (diceSideData[color].sides[`side${roll}`].miss === true) {
      alert('Attack Missed')
    } else {
      diceRoll.damage += diceSideData[color].sides[`side${roll}`].damage
      diceRoll.surge += diceSideData[color].sides[`side${roll}`].surge
      diceRoll.range += diceSideData[color].sides[`side${roll}`].range
    }

  }

  return (
    <div id='dicePool' style={{ position: 'absolute', left: '50%', top: '50%', }}>
      <div>
        <button id='attackButton' onClick={() => attack(diceRoll, selectedWeapon, offHand, selectedTarget, attackOn, attackCardsActive, showDiceRoll)}>click to attack after rollign all your dice </button>
      </div>

      {redDice.map((die, i) =>
        <div key={i}>
          <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'red'))}
            triggers={['click']}
            disabled={turnDiceOff}
            faces={[`${diceSideData.red.sides.side1.img_path}`,
            `${diceSideData.red.sides.side2.img_path}`,
            `${diceSideData.red.sides.side3.img_path}`,
            `${diceSideData.red.sides.side4.img_path}`,
            `${diceSideData.red.sides.side5.img_path}`,
            `${diceSideData.red.sides.side6.img_path}`]}
          />
        </div>
      )}
      {whiteDice.map((die, i) =>
        <div key={i}>
          <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'white'))}
            triggers={['click']}
            disabled={turnDiceOff}
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
        <div key={i}>
          <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'blue'))}
            triggers={['click']}
            disabled={turnDiceOff}
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
        <div key={i}>
          <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'green'))}
            triggers={['click']}
            disabled={turnDiceOff}
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
        <div key={i}>
          <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'yellow'))}
            triggers={['click']}
            disabled={turnDiceOff}
            faces={[`${diceSideData.yellow.sides.side1.img_path}`,
            `${diceSideData.yellow.sides.side2.img_path}`,
            `${diceSideData.yellow.sides.side3.img_path}`,
            `${diceSideData.yellow.sides.side4.img_path}`,
            `${diceSideData.yellow.sides.side5.img_path}`,
            `${diceSideData.yellow.sides.side6.img_path}`]}

          />
        </div>
      )}
    </div>
  );
}

export default DiceRoll;