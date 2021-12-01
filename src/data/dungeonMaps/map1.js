import { heroToken } from '../../player_actions/movement';
import { disableMovment } from '../../player_actions/movement';
import { Skeleton, MasterSkeleton } from '../monsterData';
import { runLoop } from '../../components/Canvas'


let skeleton1 = new Skeleton(1, 150, 150);
let skeleton2 = new Skeleton(2, 150, 250);
let masterSkeleton1 = new MasterSkeleton(1, 0, 150);


export const map1 = {
  tokenPlacement: {
    monsters: {
      skeleton1,
      skeleton2,
      masterSkeleton1
    },
    obstacles: {},
    start_area: {
      x: 100,
      y: 0
    },
    glyphs: {
      1: {
        x: 250,
        y: 150
      }

    },
    activated_glyphs: {
      // 1: {
      //   x: 250,
      //   y: 150
      // }
    },
    treasure_chests: {
      copper: {
        1: {
          x: 100,
          y: 250
        },
      },
      silver: {},
      gold: {}
    },
    items: {
      health_potions: {
        1: {
          x: 0,
          y: 100
        },
      },
      vitality_potions: {
        1: {
          x: 250,
          y: 100
        },
      },
      gold_pile: {}
    },
    marker: {
      x: -100,
      y: -100
    },
  },
  town: {
    x: 350,
    y: 0,
    h: 150,
    w: 150
  },

  mapSize: {
    width: 950,
    height: 800
  },

  floor: {
    tile_size: {
      height: 50,
      width: 50
    },
    floor_tiles: {
      1: {
        x: 100,
        y: 0
      },
      2: {
        x: 150,
        y: 0
      },
      3: {
        x: 50,
        y: 50
      },
      4: {
        x: 100,
        y: 50
      },
      5: {
        x: 150,
        y: 50
      },
      6: {
        x: 200,
        y: 50
      },
      7: {
        x: 0,
        y: 100
      },
      8: {
        x: 50,
        y: 100
      },
      9: {
        x: 100,
        y: 100
      },
      10: {
        x: 150,
        y: 100
      },
      11: {
        x: 200,
        y: 100
      },
      12: {
        x: 250,
        y: 100
      },
      13: {
        x: 0,
        y: 150
      },
      14: {
        x: 50,
        y: 150
      },
      15: {
        x: 100,
        y: 150
      },
      16: {
        x: 150,
        y: 150
      },
      17: {
        x: 200,
        y: 150
      },
      18: {
        x: 250,
        y: 150
      },
      19: {
        x: 50,
        y: 200
      },
      20: {
        x: 100,
        y: 200
      },
      21: {
        x: 150,
        y: 200
      },
      22: {
        x: 200,
        y: 200
      },
      23: {
        x: 100,
        y: 250
      },
      24: {
        x: 150,
        y: 250
      },

    }
  },

  startingMoney: { amount: 300 },
}

export function collisionDetection(runLoopX, runLoopY) {
  // if (heroToken.x < 100 && heroToken.y <= 0) {
  //   heroToken.x = previousX;
  //   heroToken.y = previousY;
  // }

  //outer walls
  //square 1
  if (heroToken.x === 100 && heroToken.y === 0) {
    disableMovment.left = true;
    disableMovment.up = true;
    disableMovment.upLeft = true;
    disableMovment.upRight = true;
  }
  //square 2
  if (heroToken.x === 150 && heroToken.y === 0) {
    disableMovment.right = true;
    disableMovment.up = true;
    disableMovment.upLeft = true;
    disableMovment.upRight = true;
  }
  //square 3
  if (heroToken.x === 50 && heroToken.y === 50) {
    disableMovment.left = true;
    disableMovment.up = true;
    disableMovment.upLeft = true;
  }
  // square 4
  if (heroToken.x === 100 && heroToken.y === 50) {
    disableMovment.upLeft = true;
  }
  //square 5
  if (heroToken.x === 150 && heroToken.y === 50) {
    disableMovment.upRight = true;
  }
  //square 6
  if (heroToken.x === 200 && heroToken.y === 50) {
    disableMovment.right = true;
    disableMovment.up = true;
    disableMovment.upRight = true;
  }
  //square 7
  if (heroToken.x === 0 && heroToken.y === 100) {
    disableMovment.left = true;
    disableMovment.up = true;
    disableMovment.upLeft = true;
    disableMovment.downLeft = true;
  }
  //square 8
  if (heroToken.x === 50 && heroToken.y === 100) {
    disableMovment.upLeft = true
  }
  //square 11
  if (heroToken.x === 200 && heroToken.y === 100) {
    disableMovment.upRight = true
  }
  //square 12
  if (heroToken.x === 250 && heroToken.y === 100) {
    disableMovment.right = true;
    disableMovment.up = true;
    disableMovment.upRight = true;
    disableMovment.downRight = true;
  }
  //square 13
  if (heroToken.x === 0 && heroToken.y === 150) {
    disableMovment.left = true;
    disableMovment.down = true;
    disableMovment.downLeft = true;
  }
  //square 14
  if (heroToken.x === 50 && heroToken.y === 150) {
    disableMovment.downLeft = true;
  }
  //square 17
  if (heroToken.x === 200 && heroToken.y === 150) {
    disableMovment.downRight = true;
  }
  // square 18
  if (heroToken.x === 250 && heroToken.y === 150) {
    disableMovment.right = true;
    disableMovment.down = true;
    disableMovment.upRight = true;
    disableMovment.downRight = true;
  }
  //square 19
  if (heroToken.x === 50 && heroToken.y === 200) {
    disableMovment.left = true;
    disableMovment.down = true;
    disableMovment.downLeft = true;
    disableMovment.upLeft = true;
  }
  //square 20
  if (heroToken.x === 100 && heroToken.y === 200) {
    disableMovment.downLeft = true;
  }
  // square 21
  if (heroToken.x === 150 && heroToken.y === 200) {
    disableMovment.downRight = true;
  }
  //square 22
  if (heroToken.x === 200 && heroToken.y === 200) {
    disableMovment.right = true;
    disableMovment.down = true;
    disableMovment.downRight = true;
  }
  //square 23
  if (heroToken.x === 100 && heroToken.y === 250) {
    disableMovment.left = true;
    disableMovment.down = true;
    disableMovment.downLeft = true;
    disableMovment.downRight = true;
  }
  // square 24
  if (heroToken.x === 150 && heroToken.y === 250) {
    disableMovment.right = true;
    disableMovment.down = true;
    disableMovment.downLeft = true;
    disableMovment.downRight = true;
  }

  //obstacle collision detection

  //monsters collision detection
  if (heroToken.x !== runLoopX || heroToken.y !== runLoopY) {
    let monsters = map1.tokenPlacement.monsters
    // console.log('for loop ran')
    for (let monster in monsters) {
      if (heroToken.x - 50 === monsters[monster].x && heroToken.y === monsters[monster].y) {
        disableMovment.left = true;

      }
      else if (heroToken.x + 50 === monsters[monster].x && heroToken.y === monsters[monster].y) {
        disableMovment.right = true;
      }
      else if ((heroToken.y - 50) === monsters[monster].y && heroToken.x === monsters[monster].x) {
        disableMovment.up = true;
      }
      else if ((heroToken.y + 50) === monsters[monster].y && heroToken.x === monsters[monster].x) {
        disableMovment.down = true;

      }
      else if (heroToken.x + 50 === monsters[monster].x && heroToken.y + 50 === monsters[monster].y) {
        disableMovment.downRight = true
      }
      else if (heroToken.x + 50 === monsters[monster].x && heroToken.y - 50 === monsters[monster].y) {
        disableMovment.upRight = true

      }
      else if (heroToken.x - 50 === monsters[monster].x && heroToken.y + 50 === monsters[monster].y) {
        disableMovment.downLeft = true
      }
      else if (heroToken.x - 50 === monsters[monster].x && heroToken.y - 50 === monsters[monster].y) {
        disableMovment.upLeft = true
      }
    }
    runLoop.x = heroToken.x;
    runLoop.y = heroToken.y
  }


  //town collision detection
  if (heroToken.x === map1.town.x + 50 && heroToken.y === map1.town.y + 50) {
    disableMovment.up = true;
    disableMovment.left = true;
    disableMovment.right = true;
    disableMovment.down = true;
    disableMovment.downRight = true
    disableMovment.upLeft = true;
    disableMovment.upRight = true;
    disableMovment.downLeft = true;
  }
  // if (heroToken.x === map1.town.x && heroToken.y === map1.town.y) {
  //   disableMovment.upRight = true;
  //   disableMovment.up = true;
  //   disableMovment.upLeft = true;
  //   disableMovment.left = true;
  //   disableMovment.downLeft = true;
  // } if (heroToken.x + 50 === map1.town.x && heroToken.y === map1.town.y) {
  //   disableMovment.upLeft = true;
  //   disableMovment.up = true;
  //   disableMovment.upRight = true;
  // } if (heroToken.x + 100 === map1.town.x && heroToken.y === map1.town.y) {
  //   disableMovment.downRight = true;
  //   disableMovment.right = true;
  //   disableMovment.upRight = true;
  //   disableMovment.up = true;
  //   disableMovment.upLeft = true;
  // } if (heroToken.x === map1.town.x && heroToken.y + 50 === map1.town.y) {
  //   disableMovment.downLeft = true;
  //   disableMovment.left = true;
  //   disableMovment.upLeft = true;
  // } if (heroToken.x + 100 === map1.town.x && heroToken.y + 50 === map1.town.y) {
  //   disableMovment.downRight = true;
  //   disableMovment.right = true;
  //   disableMovment.upRight = true;
  // } if (heroToken.x === map1.town.x && heroToken.y + 100 === map1.town.y) {
  //   disableMovment.downLeft = true;
  //   disableMovment.left = true;
  //   disableMovment.upLeft = true;
  //   disableMovment.down = true;
  // } if (heroToken.x + 50 === map1.town.x && heroToken.y + 100 === map1.town.y) {
  //   disableMovment.downLeft = true;
  //   disableMovment.down = true;
  //   disableMovment.downRight = true;
  // } if (heroToken.x + 100 === map1.town.x && heroToken.y + 100 === map1.town.y) {
  //   disableMovment.downLeft = true;
  //   disableMovment.down = true;
  //   disableMovment.downRight = true;
  //   disableMovment.right = true;
  //   disableMovment.upRight = true;
  // }


}

