import Dice from 'react-dice-roll';
import { diceSideData } from '../data/diceSideData.js'




function DiceRoll({ showDiceRoll }) {

  function diceRoll(rollValue) {
    console.log(diceSideData.red[`side${rollValue}`]);
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