import { heroData } from '../data/heroData';
import { diceSideData } from '../data/diceSideData';
import { shopItems } from '../data/items/shopItems';

export const disableAttack = {
  melee: true,
  ranged: true,
  magic: true
}




export function attack(weapon, offHandWeapon, meleePowerDie, rangedPowerDie, magicPowerDie, heroToken, correctedPosition) {

  let clickedPosition = correctedPosition;

  if (weapon.type === 'melee') {

    if (disableAttack.melee === false) {


      if (heroToken.x - 50 === clickedPosition.x && heroToken.y === clickedPosition.y) {
        console.log('can attack');
      }
      else if (heroToken.x + 50 === clickedPosition.x && heroToken.y === clickedPosition.y) {
        console.log('can attack');
      }
      else if (heroToken.y - 50 === clickedPosition.y && heroToken.x === clickedPosition.x) {
        console.log('can attack');
      }
      else if (heroToken.y + 50 === clickedPosition.y && heroToken.x === clickedPosition.x) {
        console.log('can attack');
      }
      else if (heroToken.x + 50 === clickedPosition.x && heroToken.y + 50 === clickedPosition.y) {
        console.log('can attack');
      }
      else if (heroToken.x + 50 === clickedPosition.x && heroToken.y - 50 === clickedPosition.y) {
        console.log('can attack');
      }
      else if (heroToken.x - 50 === clickedPosition.x && heroToken.y + 50 === clickedPosition.y) {
        console.log('can attack');
      }
      else if (heroToken.x - 50 === clickedPosition.x && heroToken.y - 50 === clickedPosition.y) {
        console.log('can attack');
      } else {
        console.log('target not within melee range')
      }


    } else {
      console.log('Disable melee attack is true, you may not attack at this time')
    }

  } else {
    console.log('ranged and magic weapon area')
  }







}