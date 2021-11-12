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

export const selectedTarget = {
  name: null,
}



export function attack(diceRoll, selectedWeapon, offHand, showDiceRoll) {
  console.log(selectedTarget.name)
  console.log(diceRoll)
  console.log(selectedWeapon)
  console.log(offHand)
  // showDiceRoll()

}