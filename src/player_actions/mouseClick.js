import { map1 } from '../data/dungeonMaps/map1'
import { attackType, disableAttack } from './attack';
import { heroToken } from './movement';


export let selectedTarget = {
  id: null
};

export let mousePos = {
  x: null,
  y: null
}

export let correctedPosition = {
  x: null,
  y: null
}

export function targetClicked() {
  //mouse correction
  // console.log('Regular target Clicked')
  for (let x = 0; x <= map1.mapSize.width; x += 50) {
    if (mousePos.x > x) {
      correctedPosition.x = x;
    }
  }
  for (let y = 0; y <= map1.mapSize.height; y += 50) {
    if (mousePos.y > y) {
      correctedPosition.y = y;
    }
  }
}

export function attackTargetClicked() {

  console.log('Attack target Clicked')
  //mouse correction
  for (let x = 0; x <= map1.mapSize.width; x += 50) {
    if (mousePos.x > x) {
      correctedPosition.x = x;
    }
  }
  for (let y = 0; y <= map1.mapSize.height; y += 50) {
    if (mousePos.y > y) {
      correctedPosition.y = y;
    }
  }

  if (attackType.type === 'melee') {
    if ((heroToken.x - 50 === correctedPosition.x && heroToken.y === correctedPosition.y) ||
      (heroToken.x + 50 === correctedPosition.x && heroToken.y === correctedPosition.y) ||
      (heroToken.y - 50 === correctedPosition.y && heroToken.x === correctedPosition.x) ||
      (heroToken.y + 50 === correctedPosition.y && heroToken.x === correctedPosition.x) ||
      (heroToken.x + 50 === correctedPosition.x && heroToken.y + 50 === correctedPosition.y) ||
      (heroToken.x + 50 === correctedPosition.x && heroToken.y - 50 === correctedPosition.y) ||
      (heroToken.x - 50 === correctedPosition.x && heroToken.y + 50 === correctedPosition.y) || (
        heroToken.x - 50 === correctedPosition.x && heroToken.y - 50 === correctedPosition.y)) {

      let monsters = map1.tokenPlacement.monsters
      for (let monster in monsters) {
        if (correctedPosition.x === monsters[monster].x && correctedPosition.y === monsters[monster].y) {
          console.log(monster)
          disableAttack.melee = false;
          selectedTarget.id = monsters[monster].id

          break;
        } else {
          disableAttack.melee = true;
        }
      }
    } else {
      console.log('you are not in melee range')
    }
  } else {
    console.log('this is the ranged and magic area')
  }

}