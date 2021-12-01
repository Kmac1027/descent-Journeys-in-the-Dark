import { map1 } from '../data/dungeonMaps/map1'
import { attackType, disableAttack } from './attack';
import { heroToken } from './movement';


export let selectedTarget = {
  id: null,
  name: null
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

  // console.log('Attack target Clicked')
  //mouse correction

  if (mousePos.x % 50 === mousePos.x) {
    correctedPosition.x = 0;
  }
  else if (mousePos.x % 50 > 0) {
    correctedPosition.x = mousePos.x - mousePos.x % 50;
  }
  else {
    correctedPosition.x = mousePos.x;
  }
  if (mousePos % 50 === mousePos) {
    correctedPosition = 0;
  }
  else if (mousePos.y % 50 > 0) {
    correctedPosition.y = mousePos.y - mousePos.y % 50;
  }
  else {
    correctedPosition.y = mousePos.y;
  }
  // for (let x = 0; x <= map1.mapSize.width; x += 50) {
  //   if (mousePos.x > x) {
  //     correctedPosition.x = x;
  //   }
  // }
  // for (let y = 0; y <= map1.mapSize.height; y += 50) {
  //   if (mousePos.y > y) {
  //     correctedPosition.y = y;
  //   }
  // }

  if (attackType.type === 'melee' && attackType.blast === false) {
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
          console.log(monster, ' Selected to attack')
          map1.tokenPlacement.marker.x = monsters[monster].x
          map1.tokenPlacement.marker.y = monsters[monster].y
          disableAttack.melee = false;
          selectedTarget.id = monsters[monster].id;
          selectedTarget.name = monsters[monster].name
          break;
        } else {
          disableAttack.melee = true;
        }
      }
    } else {
      console.log('you are not in melee range')
    }
  } else if ((attackType.type === 'ranged' && attackType.blast === false)
    || (attackType.type === 'magic' && attackType.blast === false)) {
    let monsters = map1.tokenPlacement.monsters
    for (let monster in monsters) {
      if (correctedPosition.x === monsters[monster].x && correctedPosition.y === monsters[monster].y) {
        console.log(monster, ' Selected to attack')
        map1.tokenPlacement.marker.x = monsters[monster].x
        map1.tokenPlacement.marker.y = monsters[monster].y
        disableAttack.ranged = false;
        disableAttack.magic = false;
        selectedTarget.id = monsters[monster].id;
        selectedTarget.name = monsters[monster].name
        break;
      } else {
        disableAttack.ranged = true;
        disableAttack.magic = true;
      }
    }
  } else if (attackType.blast === true) {
    let tiles = map1.floor.floor_tiles
    for (let tile in tiles) {
      if (correctedPosition.x === tiles[tile].x && correctedPosition.y === tiles[tile].y) {
        console.log('Blast Attack!')
        map1.tokenPlacement.marker.x = tiles[tile].x
        map1.tokenPlacement.marker.y = tiles[tile].y
        selectedTarget.id = tiles[tile]
        selectedTarget.name = tiles
        disableAttack.ranged = false;
        disableAttack.magic = false;
        disableAttack.melee = false;
        break;
      }
    }
  }
}