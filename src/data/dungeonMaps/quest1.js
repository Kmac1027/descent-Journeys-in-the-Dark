import { heroToken } from '../../player_actions/movement';
// import { monsterData } from '../../data/monsterData';
import { disableMovment } from '../../player_actions/movement';
import { Skeleton, MasterSkeleton } from '../monsterData';
import { runLoop } from '../../components/Canvas'

export const quest1 = {
  tokenPlacement: {
    monsters: {},
    clue_token: {},
    obstacles: {
      water: {},
      rubble: {},
      pit: {}
    },
    start_area: {
      x: 0,
      y: 1000
    },
    doors: {
      normal: {},
      yellow: {},
      blue: {},
      red: {}
    },
    rune_keys: {
      yellow: {},
      blue: {},
      red: {}
    },
    glyphs: {},
    activated_glyphs: {},
    treasure_chests: {
      copper: {},
      silver: {},
      gold: {}
    },
    items: {
      health_potions: {},
      vitality_potions: {},
      gold_pile: {}
    },
    stairs: {},
  },
  town: {
    x: 350,
    y: 0,
    h: 150,
    w: 150
  },

  mapSize: {
    width: 1100,
    height: 1300
  },

  map1Floor: {
    tile_size: {
      height: 50,
      width: 50
    },
    floor_tiles: {
      //area 4
      1: {
        x: 600,
        y: 0
      },
      2: {
        x: 650,
        y: 0
      },
      3: {
        x: 500,
        y: 50
      },
      4: {
        x: 550,
        y: 50
      },
      5: {
        x: 600,
        y: 50
      },
      6: {
        x: 650,
        y: 50
      },
      7: {
        x: 700,
        y: 50
      },
      8: {
        x: 750,
        y: 50
      },
      9: {
        x: 450,
        y: 100
      },
      10: {
        x: 500,
        y: 100
      },
      11: {
        x: 550,
        y: 100
      },
      12: {
        x: 600,
        y: 100
      },
      13: {
        x: 650,
        y: 100
      },
      14: {
        x: 700,
        y: 100
      },
      15: {
        x: 750,
        y: 100
      },
      16: {
        x: 800,
        y: 100
      },
      17: {
        x: 450,
        y: 150
      },
      18: {
        x: 500,
        y: 150
      },
      19: {
        x: 550,
        y: 150
      },
      20: {
        x: 600,
        y: 150
      },
      21: {
        x: 650,
        y: 150
      },
      22: {
        x: 700,
        y: 150
      },
      23: {
        x: 750,
        y: 150
      },
      24: {
        x: 800,
        y: 150
      },
      25: {
        x: 500,
        y: 200
      },
      26: {
        x: 550,
        y: 200
      },
      27: {
        x: 600,
        y: 200
      },
      28: {
        x: 650,
        y: 200
      },
      29: {
        x: 700,
        y: 200
      },
      30: {
        x: 750,
        y: 200
      },
      31: {
        x: 500,
        y: 250
      },
      32: {
        x: 550,
        y: 250
      },
      33: {
        x: 600,
        y: 250
      },
      34: {
        x: 650,
        y: 250
      },
      35: {
        x: 700,
        y: 250
      },
      36: {
        x: 750,
        y: 250
      },
      37: {
        x: 600,
        y: 300
      },
      38: {
        x: 650,
        y: 300
      },
      39: {
        x: 600,
        y: 350
      },
      40: {
        x: 650,
        y: 350
      },
      //area 3
      41: {
        x: 600,
        y: 400
      },
      42: {
        x: 650,
        y: 400
      },
      43: {
        x: 600,
        y: 450
      },
      44: {
        x: 650,
        y: 450
      },
      45: {
        x: 550,
        y: 500
      },
      46: {
        x: 600,
        y: 500
      },
      47: {
        x: 650,
        y: 500
      },
      48: {
        x: 300,
        y: 550
      },
      49: {
        x: 350,
        y: 550
      },
      50: {
        x: 400,
        y: 550
      },
      51: {
        x: 450,
        y: 550
      },
      52: {
        x: 500,
        y: 550
      },
      53: {
        x: 550,
        y: 550
      },
      54: {
        x: 600,
        y: 550
      },
      55: {
        x: 650,
        y: 550
      },
      56: {
        x: 300,
        y: 600
      },
      57: {
        x: 350,
        y: 600
      },
      58: {
        x: 400,
        y: 600
      },
      59: {
        x: 450,
        y: 600
      },
      60: {
        x: 500,
        y: 600
      },
      61: {
        x: 550,
        y: 600
      },
      62: {
        x: 600,
        y: 600
      },
      63: {
        x: 650,
        y: 600
      },
      64: {
        x: 550,
        y: 650
      },
      65: {
        x: 600,
        y: 650
      },
      66: {
        x: 650,
        y: 650
      },
      67: {
        x: 600,
        y: 700
      },
      68: {
        x: 650,
        y: 700
      },
      69: {
        x: 600,
        y: 750
      },
      70: {
        x: 650,
        y: 750
      },
      //area 1
      71: {
        x: 600,
        y: 800
      },
      72: {
        x: 650,
        y: 800
      },
      73: {
        x: 600,
        y: 850
      },
      74: {
        x: 650,
        y: 850
      },
      75: {
        x: 350,
        y: 900
      },
      76: {
        x: 400,
        y: 900
      },
      77: {
        x: 550,
        y: 900
      },
      78: {
        x: 600,
        y: 900
      },
      79: {
        x: 650,
        y: 900
      },
      80: {
        x: 350,
        y: 950
      },
      81: {
        x: 400,
        y: 950
      },
      82: {
        x: 450,
        y: 950
      },
      83: {
        x: 500,
        y: 950
      },
      84: {
        x: 550,
        y: 950
      },
      85: {
        x: 600,
        y: 950
      },
      86: {
        x: 650,
        y: 950
      },
      87: {
        x: 350,
        y: 1000
      },
      88: {
        x: 400,
        y: 1000
      },
      89: {
        x: 450,
        y: 1000
      },
      90: {
        x: 500,
        y: 1000
      },
      91: {
        x: 550,
        y: 1000
      },
      92: {
        x: 600,
        y: 1000
      },
      93: {
        x: 650,
        y: 1000
      },
      94: {
        x: 350,
        y: 1050
      },
      95: {
        x: 400,
        y: 1050
      },
      96: {
        x: 550,
        y: 1050
      },
      97: {
        x: 600,
        y: 1050
      },
      98: {
        x: 650,
        y: 1050
      },
      99: {
        x: 600,
        y: 1100
      },
      100: {
        x: 650,
        y: 1100
      },
      //area 1(part 2)

    }
  },

  startingMoney: { amount: 300 },
}

export function collisionDetection(runLoopX, runLoopY) {
  //   // if (heroToken.x < 100 && heroToken.y <= 0) {
  //   //   heroToken.x = previousX;
  //   //   heroToken.y = previousY;
  //   // }

  //   //outer walls
  //   //square 1
  //   if (heroToken.x === 100 && heroToken.y === 0) {
  //     disableMovment.left = true;
  //     disableMovment.up = true;
  //     disableMovment.upLeft = true;
  //     disableMovment.upRight = true;
  //   }
  //   //square 2
  //   if (heroToken.x === 150 && heroToken.y === 0) {
  //     disableMovment.right = true;
  //     disableMovment.up = true;
  //     disableMovment.upLeft = true;
  //     disableMovment.upRight = true;
  //   }
  //   //square 3
  //   if (heroToken.x === 50 && heroToken.y === 50) {
  //     disableMovment.left = true;
  //     disableMovment.up = true;
  //     disableMovment.upLeft = true;
  //   }
  //   // square 4
  //   if (heroToken.x === 100 && heroToken.y === 50) {
  //     disableMovment.upLeft = true;
  //   }
  //   //square 5
  //   if (heroToken.x === 150 && heroToken.y === 50) {
  //     disableMovment.upRight = true;
  //   }
  //   //square 6
  //   if (heroToken.x === 200 && heroToken.y === 50) {
  //     disableMovment.right = true;
  //     disableMovment.up = true;
  //     disableMovment.upRight = true;
  //   }
  //   //square 7
  //   if (heroToken.x === 0 && heroToken.y === 100) {
  //     disableMovment.left = true;
  //     disableMovment.up = true;
  //     disableMovment.upLeft = true;
  //     disableMovment.downLeft = true;
  //   }
  //   //square 8
  //   if (heroToken.x === 50 && heroToken.y === 100) {
  //     disableMovment.upLeft = true
  //   }
  //   //square 11
  //   if (heroToken.x === 200 && heroToken.y === 100) {
  //     disableMovment.upRight = true
  //   }
  //   //square 12
  //   if (heroToken.x === 250 && heroToken.y === 100) {
  //     disableMovment.right = true;
  //     disableMovment.up = true;
  //     disableMovment.upRight = true;
  //     disableMovment.downRight = true;
  //   }
  //   //square 13
  //   if (heroToken.x === 0 && heroToken.y === 150) {
  //     disableMovment.left = true;
  //     disableMovment.down = true;
  //     disableMovment.downLeft = true;
  //   }
  //   //square 14
  //   if (heroToken.x === 50 && heroToken.y === 150) {
  //     disableMovment.downLeft = true;
  //   }
  //   //square 17
  //   if (heroToken.x === 200 && heroToken.y === 150) {
  //     disableMovment.downRight = true;
  //   }
  //   // square 18
  //   if (heroToken.x === 250 && heroToken.y === 150) {
  //     disableMovment.right = true;
  //     disableMovment.down = true;
  //     disableMovment.upRight = true;
  //     disableMovment.downRight = true;
  //   }
  //   //square 19
  //   if (heroToken.x === 50 && heroToken.y === 200) {
  //     disableMovment.left = true;
  //     disableMovment.down = true;
  //     disableMovment.downLeft = true;
  //     disableMovment.upLeft = true;
  //   }
  //   //square 20
  //   if (heroToken.x === 100 && heroToken.y === 200) {
  //     disableMovment.downLeft = true;
  //   }
  //   // square 21
  //   if (heroToken.x === 150 && heroToken.y === 200) {
  //     disableMovment.downRight = true;
  //   }
  //   //square 22
  //   if (heroToken.x === 200 && heroToken.y === 200) {
  //     disableMovment.right = true;
  //     disableMovment.down = true;
  //     disableMovment.downRight = true;
  //   }
  //   //square 23
  //   if (heroToken.x === 100 && heroToken.y === 250) {
  //     disableMovment.left = true;
  //     disableMovment.down = true;
  //     disableMovment.downLeft = true;
  //     disableMovment.downRight = true;
  //   }
  //   // square 24
  //   if (heroToken.x === 150 && heroToken.y === 250) {
  //     disableMovment.right = true;
  //     disableMovment.down = true;
  //     disableMovment.downLeft = true;
  //     disableMovment.downRight = true;
  //   }

  //obstacle collision detection

  //monsters collision detection
  if (heroToken.x !== runLoopX || heroToken.y !== runLoopY) {
    let monsters = quest1.tokenPlacement.monsters
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
  // if (heroToken.x === map1.town.x + 50 && heroToken.y === map1.town.y + 50) {
  //   disableMovment.up = true;
  //   disableMovment.left = true;
  //   disableMovment.right = true;
  //   disableMovment.down = true;
  //   disableMovment.downRight = true
  //   disableMovment.upLeft = true;
  //   disableMovment.upRight = true;
  //   disableMovment.downLeft = true;
  // }


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

