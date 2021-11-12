import Dice from 'react-dice-roll';
import { useState, useEffect } from 'react'
import { heroData } from '../data/heroData'
import { diceSideData } from '../data/diceSideData.js';
import { selectedTarget } from '../player_actions/attack'
// import { attack } from '../player_actions/attack';
let redDiceArray = [];
let blueDiceArray = [];
let whiteDiceArray = [];
let yellowDiceArray = [];
let greenDiceArray = [];
let meleePowerDiceDiceArray = [];
let rangedPowerDiceDiceArray = [];
let magicPowerDiceDiceArray = [];



function DiceRoll({
  chosenHero,
  showDiceRoll,
  herosDice,
  setHerosDice,

  attack,
  attackActive,
  selectedWeapon,
  offHand,
  meleePowerDie,
  rangedPowerDie,
  magicPowerDie,
  heroToken,
  correctedPosition
}) {

  const [isTargetChosen, setIsTargetChosen] = useState(selectedTarget);
  const [diceOn, setDiceOn] = useState(false);
  const [redDice, setRedDice] = useState(redDiceArray);
  const [blueDice, setBlueDice] = useState(blueDiceArray);

  useEffect(() => {
    setIsTargetChosen(selectedTarget)
    if (isTargetChosen !== null) {
      turnDiceOn()
    }
  }, []);
  //figure out what needs to go in this dependency to turn on dice and then set the disable value for the dice component
  function turnDiceOn() {
    if (diceOn === false) {
      setDiceOn(true)
    } else {
      setDiceOn(false)
    }
  }


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
    meleePowerDiceDiceArray = [];
    rangedPowerDiceDiceArray = [];
    magicPowerDiceDiceArray = [];
    for (let i = 0; i < selectedWeapon.combat_dice.red; i++) {
      redDiceArray.push(1)
    }
    setRedDice(redDiceArray);
    for (let i = 0; i < selectedWeapon.combat_dice.blue; i++) {
      blueDiceArray.push(1)
    }
    setBlueDice(redDiceArray);
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

  attack(diceRoll, selectedWeapon, offHand, showDiceRoll)





  return (
    <div id='dicePool' style={{ position: 'absolute', left: '50%', top: '50%', }}>
      <div>
        <button id='attackButton' onClick={() => attack()}>click to attack after rollign all your dice </button>
      </div>

      {redDiceArray.map((die, i) =>
        <div key={i}>
          <Dice size={100} onRoll={(roll => addDiceRoll(roll, 'red'))}
            triggers={['click']}
            faces={[`${diceSideData.red.sides.side1.img_path}`,
            `${diceSideData.red.sides.side2.img_path}`,
            `${diceSideData.red.sides.side3.img_path}`,
            `${diceSideData.red.sides.side4.img_path}`,
            `${diceSideData.red.sides.side5.img_path}`,
            `${diceSideData.red.sides.side6.img_path}`]
            }
          />
        </div>
      )}


      {/* <Dice id='blue' size={100} onRoll={(roll => addDiceRoll(roll, 'blue'))}
        triggers={['click']}
        faces={[`${diceSideData.blue.sides.side1.img_path}`,
        `${diceSideData.blue.sides.side2.img_path}`,
        `${diceSideData.blue.sides.side3.img_path}`,
        `${diceSideData.blue.sides.side4.img_path}`,
        `${diceSideData.blue.sides.side5.img_path}`,
        `${diceSideData.blue.sides.side6.img_path}`]
        }
      /> */}

    </div>
  );
}

export default DiceRoll;