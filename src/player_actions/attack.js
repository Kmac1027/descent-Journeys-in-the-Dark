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





export function attack(diceRoll, selectedWeapon, offHand, selectedTarget, attackOn, attackCardsActive, showDiceRoll) {
  let selectedMonster = map1.tokenPlacement.monsters[selectedTarget.name + selectedTarget.id.toString()];
  let hitAmount = diceRoll.damage - selectedMonster.base_armor
  selectedMonster.max_wounds -= hitAmount
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