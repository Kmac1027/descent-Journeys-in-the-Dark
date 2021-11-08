import '../styles/player.css'
import { useState } from 'react'
import { heroData } from '../data/heroData.js'
import { monsterData } from '../data/monsterData.js'


function Player({ showDiceRoll }) {
  const [currentHealth, setCurrentHealth] = useState(heroData.steelhorns.max_wounds);
  const [maxHealth, setMaxHealth] = useState(heroData.steelhorns.max_wounds);
  const [currentFatigue, setCurrentFatigue] = useState(heroData.steelhorns.max_fatigue);
  const [maxFatigue, setMaxFatigue] = useState(heroData.steelhorns.max_fatigue);
  const [currentConquestTokens, setCurrentConquestTokens] = useState(heroData.steelhorns.max_fatigue);
  const [maxConquestTokens, setMaxConquestTokens] = useState(heroData.steelhorns.max_fatigue);
  const [armor, setArmor] = useState(heroData.steelhorns.base_armor);
  const [speed, setSpeed] = useState(heroData.steelhorns.speed);
  const [meleePowerDie, setMeleePowerDie] = useState(heroData.steelhorns.traits.melee_trait);
  const [rangedPowerDie, setrangedPowerDie] = useState(heroData.steelhorns.traits.ranged_trait);
  const [magicPowerDie, setMagicPowerDie] = useState(heroData.steelhorns.traits.magic_trait);

  return (
    <div>
      <div id='playerContainer'>
        <div id='heroCardDiv'>
          <img className='heroCard' src={heroData.steelhorns.hero_card_img_path} alt={heroData.steelhorns.name} />
          <p>Name: {heroData.steelhorns.name}</p>
          <p>conquest tokens:{currentConquestTokens}/{maxConquestTokens}</p>
        </div>
        <div id='stats'>
          <div>
            <h3>Stats</h3>
            <p>Health: {currentHealth} / {maxHealth}</p>
            <p>Fatigue: {currentFatigue} / {maxFatigue}</p>
            <p>Armor: {armor}</p>
            <p>Speed: {speed} </p>
          </div>
          <div>
            <h3>Traits</h3>
            <p>Melee Power Die: {meleePowerDie}</p>
            <p>Ranged Power Die: {rangedPowerDie}</p>
            <p>Magic Power Die: {magicPowerDie} </p>
          </div>
          <div>
            <h3>Hero Ability:</h3>
            <p> {heroData.steelhorns.hero_ability}</p>
          </div>
        </div>

        <div id='weapons'>
          <div>
            <p>Weapon 1:</p>
            <input type='image' className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'
              onClick={showDiceRoll}></input>
          </div>
          <div>
            <p>Weapon 2:</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
          <div>
            <p>Armor:</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
        </div>

        <div id='other'>
          <div>
            <p>Other 1:</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
          <div>
            <p>Other 2:</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
        </div>

        <div id='bag'>
          <div>
            <p>Potions:</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
          <div>
            <p>Bag:</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
        </div>


        <div id='skills'>
          <div>
            <p>Skills 1</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
          <div>
            <p>Skills 2</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
          <div>
            <p>Skills 3</p>
            <img className='card' src={monsterData.skeleton.normal.monster_card_img_path} alt='g'></img>
          </div>
        </div>
      </div>
    </div >

  );
}

export default Player;

// "homepage": "http://Kmac1027.github.io/descent-Journeys-in-the-Dark",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"