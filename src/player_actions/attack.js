import { heroData } from '../data/heroData';
import { diceSideData } from '../data/diceSideData';
import { shopItems } from '../data/items/shopItems';



export function attack(damage, range, surge, miss) {
  if (miss === true) {
    console.log('MISS');
  } else {
    console.log(damage);
    console.log(range);
    console.log(surge);
  }
}

export function checkRange(weaponType, rangeRolled) {

}

export function determineDice() {

}