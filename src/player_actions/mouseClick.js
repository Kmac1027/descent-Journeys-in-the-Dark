// import { map1 } from '../data/dungeonMaps/map1'
// import { quest1 } from '../data/dungeonMaps/quest1';
import { questForMouseClick } from '../screens/ChoseQuest';
import { attackType, disableAttack } from './attack';
import { heroToken } from './movement';


let quest;

export let returnGlyph = { x: null, y: null };

export let selectedTarget = {
  id: null,
  name: null
};

export let mousePos = {
  x: null,
  y: null
};

export let correctedPosition = {
  x: null,
  y: null
};

export function targetClicked() {
  quest = questForMouseClick;
  //mouse correction
  for (let x = 0; x <= quest.mapSize.width; x += 50) {
    if (mousePos.x > x) {
      correctedPosition.x = x;
    }
  }
  for (let y = 0; y <= quest.mapSize.height; y += 50) {
    if (mousePos.y > y) {
      correctedPosition.y = y;
    }
  }
  let monsters = quest.tokenPlacement.monsters;
  for (let monster in monsters) {
    if (monsters[monster].x === correctedPosition.x && monsters[monster].y === correctedPosition.y) {
      alert(`${monsters[monster].name} Health: ${monsters[monster].max_wounds}`);
      break;
    }
  }
  console.log('X: ', correctedPosition.x, 'Y: ', correctedPosition.y);
}


export function attackTargetClicked() {
  quest = questForMouseClick;
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

  if (attackType.type === 'melee' && (attackType.blast === false || attackType.blast === null)) {
    if ((heroToken.x - 50 === correctedPosition.x && heroToken.y === correctedPosition.y) ||
      (heroToken.x + 50 === correctedPosition.x && heroToken.y === correctedPosition.y) ||
      (heroToken.y - 50 === correctedPosition.y && heroToken.x === correctedPosition.x) ||
      (heroToken.y + 50 === correctedPosition.y && heroToken.x === correctedPosition.x) ||
      (heroToken.x + 50 === correctedPosition.x && heroToken.y + 50 === correctedPosition.y) ||
      (heroToken.x + 50 === correctedPosition.x && heroToken.y - 50 === correctedPosition.y) ||
      (heroToken.x - 50 === correctedPosition.x && heroToken.y + 50 === correctedPosition.y) || (
        heroToken.x - 50 === correctedPosition.x && heroToken.y - 50 === correctedPosition.y)) {

      let monsters = quest.tokenPlacement.monsters;
      for (let monster in monsters) {
        if (correctedPosition.x === monsters[monster].x && correctedPosition.y === monsters[monster].y) {
          console.log(monster, ' Selected to attack');
          quest.tokenPlacement.marker.x = monsters[monster].x;
          quest.tokenPlacement.marker.y = monsters[monster].y;
          disableAttack.melee = false;
          selectedTarget.id = monsters[monster].id;
          selectedTarget.name = monsters[monster].name;
          break;
        } else {
          disableAttack.melee = true;
        }
      }
    } else {
      console.log('you are not in melee range');
    }
  } else if ((attackType.type === 'ranged' && (attackType.blast === false || attackType.blast === null))
    || (attackType.type === 'magic' && (attackType.blast === false || attackType.blast === null))) {
    let monsters = quest.tokenPlacement.monsters;
    for (let monster in monsters) {
      if (correctedPosition.x === monsters[monster].x && correctedPosition.y === monsters[monster].y) {
        console.log(monster, ' Selected to attack');
        quest.tokenPlacement.marker.x = monsters[monster].x;
        quest.tokenPlacement.marker.y = monsters[monster].y;
        disableAttack.ranged = false;
        disableAttack.magic = false;
        selectedTarget.id = monsters[monster].id;
        selectedTarget.name = monsters[monster].name;
        break;
      } else {
        disableAttack.ranged = true;
        disableAttack.magic = true;
      }
    }
  } else if (attackType.blast === true) {
    let tiles = quest.floor.floor_tiles;
    for (let tile in tiles) {
      if (correctedPosition.x === tiles[tile].x && correctedPosition.y === tiles[tile].y) {
        console.log('Blast Attack!');
        quest.tokenPlacement.marker.x = tiles[tile].x;
        quest.tokenPlacement.marker.y = tiles[tile].y;
        selectedTarget.id = tiles[tile];
        selectedTarget.name = tiles;
        disableAttack.ranged = false;
        disableAttack.magic = false;
        disableAttack.melee = false;
        break;
      }
    }
  }
}