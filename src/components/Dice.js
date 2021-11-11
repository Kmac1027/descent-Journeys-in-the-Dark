import Dice from 'react-dice-roll';
import { useState, useEffect } from 'react'
import { heroData } from '../data/heroData'
import { diceSideData } from '../data/diceSideData.js';
import { attack, checkRange, checkMiss } from '../player_actions/attack';




function DiceRoll({ chosenHero, showDiceRoll, herosDice, setHerosDice, showDice }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false)
  const [white, setWhite] = useState(false)
  const [yellow, setYellow] = useState(false)
  const [green, setGreen] = useState(false)


  function checkDicePool() {
    console.log('inside dice pool function')
    for (let color in herosDice) {
      if (herosDice[color] > 0) {
        setRed(true)
      } else {
        setRed(false)
      }
      if (herosDice[color] > 0) {
        setBlue(true)
      } else {
        setBlue(false)
      }
    }
  }


  function diceRoll(rollValue) {
    attack(
      diceSideData.red[`side${rollValue}`].damage,
      diceSideData.red[`side${rollValue}`].range,
      diceSideData.red[`side${rollValue}`].surge,
      diceSideData.red[`side${rollValue}`].miss
    );


    // console.log(diceSideData.red[`side${rollValue}`]);
    setTimeout(showDiceRoll, [2000]);
  }


  return (
    <div id='dicePool' style={{ position: 'absolute', left: '50%', top: '50%', }}>
      <div>
        <button id='attackButton' onClick={() => checkDicePool()}>click to attack attack</button>
      </div>
      {red ?
        <Dice size={100} onRoll={(value) => diceRoll(value)}
          triggers={['click']}
          faces={[`${diceSideData.red.sides.side1.img_path}`,
          `${diceSideData.red.sides.side2.img_path}`,
          `${diceSideData.red.sides.side3.img_path}`,
          `${diceSideData.red.sides.side4.img_path}`,
          `${diceSideData.red.sides.side5.img_path}`,
          `${diceSideData.red.sides.side6.img_path}`]
          }
        /> : null}
      {blue ?
        <Dice size={100} onRoll={(value) => diceRoll(value)}
          triggers={['click']}
          faces={[`${diceSideData.blue.sides.side1.img_path}`,
          `${diceSideData.blue.sides.side2.img_path}`,
          `${diceSideData.blue.sides.side3.img_path}`,
          `${diceSideData.blue.sides.side4.img_path}`,
          `${diceSideData.blue.sides.side5.img_path}`,
          `${diceSideData.blue.sides.side6.img_path}`]
          }
        /> : null}
    </div>
  );
}

export default DiceRoll;