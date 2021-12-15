import { useEffect, useState } from 'react'
import { heroToken } from '../player_actions/movement'
import { inRange } from './Player'
// import { monsterData } from '../data/monsterData.js';
let obstacleArray
let mapFloorArray;
let openSquareArray


function Overlord({ chosenHero, chosenQuest, turn, setTurn }) {
  const [runObstacle, setRunObstacle] = useState(true)

  function obstacleArrayFillCheck() {
    console.log('array check ran')
    if (runObstacle === true) {
      setRunObstacle(false)
    } else {
      setRunObstacle(true)
    }
  }
  useEffect(() => {
    console.log('Fill Array Use Effect Ran')
    obstacleArray = []
    mapFloorArray = []
    openSquareArray = []

    let monsters = chosenQuest.tokenPlacement.monsters
    let mapFloor = chosenQuest.floor.floor_tiles
    let water = chosenQuest.tokenPlacement.obstacles.water
    let rubble = chosenQuest.tokenPlacement.obstacles.rubble
    let pits = chosenQuest.tokenPlacement.obstacles.pits

    for (let tile in mapFloor) {
      mapFloorArray.push(mapFloor[tile])
    }

    if (water !== {}) {
      for (let key in water) {
        obstacleArray.push(water[key])
      }
    }
    if (rubble !== {}) {
      for (let key in rubble) {
        obstacleArray.push(rubble[key])
      }
    }
    if (pits !== {}) {
      for (let key in pits) {
        obstacleArray.push(pits[key])

      }
    }
    if (monsters !== {}) {
      for (let key in monsters) {
        let monsterPositionObj = { x: monsters[key].x, y: monsters[key].y }
        obstacleArray.push(monsterPositionObj)
      }
    }
    // console.log('mapfloorarray ', mapFloorArray)
    // console.log('obstaclearray ', obstacleArray)
    for (let i = 0; i < obstacleArray.length; i++) {
      for (let j = 0; j < mapFloorArray.length; j++) {
        if (obstacleArray[i].x === mapFloorArray[j].x && obstacleArray[i].y === mapFloorArray[j].y) {
          mapFloorArray.splice(mapFloorArray.indexOf(mapFloorArray[j]), 1)
        }

      }
    }
    openSquareArray = mapFloorArray
    // console.log('open square array', openSquareArray)
    // console.log('mapfloorarray ', mapFloorArray)
  }, [turn, runObstacle])




  useEffect(() => {
    let monsters = chosenQuest.tokenPlacement.monsters
    if (turn === 'overlord') {
      alert('overlords turn')
      // setTimeout(() => { setTurn('player') }, 2000)
      //overlord gains threat tokens
      //overlord draws cards
      //overlord plays cards
      //overlord attacks
      for (let monster in monsters) {
        if (monsters[monster].active === true) {
          let monsterMovement = monsters[monster].speed
          monsterAttack(monsters[monster], monsterMovement)
        }
      }

    }
  }, [turn])


  //Attack function for Overlord Monsters
  function monsterAttack(monster, monsterMovement) {
    let distance
    let heroInMeleeRange = inRange(monster, heroToken)

    let Xdist = Math.abs(monster.x - heroToken.x) / 50
    let Ydist = Math.abs(monster.y - heroToken.y) / 50
    if (Xdist >= Ydist) {
      distance = Xdist
    } else {
      distance = Ydist
    }



    //melee attack
    if (monster.class === 'melee') {
      if (heroInMeleeRange === false) {
        getInMeleeRange(monster, monsterMovement)
      } else {
        console.log(`${monster.name} Attacks with a Melee Attack`)
      }
    }

    // if (monster.class === 'ranged') {
    //   console.log(`${monster.class}`)
    // }

    // if (monster.class === 'magic') {
    //   console.log(`${monster.class}`)
    // }

  }

  function getInMeleeRange(monster, monsterMovement) {
    obstacleArrayFillCheck()
    let heroInMeleeRange = inRange(monster, heroToken)
    if (heroInMeleeRange === true) {
      monsterAttack(monster)
    } else if (heroInMeleeRange === false && monsterMovement !== 0) {

      if (monster.x > heroToken.x + 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.x - 50 === openSquareArray[i].x && monster.y === openSquareArray[i].y) {
            monster.x -= 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } else if (monster.x - 50 === openSquareArray[i].x && monster.y + 50 === openSquareArray[i].y) {
            monster.x -= 50
            monster.y += 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } else if (monster.x - 50 === openSquareArray[i].x && monster.y - 50 === openSquareArray[i].y) {
            monster.x -= 50
            monster.y -= 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          }
        }
      } else if (monster.x < heroToken.x - 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.x + 50 === openSquareArray[i].x && monster.y === openSquareArray[i].y) {
            monster.x += 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } if (monster.x + 50 === openSquareArray[i].x && monster.y + 50 === openSquareArray[i].y) {
            monster.x += 50
            monster.y += 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } if (monster.x + 50 === openSquareArray[i].x && monster.y - 50 === openSquareArray[i].y) {
            monster.x -= 50
            monster.y -= 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          }
        }
      }
      if (monster.y > heroToken.y + 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.y - 50 === openSquareArray[i].y && monster.x === openSquareArray[i].x) {
            monster.y -= 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } else if (monster.y - 50 === openSquareArray[i].y && monster.x + 50 === openSquareArray[i].x) {
            monster.y -= 50
            monster.x += 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } else if (monster.y - 50 === openSquareArray[i].y && monster.x - 50 === openSquareArray[i].x) {
            monster.y -= 50
            monster.x -= 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          }
        }
      }
      else if (monster.y < heroToken.y - 50) {
        for (let i = 0; i < openSquareArray.length; i++) {
          if (monster.y + 50 === openSquareArray[i].y && monster.x === openSquareArray[i].x) {
            monster.y += 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } else if (monster.y + 50 === openSquareArray[i].y && monster.x + 50 === openSquareArray[i].x) {
            monster.y += 50
            monster.x += 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          } else if (monster.y - 50 === openSquareArray[i].y && monster.x - 50 === openSquareArray[i].x) {
            monster.y -= 50
            monster.x -= 50
            monsterMovement -= 1
            getInMeleeRange(monster, monsterMovement)
            break
          }
        }
      }

    } if (monsterMovement <= 0) {
      console.log(`${monster} out of movement`)
    }
  }

  return (
    <>
    </>
  );
}

export default Overlord;


