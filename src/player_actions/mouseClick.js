import { map1 } from '../data/dungeonMaps/map1'
import { disableAttack } from './attack';

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
  // console.log(correctedPosition);
  // else {
  //   if ('target item or gold') {
  //     // pickUpItem();
  //   } else if ('target treasure chest') {
  //     // openTreasureChest()
  //   } else if ('target is Gliph') {
  //     if ('glyph activated') {
  //       // 'return to town?'
  //     } else {
  //       // 'activate glyph'
  //     }
  //   }
  // }
}

export function attackTargetClicked() {
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

  let monsters = map1.tokenPlacement.monsters
  for (let monster in monsters) {
    if (correctedPosition.x === monsters[monster].x && correctedPosition.y === monsters[monster].y) {
      console.log(monster)
      disableAttack.melee = false;
      break;
    } else {
      console.log('not a monster')
    }
  }
}