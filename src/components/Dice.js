import Dice from 'react-dice-roll';
import { diceSideData } from '../data/diceSideData.js';
import { attack, checkRange, checkMiss } from '../player_actions/attack';




function DiceRoll({ showDiceRoll }) {

  function diceRoll(rollValue) {
    //  checkRange();
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

      <Dice size={100} onRoll={(value) => diceRoll(value)}
        triggers={['click']}
        faces={[`${diceSideData.red.side1.img_path}`,
        `${diceSideData.red.side2.img_path}`,
        `${diceSideData.red.side3.img_path}`,
        `${diceSideData.red.side4.img_path}`,
        `${diceSideData.red.side5.img_path}`,
        `${diceSideData.red.side6.img_path}`]
        }
      //cheatValue={6}
      />
    </div>
  );
}

export default DiceRoll;