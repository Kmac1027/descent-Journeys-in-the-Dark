import { heroToken, previousPosition } from '../../player_actions/movement';
// import { monsterData } from '../../data/monsterData';
import { disableMovment } from '../../player_actions/movement';
import { Skeleton, MasterSkeleton } from '../monsterData';
import { runLoop } from '../../components/Canvas'

let skeleton1 = new Skeleton(1, 450, 1050);

export const quest1 = {
  name: 'Quest 1: Into the Dark',
  tokenPlacement: {
    monsters: {
      skeleton1
    },
    clue_token: {},
    obstacles: {
      water: {},
      rubble: {},
      pit: {}
    },
    start_area: {
      x: 0,
      y: 1050
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
    marker: {
      x: -100,
      y: -100
    },
  },
  town: {
    x: 0,
    y: 1150,
    h: 150,
    w: 150
  },

  mapSize: {
    width: 1100,
    height: 1300
  },

  floor: {
    tile_size: {
      height: 50,
      width: 50
    },
    floor_tiles: {
      //fix
      300: {
        x: 500,
        y: 0
      },
      400: {
        x: 550,
        y: 0
      },
      500: {
        x: 600,
        y: 0
      },
      600: {
        x: 650,
        y: 0
      },
      700: {
        x: 700,
        y: 0
      },
      800: {
        x: 750,
        y: 0
      },

      //area 4
      1: {
        x: 600,
        y: -50
      },
      2: {
        x: 650,
        y: -50
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
      101: {
        x: 250,
        y: 750
      },
      102: {
        x: 300,
        y: 750
      },
      103: {
        x: 250,
        y: 800
      },
      104: {
        x: 300,
        y: 800
      },
      105: {
        x: 250,
        y: 850
      },
      106: {
        x: 300,
        y: 850
      },
      107: {
        x: 150,
        y: 900
      },
      108: {
        x: 200,
        y: 900
      },
      109: {
        x: 250,
        y: 900
      },
      110: {
        x: 300,
        y: 900
      },
      111: {
        x: 0,
        y: 950
      },
      112: {
        x: 50,
        y: 950
      },
      113: {
        x: 100,
        y: 950
      },
      114: {
        x: 150,
        y: 950
      },
      115: {
        x: 200,
        y: 950
      },
      116: {
        x: 250,
        y: 950
      },
      117: {
        x: 300,
        y: 950
      },
      118: {
        x: 0,
        y: 1000
      },
      119: {
        x: 50,
        y: 1000
      },
      120: {
        x: 100,
        y: 1000
      },
      121: {
        x: 150,
        y: 1000
      },
      122: {
        x: 200,
        y: 1000
      },
      123: {
        x: 250,
        y: 1000
      },
      124: {
        x: 300,
        y: 1000
      },
      125: {
        x: 150,
        y: 1050
      },
      126: {
        x: 200,
        y: 1050
      },
      127: {
        x: 250,
        y: 1050
      },
      128: {
        x: 300,
        y: 1050
      },
      129: {
        x: 250,
        y: 1100
      },
      130: {
        x: 300,
        y: 1100
      },
      131: {
        x: 250,
        y: 1150
      },
      132: {
        x: 300,
        y: 1150
      },
      133: {
        x: 250,
        y: 1200
      },
      134: {
        x: 300,
        y: 1200
      },

      //Area 2
      135: {
        x: 900,
        y: 450
      },
      136: {
        x: 950,
        y: 450
      },
      137: {
        x: 700,
        y: 500
      },
      138: {
        x: 850,
        y: 500
      },
      139: {
        x: 900,
        y: 500
      },
      140: {
        x: 950,
        y: 500
      },
      141: {
        x: 1000,
        y: 500
      },
      142: {
        x: 700,
        y: 550
      },
      143: {
        x: 750,
        y: 550
      },
      144: {
        x: 800,
        y: 550
      },
      145: {
        x: 850,
        y: 550
      },
      146: {
        x: 900,
        y: 550
      },
      147: {
        x: 950,
        y: 550
      },
      148: {
        x: 1000,
        y: 550
      },
      149: {
        x: 1050,
        y: 550
      },
      150: {
        x: 700,
        y: 600
      },
      151: {
        x: 750,
        y: 600
      },
      152: {
        x: 800,
        y: 600
      },
      153: {
        x: 850,
        y: 600
      },
      154: {
        x: 900,
        y: 600
      },
      155: {
        x: 950,
        y: 600
      },
      156: {
        x: 1000,
        y: 600
      },
      157: {
        x: 1050,
        y: 600
      },
      158: {
        x: 700,
        y: 650
      },
      159: {
        x: 850,
        y: 650
      },
      160: {
        x: 900,
        y: 650
      },
      161: {
        x: 950,
        y: 650
      },
      162: {
        x: 1000,
        y: 650
      },
      163: {
        x: 900,
        y: 700
      },
      164: {
        x: 950,
        y: 700
      },
      165: {
        x: 900,
        y: 750
      },
      166: {
        x: 950,
        y: 750
      },
      167: {
        x: 900,
        y: 800
      },
      168: {
        x: 950,
        y: 800
      },
      169: {
        x: 900,
        y: 850
      },
      170: {
        x: 950,
        y: 850
      },
      171: {
        x: 850,
        y: 900
      },
      172: {
        x: 900,
        y: 900
      },
      173: {
        x: 950,
        y: 900
      },
      174: {
        x: 1000,
        y: 900
      },

      //Area 2(part 2)
      175: {
        x: 700,
        y: 900
      },
      176: {
        x: 700,
        y: 950
      },
      177: {
        x: 750,
        y: 950
      },
      178: {
        x: 800,
        y: 950
      },
      179: {
        x: 850,
        y: 950
      },
      180: {
        x: 900,
        y: 950
      },
      181: {
        x: 950,
        y: 950
      },
      182: {
        x: 1000,
        y: 950
      },
      183: {
        x: 1050,
        y: 950
      },
      184: {
        x: 700,
        y: 1000
      },
      185: {
        x: 750,
        y: 1000
      },
      186: {
        x: 800,
        y: 1000
      },
      187: {
        x: 850,
        y: 1000
      },
      188: {
        x: 900,
        y: 1000
      },
      189: {
        x: 950,
        y: 1000
      },
      190: {
        x: 1000,
        y: 1000
      },
      191: {
        x: 1050,
        y: 1000
      },
      192: {
        x: 700,
        y: 1050
      },
      193: {
        x: 850,
        y: 1050
      },
      194: {
        x: 900,
        y: 1050
      },
      195: {
        x: 950,
        y: 1050
      },
      196: {
        x: 1000,
        y: 1050
      },
      197: {
        x: 900,
        y: 1100
      },
      198: {
        x: 950,
        y: 1100
      },
    }
  },

  startingMoney: { amount: 300 },
}
//loop is to add the missing Y-axis line of squares in area 4
export let positionArray = []
for (let tile in quest1.floor.floor_tiles) {
  quest1.floor.floor_tiles[tile].y = quest1.floor.floor_tiles[tile].y + 50
  positionArray.push({ x: quest1.floor.floor_tiles[tile].x, y: quest1.floor.floor_tiles[tile].y })
}

export function quest1CollisionDetection(runLoopX, runLoopY) {

  //   //outer walls


  //obstacle collision detection
  if (heroToken.x === 0 && heroToken.y === 1000) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
  }

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
  if (heroToken.x === quest1.town.x + 50 && heroToken.y === quest1.town.y + 50) {
    disableMovment.up = true;
    disableMovment.left = true;
    disableMovment.right = true;
    disableMovment.down = true;
    disableMovment.downRight = true
    disableMovment.upLeft = true;
    disableMovment.upRight = true;
    disableMovment.downLeft = true;
  }
}

