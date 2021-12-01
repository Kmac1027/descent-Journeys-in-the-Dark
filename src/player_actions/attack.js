import { heroData } from "../data/heroData";
import { diceSideData } from "../data/diceSideData";
import { shopItems } from "../data/items/shopItems";


export const disableAttack = {
  melee: true,
  ranged: true,
  magic: true,
};

export const attackType = { type: null, blast: null };

export function attack(
  checkSelectedTarget,
  chosenQuest,
  heroToken,
  damage,
  range,
  surge,
  pierce,
  blast,
  selectedWeapon,
  offHand,
  selectedTarget,
  attackOn,
  attackCardsActive,
  showDiceRoll
) {
  if (attackType.blast === false || attackType.blast === null) {
    if (checkSelectedTarget.id === null) {
      alert("You have not selected a valid target");
    } else {
      let selectedMonster =
        chosenQuest.tokenPlacement.monsters[
        selectedTarget.name + selectedTarget.id.toString()
        ];

      if (selectedWeapon.type === "melee") {
        let monsterArmor = selectedMonster.base_armor - pierce;
        if (monsterArmor <= 0) {
          monsterArmor = 0;
        }
        let hitAmount = damage - monsterArmor;
        selectedMonster.max_wounds -= hitAmount;
      }

      if (selectedWeapon.type === "ranged" || selectedWeapon.type === "magic") {
        let rangeNeeded;
        let x = Math.abs(heroToken.x - selectedMonster.x) / 50;
        let y = Math.abs(heroToken.y - selectedMonster.y) / 50;
        // console.log('x: ', x, 'y: ', y);
        if (x >= y) {
          rangeNeeded = x;
        } else {
          rangeNeeded = y;
        }
        if (range < rangeNeeded) {
          alert("Attack Missed, Not Enough Range");
        } else {
          let monsterArmor = selectedMonster.base_armor - pierce;
          if (monsterArmor <= 0) {
            monsterArmor = 0;
          }
          let hitAmount = damage - monsterArmor;
          selectedMonster.max_wounds -= hitAmount;
        }
        // console.log(rangeNeeded)
      }

      if (selectedMonster.max_wounds <= 0) {
        delete chosenQuest.tokenPlacement.monsters[
          selectedTarget.name + selectedTarget.id.toString()
        ];
      }
      selectedTarget.name = null;
      selectedTarget.id = null;
      // console.log(selectedWeapon)
      // console.log(offHand)
      attackOn();
      attackCardsActive();
      // showDiceRoll()
    }
  }
  else if (attackType.blast === true) {
    let monsters = chosenQuest.tokenPlacement.monsters;
    let rangeNeeded;
    let x = Math.abs(heroToken.x - selectedTarget.id.x) / 50;
    let y = Math.abs(heroToken.y - selectedTarget.id.y) / 50;
    if (x >= y) {
      rangeNeeded = x;
    } else {
      rangeNeeded = y;
    }
    if (range < rangeNeeded) {
      alert("Attack Missed, Not Enough Range");
    } else {
      if (blast <= 0) {
        for (let monster in monsters) {
          if (
            selectedTarget.id.x === monsters[monster].x &&
            selectedTarget.id.y === monsters[monster].y
          ) {
            let hitMonster = monsters[monster];
            let monsterArmor = hitMonster.base_armor - pierce;
            if (monsterArmor <= 0) {
              monsterArmor = 0;
            }
            let hitAmount = damage - monsterArmor;
            hitMonster.max_wounds -= hitAmount;
            if (hitMonster.max_wounds <= 0) {
              delete chosenQuest.tokenPlacement.monsters[hitMonster.name + hitMonster.id.toString()];
            }
          }
        }
      } else {
        let effectedTiles = [{ x: selectedTarget.id.x, y: selectedTarget.id.y }]
        let effectedMonsters = []
        let target = blast * 50
        for (let i = 50; i <= target; i = i + 50) {
          let x = selectedTarget.id.x + i
          let y = selectedTarget.id.y
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x
          y = selectedTarget.id.y + i
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x + i
          y = selectedTarget.id.y + i
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x - i
          y = selectedTarget.id.y
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x
          y = selectedTarget.id.y - i
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x - i
          y = selectedTarget.id.y - i
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x + i
          y = selectedTarget.id.y - i
          effectedTiles.push({ 'x': x, 'y': y })
          x = selectedTarget.id.x - i
          y = selectedTarget.id.y + i
          effectedTiles.push({ 'x': x, 'y': y })
        }
        for (let monster in monsters) {
          for (let i = 0; i < effectedTiles.length; i++) {
            if (monsters[monster].x === effectedTiles[i].x && monsters[monster].y === effectedTiles[i].y) {
              effectedMonsters.push(monsters[monster])
            }
          }
        }
        console.log(effectedMonsters)
        for (let i = 0; i < effectedMonsters.length; i++) {
          let effectedMonster = effectedMonsters[i];
          console.log(effectedMonster)
          let monsterArmor = effectedMonster.base_armor - pierce;
          if (monsterArmor <= 0) {
            monsterArmor = 0;
          }
          let hitAmount = damage - monsterArmor;
          effectedMonster.max_wounds -= hitAmount;
          if (effectedMonster.max_wounds <= 0) {
            delete chosenQuest.tokenPlacement.monsters[effectedMonster.name + effectedMonster.id.toString()];
          }
        }
      }
    }
    selectedTarget.name = null;
    selectedTarget.id = null;
    attackType.blast = false;
    // console.log(selectedWeapon)
    // console.log(offHand)
    attackOn();
    attackCardsActive();
    // showDiceRoll()

  }
}


