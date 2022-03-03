import { useEffect, useState } from 'react';
import { heroToken } from '../player_actions/movement';
import { inRange } from './Player';
// import { monsterData } from '../data/monsterData.js';
let obstacleArray;
let mapFloorArray;
let openSquareArray;
let activeMonsterArray = [];


function Overlord({ chosenHero, chosenQuest, turn, setTurn, currentArmor, currentHealth, setCurrentHealth }) {
  const [runObstacle, setRunObstacle] = useState(true);
  // const [nextMonsterInArray, setNextMonsterInArray] = useState(true)

  function obstacleArrayFillCheck() {
    // console.log('array check ran')
    if (runObstacle === true) {
      setRunObstacle(false);
    } else {
      setRunObstacle(true);
    }
  }

  useEffect(() => {
    // console.log('Filled openSquare Array')
    obstacleArray = [];
    mapFloorArray = [];
    openSquareArray = [];

    let monsters = chosenQuest.tokenPlacement.monsters;
    let mapFloor = chosenQuest.floor.floor_tiles;
    let water = chosenQuest.tokenPlacement.obstacles.water;
    let rubble = chosenQuest.tokenPlacement.obstacles.rubble;
    let pits = chosenQuest.tokenPlacement.obstacles.pits;

    for (let tile in mapFloor) {
      mapFloorArray.push(mapFloor[tile]);
    }

    if (water !== {}) {
      for (let key in water) {
        obstacleArray.push(water[key]);
      }
    }
    if (rubble !== {}) {
      for (let key in rubble) {
        obstacleArray.push(rubble[key]);
      }
    }
    if (pits !== {}) {
      for (let key in pits) {
        obstacleArray.push(pits[key]);
      }
    }
    if (monsters !== {}) {
      for (let key in monsters) {
        let monsterPositionObj = { x: monsters[key].x, y: monsters[key].y };
        obstacleArray.push(monsterPositionObj);
      }
    }
    // console.log('mapfloorarray ', mapFloorArray)
    // console.log('obstaclearray ', obstacleArray)
    for (let i = 0; i < obstacleArray.length; i++) {
      for (let j = 0; j < mapFloorArray.length; j++) {
        if (obstacleArray[i].x === mapFloorArray[j].x && obstacleArray[i].y === mapFloorArray[j].y) {
          mapFloorArray.splice(mapFloorArray.indexOf(mapFloorArray[j]), 1);
        }

      }
    }
    openSquareArray = mapFloorArray;
    // console.log('open square array', openSquareArray)
    // console.log('mapfloorarray ', mapFloorArray)
  }, [turn, runObstacle]);


  useEffect(() => {
    if (heroToken.x === chosenQuest.town.x + 50 &&
      heroToken.y === chosenQuest.town.y + 50) {
      console.log('Player in town');
      setTurn("player");
    } else {
      overLordsTurn().then(setTurn("player"));
    }

  }, []);



  async function overLordsTurn() {
    let monsters = chosenQuest.tokenPlacement.monsters;

    if (turn === 'overlord') {
      activeMonsterArray = [];
      alert('overlords turn');

      for (let monster in monsters) {
        if (monsters[monster].active === true) {
          if (monsters[monster].numberOfAttacks <= 0) {
            monsters[monster].numberOfAttacks = 1;
          }
          activeMonsterArray.push(monsters[monster]);
        }
      }
      for (let i = 0; i < activeMonsterArray.length; i++) {
        monsterAttack(activeMonsterArray[i], activeMonsterArray[i].speed);
      }

    }
  }

  //Attack function for Overlord Monsters
  async function monsterAttack(monster, monsterMovement) {
    let distance;
    let attackAmount;
    let heroInMeleeRange = inRange(monster, heroToken);

    let Xdist = Math.abs(monster.x - heroToken.x) / 50;
    let Ydist = Math.abs(monster.y - heroToken.y) / 50;
    if (Xdist >= Ydist) {
      distance = Xdist;
    } else {
      distance = Ydist;
    }
    // console.log(distance)
    //melee attack
    if (monster.class === 'melee') {
      if (heroInMeleeRange === false) {
        getInMeleeRange(monster, monsterMovement);

      } else {
        if (monster.numberOfAttacks > 0) {
          if (monster.type = "normal") {
            attackAmount = Math.abs(Math.floor(Math.random() * 7));
          } else if (monster.type = "master") {
            attackAmount = Math.abs(Math.floor(Math.random() * 7) + Math.floor(Math.random() * 2));
          }
          let hitAmount = attackAmount - currentArmor;
          if (hitAmount <= 0) {
            hitAmount = 0;
          }
          setCurrentHealth(currentHealth => currentHealth - hitAmount);
          monster.numberOfAttacks -= 1;
          alert(`${monster.name}${monster.id} attacks you for ${hitAmount}`);
        } else {
          console.log(`${monster.name}${monster.id} out of attacks`);
        }
      }
    }

    if (monster.class === 'ranged' || monster.class === 'magic') {
      if (heroInMeleeRange === true) {
        getInRange(monster, monsterMovement);
      } else {
        let range = Math.abs(Math.floor(Math.random() * 10));
        if (range >= distance) {
          if (monster.numberOfAttacks > 0) {
            if (monster.type = "normal") {
              attackAmount = Math.abs(Math.floor(Math.random() * 7));
            } else if (monster.type = "master") {
              attackAmount = Math.abs(Math.floor(Math.random() * 7) + Math.floor(Math.random() * 2));
            }
            let hitAmount = attackAmount - currentArmor;
            if (hitAmount <= 0) {
              hitAmount = 0;
            }
            setCurrentHealth(currentHealth => currentHealth - hitAmount);
            monster.numberOfAttacks -= 1;
            alert(`${monster.name}${monster.id} attacks you for ${hitAmount}`);
          } else {
            console.log(`${monster.name}${monster.id} out of attacks`);
          }
        } else {
          alert(`${monster.name}${monster.id} did not have enough range`);
        }
      }

    }

    // if (monster.class === 'magic') {
    //   // console.log(`${monster.class}`)

    // }

  }

  async function getInMeleeRange(monster, monsterMovement) {
    obstacleArrayFillCheck();
    let heroInMeleeRange = inRange(monster, heroToken);
    if (heroInMeleeRange === true) {
      monsterAttack(monster, monsterMovement);
    } else if (heroInMeleeRange === false && monsterMovement > 0) {

      if (monster.x > heroToken.x + 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.x - 50 === openSquareArray[i].x && monster.y === openSquareArray[i].y) {
            monster.x -= 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          }
          else if (monster.x - 50 === openSquareArray[i].x && monster.y - 50 === openSquareArray[i].y) {
            monster.x -= 50;
            monster.y -= 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.x - 50 === openSquareArray[i].x && monster.y + 50 === openSquareArray[i].y) {
            monster.x -= 50;
            monster.y += 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          }
        }
      }
      else if (monster.x < heroToken.x - 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.x + 50 === openSquareArray[i].x && monster.y === openSquareArray[i].y) {
            monster.x += 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.x + 50 === openSquareArray[i].x && monster.y + 50 === openSquareArray[i].y) {
            monster.x += 50;
            monster.y += 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.x + 50 === openSquareArray[i].x && monster.y - 50 === openSquareArray[i].y) {
            monster.x += 50;
            monster.y -= 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          }
        }
      }
      else if (monster.y > heroToken.y + 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.y - 50 === openSquareArray[i].y && monster.x === openSquareArray[i].x) {
            monster.y -= 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.y - 50 === openSquareArray[i].y && monster.x + 50 === openSquareArray[i].x) {
            monster.y -= 50;
            monster.x += 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.y - 50 === openSquareArray[i].y && monster.x - 50 === openSquareArray[i].x) {
            monster.y -= 50;
            monster.x -= 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          }
        }
      }
      else if (monster.y < heroToken.y - 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.y + 50 === openSquareArray[i].y && monster.x === openSquareArray[i].x) {
            monster.y += 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.y + 50 === openSquareArray[i].y && monster.x + 50 === openSquareArray[i].x) {
            monster.y += 50;
            monster.x += 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          } else if (monster.y + 50 === openSquareArray[i].y && monster.x - 50 === openSquareArray[i].x) {
            monster.y += 50;
            monster.x -= 50;
            monsterMovement -= 1;
            obstacleArrayFillCheck();
            // setTimeout(() => { getInMeleeRange(monster, monsterMovement); }, 1000);
            getInMeleeRange(monster, monsterMovement);
            break;
          }
        }
      }

    }
    else if (monsterMovement <= 0) {
      console.log(`${monster.name}${monster.id} out of movement`);
    }
  }


  //makes magic and ranged monsters move away from hero if they are right next to them
  function getInRange(monster, monsterMovement) {
    obstacleArrayFillCheck();
    let heroInMeleeRange = inRange(monster, heroToken);
    if (heroInMeleeRange === false) {
      monsterAttack(monster);
    } else {
      if (monster.x > heroToken.x && !monsterMovement <= 0) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.x + 50 === openSquareArray[i].x && monster.y === openSquareArray[i].y) {
            monster.x += 50;
            monsterMovement -= 1;
            getInRange(monster, monsterMovement);
            break;
          }
        }
      } else if (monster.x < heroToken.x && !monsterMovement <= 0) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.x - 50 === openSquareArray[i].x && monster.y === openSquareArray[i].y) {
            monster.x -= 50;
            monsterMovement -= 1;
            getInRange(monster, monsterMovement);
            break;
          }
        }
      } else if (monster.y > heroToken.y && !monsterMovement <= 0) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.y + 50 === openSquareArray[i].y && monster.x === openSquareArray[i].x) {
            monster.y += 50;
            monsterMovement -= 1;
            getInRange(monster, monsterMovement);
            break;
          }
        }
      } else if (monster.y < heroToken.y && !monsterMovement <= 0) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.y - 50 === openSquareArray[i].y && monster.x === openSquareArray[i].x) {
            monster.y -= 50;
            monsterMovement -= 1;
            getInRange(monster, monsterMovement);
            break;
          }
        }
      }
    }
  }

  return (
    <>
    </>
  );
}

export default Overlord;


