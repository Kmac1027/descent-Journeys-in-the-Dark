import { heroData } from '../data/heroData';
import { diceSideData } from '../data/diceSideData';
import { shopItems } from '../data/items/shopItems';
import { map1 } from '../data/dungeonMaps/map1';

export const disableAttack = {
  melee: true,
  ranged: true,
  magic: true
}

export const attackType = { type: null }





export function attack(heroToken, damage, range, surge, pierce, selectedWeapon, offHand, selectedTarget, attackOn, attackCardsActive, showDiceRoll) {
  let selectedMonster = map1.tokenPlacement.monsters[selectedTarget.name + selectedTarget.id.toString()];

  if (selectedWeapon.type === 'melee') {
    let monsterArmor = selectedMonster.base_armor - pierce
    if (monsterArmor <= 0) {
      monsterArmor = 0
    }
    let hitAmount = damage - monsterArmor
    selectedMonster.max_wounds -= hitAmount
  }

  if (selectedWeapon.type === 'ranged' || selectedWeapon.type === 'magic') {
    let rangeNeeded
    let x = Math.abs(heroToken.x - selectedMonster.x) / 50
    let y = Math.abs(heroToken.y - selectedMonster.y) / 50
    // console.log('x: ', x, 'y: ', y);
    if (x >= y) {
      rangeNeeded = x
    } else {
      rangeNeeded = y
    }
    if (range < rangeNeeded) {
      alert('Attack Missed, Not Enough Range')
    } else {
      let monsterArmor = selectedMonster.base_armor - pierce
      if (monsterArmor <= 0) {
        monsterArmor = 0
      }
      let hitAmount = damage - monsterArmor
      selectedMonster.max_wounds -= hitAmount
    }
    // console.log(rangeNeeded)
  }


  if (selectedMonster.max_wounds <= 0) {
    delete map1.tokenPlacement.monsters[selectedTarget.name + selectedTarget.id.toString()]
  }
  selectedTarget.name = null;
  selectedTarget.id = null;
  // console.log(selectedWeapon)
  // console.log(offHand)
  attackOn()
  attackCardsActive()
  // showDiceRoll()

}