import '../styles/player.css'
import Dice from 'react-dice-roll';
import { heroData } from '../data/heroData.js'
import { diceSideData } from '../data/diceSideData.js'

function Player() {

  function diceRoll(rollValue) {
    console.log(diceSideData.red[`side${rollValue}`])
  }
  return (
    <div id='playerContainer'>
      <div id='heroCardDiv'>
        <img className='heroCard' src={heroData.steelhorns.hero_card_img_path} alt={heroData.steelhorns.name} />
      </div>

      <div id='weapons'>
        <p>Name: {heroData.steelhorns.name}</p>
        <p>Weapon 1:</p>
        <p>Weapon 2:</p>
        <p>Armor:</p>
      </div>
      <div id='other'>
        <p>other 1:</p>
        <p>other 2:</p>
        <p>Potions:</p>
        <p>Bag</p>
      </div>
      <div id='skills'>
        <p>Skills:</p>
      </div>
      <div id='dicePool'>
        <p>Conquest tokens:</p>
        <h3> Dice Pool</h3>
        <Dice size={100} onRoll={(value) => diceRoll(value)}
          faces={[`${diceSideData.red.side1.img_path}`,
          `${diceSideData.red.side2.img_path}`,
          `${diceSideData.red.side3.img_path}`,
          `${diceSideData.red.side4.img_path}`,
          `${diceSideData.red.side5.img_path}`,
          `${diceSideData.red.side6.img_path}`]}
        //cheatValue={6}
        />
      </div>

    </div>
  );
}

export default Player;

// "homepage": "http://Kmac1027.github.io/descent-Journeys-in-the-Dark",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"