import { heroToken, previousPosition } from '../../player_actions/movement';
// import { monsterData } from '../../data/monsterData';
import { disableMovment } from '../../player_actions/movement';
import { Skeleton, MasterSkeleton } from '../monsterData';
import { runLoop } from '../../components/Canvas'

let skeleton1 = new Skeleton(1, 450, 1050);
let skeleton2 = new Skeleton(2, 900, 1000);
let skeleton3 = new Skeleton(3, 900, 1050);

export const quest1 = {
  name: 'Quest 1: Into the Dark',
  tokenPlacement: {
    monsters: {
      skeleton1,
      skeleton2,
      skeleton3
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
    glyphs: {
      1: { x: 600, y: 1150 },
      2: { x: 1000, y: 700 },
      3: { x: 650, y: 450 },
    },
    activated_glyphs: {},
    treasure_chests: {
      copper: {
        1: { x: 250, y: 800 },
        2: { x: 1000, y: 1100 },
      },
      silver: {
        1: { x: 850, y: 550 },
        2: { x: 700, y: 550 },
      },
      gold: {
        1: { x: 600, y: 400 },
      }
    },
    items: {
      health_potions: {
        1: { x: 250, y: 1250 },
        2: { x: 850, y: 950 },
        3: { x: 700, y: 700 },
      },
      vitality_potions: {
        1: { x: 550, y: 950 },
        2: { x: 950, y: 500 },
        3: { x: 800, y: 150 },
        4: { x: 450, y: 200 },
      },
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
      1: { x: 600, y: 0 },
      2: { x: 650, y: 0 },
      //fix
      2.2: { x: 500, y: 50 },
      2.3: { x: 550, y: 50 },
      2.4: { x: 600, y: 50 },
      2.5: { x: 650, y: 50 },
      2.6: { x: 700, y: 50 },
      2.7: { x: 750, y: 50 },
      //end fix
      3: { x: 500, y: 100 },
      4: { x: 550, y: 100 },
      5: { x: 600, y: 100 },
      6: { x: 650, y: 100 },
      7: { x: 700, y: 100 },
      8: { x: 750, y: 100 },
      9: { x: 450, y: 150 },
      10: { x: 500, y: 150 },
      11: { x: 550, y: 150 },
      12: { x: 600, y: 150 },
      13: { x: 650, y: 150 },
      14: { x: 700, y: 150 },
      15: { x: 750, y: 150 },
      16: { x: 800, y: 150 },
      17: { x: 450, y: 200 },
      18: { x: 500, y: 200 },
      19: { x: 550, y: 200 },
      20: { x: 600, y: 200 },
      21: { x: 650, y: 200 },
      22: { x: 700, y: 200 },
      23: { x: 750, y: 200 },
      24: { x: 800, y: 200 },
      25: { x: 500, y: 250 },
      26: { x: 550, y: 250 },
      27: { x: 600, y: 250 },
      28: { x: 650, y: 250 },
      29: { x: 700, y: 250 },
      30: { x: 750, y: 250 },
      31: { x: 500, y: 300 },
      32: { x: 550, y: 300 },
      33: { x: 600, y: 300 },
      34: { x: 650, y: 300 },
      35: { x: 700, y: 300 },
      36: { x: 750, y: 300 },
      37: { x: 600, y: 350 },
      38: { x: 650, y: 350 },
      39: { x: 600, y: 400 },
      40: { x: 650, y: 400 },
      41: { x: 600, y: 450 },
      42: { x: 650, y: 450 },
      43: { x: 600, y: 500 },
      44: { x: 650, y: 500 },
      45: { x: 550, y: 550 },
      46: { x: 600, y: 550 },
      47: { x: 650, y: 550 },
      48: { x: 300, y: 600 },
      49: { x: 350, y: 600 },
      50: { x: 400, y: 600 },
      51: { x: 450, y: 600 },
      52: { x: 500, y: 600 },
      53: { x: 550, y: 600 },
      54: { x: 600, y: 600 },
      55: { x: 650, y: 600 },
      56: { x: 300, y: 650 },
      57: { x: 350, y: 650 },
      58: { x: 400, y: 650 },
      59: { x: 450, y: 650 },
      60: { x: 500, y: 650 },
      61: { x: 550, y: 650 },
      62: { x: 600, y: 650 },
      63: { x: 650, y: 650 },
      64: { x: 550, y: 700 },
      65: { x: 600, y: 700 },
      66: { x: 650, y: 700 },
      67: { x: 600, y: 750 },
      68: { x: 650, y: 750 },
      69: { x: 600, y: 800 },
      70: { x: 650, y: 800 },
      71: { x: 600, y: 850 },
      72: { x: 650, y: 850 },
      73: { x: 600, y: 900 },
      74: { x: 650, y: 900 },
      75: { x: 350, y: 950 },
      76: { x: 400, y: 950 },
      77: { x: 550, y: 950 },
      78: { x: 600, y: 950 },
      79: { x: 650, y: 950 },
      80: { x: 350, y: 1000 },
      81: { x: 400, y: 1000 },
      82: { x: 450, y: 1000 },
      83: { x: 500, y: 1000 },
      84: { x: 550, y: 1000 },
      85: { x: 600, y: 1000 },
      86: { x: 650, y: 1000 },
      87: { x: 350, y: 1050 },
      88: { x: 400, y: 1050 },
      89: { x: 450, y: 1050 },
      90: { x: 500, y: 1050 },
      91: { x: 550, y: 1050 },
      92: { x: 600, y: 1050 },
      93: { x: 650, y: 1050 },
      94: { x: 350, y: 1100 },
      95: { x: 400, y: 1100 },
      96: { x: 550, y: 1100 },
      97: { x: 600, y: 1100 },
      98: { x: 650, y: 1100 },
      99: { x: 600, y: 1150 },
      100: { x: 650, y: 1150 },
      101: { x: 250, y: 800 },
      102: { x: 300, y: 800 },
      103: { x: 250, y: 850 },
      104: { x: 300, y: 850 },
      105: { x: 250, y: 900 },
      106: { x: 300, y: 900 },
      107: { x: 150, y: 950 },
      108: { x: 200, y: 950 },
      109: { x: 250, y: 950 },
      110: { x: 300, y: 950 },
      111: { x: 0, y: 1000 },
      112: { x: 50, y: 1000 },
      113: { x: 100, y: 1000 },
      114: { x: 150, y: 1000 },
      115: { x: 200, y: 1000 },
      116: { x: 250, y: 1000 },
      117: { x: 300, y: 1000 },
      118: { x: 0, y: 1050 },
      119: { x: 50, y: 1050 },
      120: { x: 100, y: 1050 },
      121: { x: 150, y: 1050 },
      122: { x: 200, y: 1050 },
      123: { x: 250, y: 1050 },
      124: { x: 300, y: 1050 },
      125: { x: 150, y: 1100 },
      126: { x: 200, y: 1100 },
      127: { x: 250, y: 1100 },
      128: { x: 300, y: 1100 },
      129: { x: 250, y: 1150 },
      130: { x: 300, y: 1150 },
      131: { x: 250, y: 1200 },
      132: { x: 300, y: 1200 },
      133: { x: 250, y: 1250 },
      134: { x: 300, y: 1250 },
      135: { x: 900, y: 500 },
      136: { x: 950, y: 500 },
      137: { x: 700, y: 550 },
      138: { x: 850, y: 550 },
      139: { x: 900, y: 550 },
      140: { x: 950, y: 550 },
      141: { x: 1000, y: 550 },
      142: { x: 700, y: 600 },
      143: { x: 750, y: 600 },
      144: { x: 800, y: 600 },
      145: { x: 850, y: 600 },
      146: { x: 900, y: 600 },
      147: { x: 950, y: 600 },
      148: { x: 1000, y: 600 },
      149: { x: 1050, y: 600 },
      150: { x: 700, y: 650 },
      151: { x: 750, y: 650 },
      152: { x: 800, y: 650 },
      153: { x: 850, y: 650 },
      154: { x: 900, y: 650 },
      155: { x: 950, y: 650 },
      156: { x: 1000, y: 650 },
      157: { x: 1050, y: 650 },
      158: { x: 700, y: 700 },
      159: { x: 850, y: 700 },
      160: { x: 900, y: 700 },
      161: { x: 950, y: 700 },
      162: { x: 1000, y: 700 },
      163: { x: 900, y: 750 },
      164: { x: 950, y: 750 },
      165: { x: 900, y: 800 },
      166: { x: 950, y: 800 },
      167: { x: 900, y: 850 },
      168: { x: 950, y: 850 },
      169: { x: 900, y: 900 },
      170: { x: 950, y: 900 },
      171: { x: 850, y: 950 },
      172: { x: 900, y: 950 },
      173: { x: 950, y: 950 },
      174: { x: 1000, y: 950 },
      175: { x: 700, y: 950 },
      176: { x: 700, y: 1000 },
      177: { x: 750, y: 1000 },
      178: { x: 800, y: 1000 },
      179: { x: 850, y: 1000 },
      180: { x: 900, y: 1000 },
      181: { x: 950, y: 1000 },
      182: { x: 1000, y: 1000 },
      183: { x: 1050, y: 1000 },
      184: { x: 700, y: 1050 },
      185: { x: 750, y: 1050 },
      186: { x: 800, y: 1050 },
      187: { x: 850, y: 1050 },
      188: { x: 900, y: 1050 },
      189: { x: 950, y: 1050 },
      190: { x: 1000, y: 1050 },
      191: { x: 1050, y: 1050 },
      192: { x: 700, y: 1100 },
      193: { x: 850, y: 1100 },
      194: { x: 900, y: 1100 },
      195: { x: 950, y: 1100 },
      196: { x: 1000, y: 1100 },
      197: { x: 900, y: 1150 },
      198: { x: 950, y: 1150 },
    }
  },

  startingMoney: { amount: 300 },
}

export function quest1CollisionDetection(runLoopX, runLoopY) {

  //outer walls

  //square 1
  if (heroToken.x === 600 && heroToken.y === 0) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.left = true
  }

  //square 2
  if (heroToken.x === 650 && heroToken.y === 0) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.right = true
  }
  //square 2.2
  if (heroToken.x === 500 && heroToken.y === 50) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.left = true
    disableMovment.downLeft = true

  }

  //square 2.3
  if (heroToken.x === 550 && heroToken.y === 50) {
    disableMovment.up = true;
    disableMovment.upLeft = true
  }
  //square 2.4
  if (heroToken.x === 600 && heroToken.y === 50) {
    disableMovment.upLeft = true
  }
  //square 2.5
  if (heroToken.x === 650 && heroToken.y === 50) {
    disableMovment.upRight = true
  }
  //square 2.6
  if (heroToken.x === 700 && heroToken.y === 50) {
    disableMovment.up = true;
    disableMovment.upRight = true
  }
  //square 2.7
  if (heroToken.x === 750 && heroToken.y === 50) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.downRight = true
    disableMovment.right = true
  }

  //square 3
  if (heroToken.x === 500 && heroToken.y === 100) {
    disableMovment.upLeft = true
    disableMovment.left = true
  }
  //square 8
  if (heroToken.x === 750 && heroToken.y === 100) {
    disableMovment.upRight = true
    disableMovment.right = true
  }
  //square 9
  if (heroToken.x === 450 && heroToken.y === 150) {
    disableMovment.up = true
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.upLeft = true
  }
  //square 10
  if (heroToken.x === 500 && heroToken.y === 150) {
    disableMovment.upLeft = true
  }
  //square 15
  if (heroToken.x === 750 && heroToken.y === 150) {
    disableMovment.upRight = true
  }
  //square 16
  if (heroToken.x === 800 && heroToken.y === 150) {
    disableMovment.up = true
    disableMovment.upRight = true
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 17
  if (heroToken.x === 450 && heroToken.y === 200) {
    disableMovment.upLeft = true
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.down = true
  }

  //square 18
  if (heroToken.x === 500 && heroToken.y === 200) {
    disableMovment.downLeft = true
  }
  //square 23
  if (heroToken.x === 750 && heroToken.y === 200) {
    disableMovment.downRight = true
  }
  //square 24
  if (heroToken.x === 800 && heroToken.y === 200) {
    disableMovment.down = true
    disableMovment.downRight = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 25
  if (heroToken.x === 500 && heroToken.y === 250) {
    disableMovment.left = true
    disableMovment.downLeft = true
  }
  //square 30
  if (heroToken.x === 750 && heroToken.y === 250) {
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 31
  if (heroToken.x === 500 && heroToken.y === 300) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.downLeft = true
    disableMovment.downRight = true
    disableMovment.down = true
  }
  //square 32
  if (heroToken.x === 550 && heroToken.y === 300) {
    disableMovment.down = true
    disableMovment.downLeft = true
  }
  //square 33
  if (heroToken.x === 600 && heroToken.y === 300) {
    disableMovment.downLeft = true
  }
  //square 34
  if (heroToken.x === 650 && heroToken.y === 300) {
    disableMovment.downRight = true
  }
  //square 35
  if (heroToken.x === 700 && heroToken.y === 300) {
    disableMovment.down = true
    disableMovment.downRight = true
  }
  //square 36
  if (heroToken.x === 750 && heroToken.y === 300) {
    disableMovment.down = true
    disableMovment.downRight = true
    disableMovment.downLeft = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 37
  if (heroToken.x === 600 && heroToken.y === 350) {
    disableMovment.left = true
    disableMovment.downLeft = true
  }
  //square 38
  if (heroToken.x === 650 && heroToken.y === 350) {
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 39
  if (heroToken.x === 600 && heroToken.y === 400) {
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.upLeft = true
  }
  //square 40
  if (heroToken.x === 650 && heroToken.y === 400) {
    disableMovment.right = true
    disableMovment.downRight = true
    disableMovment.upRight = true
  }
  //square 41
  if (heroToken.x === 600 && heroToken.y === 450) {
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.upLeft = true
  }
  //square 42
  if (heroToken.x === 650 && heroToken.y === 450) {
    disableMovment.right = true
    disableMovment.downRight = true
    disableMovment.upRight = true
  }
  //square 43
  if (heroToken.x === 600 && heroToken.y === 500) {
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 44
  if (heroToken.x === 650 && heroToken.y === 500) {
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 45
  if (heroToken.x === 550 && heroToken.y === 550) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.up = true
  }
  //square 46
  if (heroToken.x === 600 && heroToken.y === 550) {
    disableMovment.upLeft = true
  }
  //square 47
  if (heroToken.x === 600 && heroToken.y === 550) {
    disableMovment.upRight = true
  }
  //square 48
  if (heroToken.x === 300 && heroToken.y === 600) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.left = true
    disableMovment.downLeft = true
  }
  //square 49
  if (heroToken.x === 350 && heroToken.y === 600) {
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.up = true
  }
  //square 50
  if (heroToken.x === 400 && heroToken.y === 600) {
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.up = true
  }
  //square 51
  if (heroToken.x === 450 && heroToken.y === 600) {
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.up = true
  }
  //square 52
  if (heroToken.x === 500 && heroToken.y === 600) {
    disableMovment.upLeft = true
    disableMovment.up = true
  }
  //square 53
  if (heroToken.x === 550 && heroToken.y === 600) {
    disableMovment.upLeft = true
  }

  //square 56
  if (heroToken.x === 300 && heroToken.y === 650) {
    disableMovment.upLeft = true
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }

  //square 57
  if (heroToken.x === 350 && heroToken.y === 650) {
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }

  //square 58
  if (heroToken.x === 400 && heroToken.y === 650) {
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }

  //square 59
  if (heroToken.x === 450 && heroToken.y === 650) {
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }
  //square 60
  if (heroToken.x === 500 && heroToken.y === 650) {
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 61
  if (heroToken.x === 550 && heroToken.y === 650) {
    disableMovment.downLeft = true
  }
  //square 64
  if (heroToken.x === 550 && heroToken.y === 700) {
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 65
  if (heroToken.x === 600 && heroToken.y === 700) {
    disableMovment.downLeft = true
  }

  //square 67
  if (heroToken.x === 600 && heroToken.y === 750) {
    disableMovment.left = true
    disableMovment.downLeft = true
  }
  //square 68
  if (heroToken.x === 650 && heroToken.y === 750) {
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 69
  if (heroToken.x === 600 && heroToken.y === 800) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.downLeft = true
  }
  //square 70
  if (heroToken.x === 650 && heroToken.y === 800) {
    disableMovment.right = true
    disableMovment.upRight = true
    disableMovment.downRight = true
  }
  //square 71
  if (heroToken.x === 600 && heroToken.y === 850) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.downLeft = true
  }
  //square 72
  if (heroToken.x === 650 && heroToken.y === 850) {
    disableMovment.right = true
    disableMovment.upRight = true
    disableMovment.downRight = true
  }
  //square 73
  if (heroToken.x === 600 && heroToken.y === 900) {
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 74
  if (heroToken.x === 650 && heroToken.y === 900) {
    disableMovment.right = true
    disableMovment.upRight = true
  }

  //square 75
  if (heroToken.x === 350 && heroToken.y === 950) {
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 76
  if (heroToken.x === 400 && heroToken.y === 950) {
    disableMovment.up = true
    disableMovment.upRight = true
    disableMovment.right = true
  }
  //square 77
  if (heroToken.x === 550 && heroToken.y === 950) {
    disableMovment.up = true
    disableMovment.upLeft = true
    disableMovment.left = true
  }
  //square 78
  if (heroToken.x === 600 && heroToken.y === 950) {
    disableMovment.upLeft = true
  }
  //square 79
  if (heroToken.x === 600 && heroToken.y === 950) {
    disableMovment.upRight = true
  }
  //square 81
  if (heroToken.x === 400 && heroToken.y === 1000) {
    disableMovment.upRight = true
  }
  //square 82
  if (heroToken.x === 450 && heroToken.y === 1000) {
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 83
  if (heroToken.x === 500 && heroToken.y === 1000) {
    disableMovment.up = true
    disableMovment.upLeft = true
  }
  //square 84
  if (heroToken.x === 550 && heroToken.y === 1000) {
    disableMovment.upLeft = true
  }
  //square 88
  if (heroToken.x === 400 && heroToken.y === 1050) {
    disableMovment.downRight = true
  }
  //square 89
  if (heroToken.x === 450 && heroToken.y === 1500) {
    disableMovment.downRight = true
    disableMovment.down = true
  }
  //square 90
  if (heroToken.x === 500 && heroToken.y === 1050) {
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 91
  if (heroToken.x === 550 && heroToken.y === 1050) {

    disableMovment.downRight = true
  }
  //square 94
  if (heroToken.x === 350 && heroToken.y === 1100) {
    disableMovment.down = true
    disableMovment.downRight = true
  }
  //square 95
  if (heroToken.x === 400 && heroToken.y === 1100) {
    disableMovment.down = true
    disableMovment.downLeft = true
    disableMovment.downRight = true
    disableMovment.right = true
  }
  //square 96
  if (heroToken.x === 550 && heroToken.y === 1100) {
    disableMovment.down = true
    disableMovment.downLeft = true
    disableMovment.left = true
  }
  //square 97
  if (heroToken.x === 600 && heroToken.y === 1100) {
    disableMovment.downLeft = true
  }
  //square 98
  if (heroToken.x === 650 && heroToken.y === 1100) {
    disableMovment.downRight = true
  }
  //square 99
  if (heroToken.x === 600 && heroToken.y === 1150) {
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }
  //square 100
  if (heroToken.x === 650 && heroToken.y === 1150) {
    disableMovment.right = true
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }
  //square 101
  if (heroToken.x === 250 && heroToken.y === 800) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.downLeft = true
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 102
  if (heroToken.x === 300 && heroToken.y === 800) {
    disableMovment.right = true
    disableMovment.upLeft = true
    disableMovment.downRight = true
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 103
  if (heroToken.x === 250 && heroToken.y === 850) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.downLeft = true
  }
  //square 104
  if (heroToken.x === 300 && heroToken.y === 850) {
    disableMovment.upRight = true
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 105
  if (heroToken.x === 250 && heroToken.y === 900) {
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 106
  if (heroToken.x === 300 && heroToken.y === 900) {
    disableMovment.right = true
    disableMovment.upRight = true
  }

  //square 107
  if (heroToken.x === 150 && heroToken.y === 950) {
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 108
  if (heroToken.x === 200 && heroToken.y === 950) {
    disableMovment.up = true
    disableMovment.upLeft = true
  }
  //square 109
  if (heroToken.x === 250 && heroToken.y === 950) {
    disableMovment.upLeft = true
  }
  //square 110
  if (heroToken.x === 250 && heroToken.y === 950) {
    disableMovment.upRight = true
  }

  //square 111
  if (heroToken.x === 0 && heroToken.y === 1000) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.left = true
    disableMovment.downLeft = true
  }
  //square 112
  if (heroToken.x === 50 && heroToken.y === 1000) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
  }
  //square 113
  if (heroToken.x === 100 && heroToken.y === 1000) {
    disableMovment.up = true;
    disableMovment.upLeft = true
  }
  //square 114
  if (heroToken.x === 150 && heroToken.y === 1000) {
    disableMovment.upLeft = true
  }
  //square 118
  if (heroToken.x === 0 && heroToken.y === 1050) {
    disableMovment.upLeft = true
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 119
  if (heroToken.x === 50 && heroToken.y === 1050) {
    disableMovment.downRight = true
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 120
  if (heroToken.x === 100 && heroToken.y === 1050) {
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 121
  if (heroToken.x === 150 && heroToken.y === 1050) {
    disableMovment.downLeft = true
  }
  //square 125
  if (heroToken.x === 150 && heroToken.y === 1100) {
    disableMovment.down = true
    disableMovment.downLeft = true
    disableMovment.left = true
    disableMovment.downRight = true
  }
  //square 126
  if (heroToken.x === 200 && heroToken.y === 1100) {
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 127
  if (heroToken.x === 250 && heroToken.y === 1100) {
    disableMovment.downLeft = true
  }
  //square 129
  if (heroToken.x === 250 && heroToken.y === 1150) {
    disableMovment.downLeft = true
    disableMovment.left = true
  }
  //square 130
  if (heroToken.x === 300 && heroToken.y === 1150) {
    disableMovment.downRight = true
    disableMovment.right = true
  }
  //square 131
  if (heroToken.x === 250 && heroToken.y === 1200) {
    disableMovment.downLeft = true
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 132
  if (heroToken.x === 300 && heroToken.y === 1200) {
    disableMovment.downRight = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 133
  if (heroToken.x === 250 && heroToken.y === 1250) {
    disableMovment.downLeft = true
    disableMovment.left = true
    disableMovment.upLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
  }
  //square 134
  if (heroToken.x === 300 && heroToken.y === 1250) {
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.downRight = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 135
  if (heroToken.x === 900 && heroToken.y === 500) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.left = true
  }

  //square 136
  if (heroToken.x === 950 && heroToken.y === 500) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.upLeft = true
    disableMovment.right = true
  }
  //square 137
  if (heroToken.x === 700 && heroToken.y === 550) {
    disableMovment.up = true;
    disableMovment.upRight = true
    disableMovment.right = true
  }
  //square 138
  if (heroToken.x === 850 && heroToken.y === 550) {
    disableMovment.up = true
    disableMovment.upLeft = true
    disableMovment.left = true
  }
  //square 139
  if (heroToken.x === 900 && heroToken.y === 550) {
    disableMovment.upLeft = true
  }
  //square 140
  if (heroToken.x === 950 && heroToken.y === 550) {
    disableMovment.upRight = true
  }
  //square 141
  if (heroToken.x === 1000 && heroToken.y === 550) {
    disableMovment.up = true
    disableMovment.upRight = true
    disableMovment.right = true
  }
  //square 142
  if (heroToken.x === 700 && heroToken.y === 600) {
    disableMovment.upRight = true
  }
  //square 143
  if (heroToken.x === 750 && heroToken.y === 600) {
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 144
  if (heroToken.x === 800 && heroToken.y === 600) {
    disableMovment.up = true
    disableMovment.upLeft = true
  }
  //square 145
  if (heroToken.x === 850 && heroToken.y === 600) {
    disableMovment.upLeft = true
  }
  //square 148
  if (heroToken.x === 1000 && heroToken.y === 600) {
    disableMovment.upRight = true
  }
  //square 149
  if (heroToken.x === 1050 && heroToken.y === 600) {
    disableMovment.up = true
    disableMovment.upRight = true
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 150
  if (heroToken.x === 700 && heroToken.y === 650) {
    disableMovment.downRight = true
  }
  //square 151
  if (heroToken.x === 750 && heroToken.y === 650) {
    disableMovment.downRight = true
    disableMovment.down = true
  }
  //square 152
  if (heroToken.x === 800 && heroToken.y === 650) {
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 153
  if (heroToken.x === 850 && heroToken.y === 650) {
    disableMovment.downLeft = true
  }
  //square 156
  if (heroToken.x === 1000 && heroToken.y === 650) {
    disableMovment.downRight = true
  }
  //square 157
  if (heroToken.x === 1050 && heroToken.y === 650) {
    disableMovment.down = true
    disableMovment.downRight = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 158
  if (heroToken.x === 700 && heroToken.y === 700) {
    disableMovment.right = true
    disableMovment.downRight = true
    disableMovment.down = true
  }
  //square 159
  if (heroToken.x === 850 && heroToken.y === 700) {
    disableMovment.left = true
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 160
  if (heroToken.x === 900 && heroToken.y === 700) {
    disableMovment.downLeft = true
  }
  //square 161
  if (heroToken.x === 950 && heroToken.y === 700) {
    disableMovment.downRight = true
  }
  //162
  if (heroToken.x === 1000 && heroToken.y === 700) {
    disableMovment.right = true
    disableMovment.downRight = true
    disableMovment.down = true
  }
  //163
  if (heroToken.x === 900 && heroToken.y === 750) {
    disableMovment.downLeft = true
    disableMovment.left = true
  }
  //square 164
  if (heroToken.x === 950 && heroToken.y === 750) {
    disableMovment.downRight = true
    disableMovment.right = true
  }
  //square 165
  if (heroToken.x === 900 && heroToken.y === 800) {
    disableMovment.downLeft = true
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 166
  if (heroToken.x === 950 && heroToken.y === 800) {
    disableMovment.downRight = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 167
  if (heroToken.x === 900 && heroToken.y === 850) {
    disableMovment.downLeft = true
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 168
  if (heroToken.x === 950 && heroToken.y === 850) {
    disableMovment.downRight = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 169
  if (heroToken.x === 900 && heroToken.y === 900) {
    disableMovment.left = true
    disableMovment.upLeft = true
  }
  //square 170
  if (heroToken.x === 950 && heroToken.y === 900) {
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 171
  if (heroToken.x === 850 && heroToken.y === 950) {
    disableMovment.up = true
    disableMovment.upLeft = true
    disableMovment.left = true
  }
  //square 172
  if (heroToken.x === 900 && heroToken.y === 950) {
    disableMovment.upLeft = true
  }
  //square 173
  if (heroToken.x === 950 && heroToken.y === 950) {
    disableMovment.upRight = true
  }
  //square 174
  if (heroToken.x === 1000 && heroToken.y === 950) {
    disableMovment.right = true
    disableMovment.up = true
    disableMovment.upRight = true
  }
  //square 175
  if (heroToken.x === 700 && heroToken.y === 950) {
    disableMovment.upRight = true
    disableMovment.up = true
    disableMovment.right = true
  }
  //square 176
  if (heroToken.x === 700 && heroToken.y === 1000) {
    disableMovment.upRight = true
  }
  //square 177
  if (heroToken.x === 750 && heroToken.y === 1000) {
    disableMovment.upRight = true
    disableMovment.up = true
  }
  //square 178
  if (heroToken.x === 800 && heroToken.y === 1000) {
    disableMovment.upLeft = true
    disableMovment.up = true
  }
  //square 179
  if (heroToken.x === 850 && heroToken.y === 1000) {
    disableMovment.upLeft = true
  }
  //square 182
  if (heroToken.x === 1000 && heroToken.y === 1000) {
    disableMovment.upRight = true
  }
  //square 183
  if (heroToken.x === 1050 && heroToken.y === 1000) {
    disableMovment.up = true
    disableMovment.upRight = true
    disableMovment.right = true
    disableMovment.downRight = true
  }
  //square 184
  if (heroToken.x === 700 && heroToken.y === 1050) {
    disableMovment.downRight = true
  }
  //square 185
  if (heroToken.x === 750 && heroToken.y === 1050) {
    disableMovment.downRight = true
    disableMovment.down = true
  }
  //square 186
  if (heroToken.x === 800 && heroToken.y === 1050) {
    disableMovment.downLeft = true
    disableMovment.down = true
  }
  //square 187
  if (heroToken.x === 850 && heroToken.y === 1050) {
    disableMovment.downLeft = true
  }
  //square 190
  if (heroToken.x === 1000 && heroToken.y === 1050) {
    disableMovment.downRight = true
  }
  //square 191
  if (heroToken.x === 1050 && heroToken.y === 1050) {
    disableMovment.downRight = true
    disableMovment.down = true
    disableMovment.right = true
    disableMovment.upRight = true
  }
  //square 192
  if (heroToken.x === 700 && heroToken.y === 1100) {
    disableMovment.downRight = true
    disableMovment.down = true
    disableMovment.right = true
  }
  //square 193
  if (heroToken.x === 850 && heroToken.y === 1100) {
    disableMovment.downLeft = true
    disableMovment.down = true
    disableMovment.left = true
  }
  //square 194
  if (heroToken.x === 900 && heroToken.y === 1100) {
    disableMovment.downLeft = true
  }
  //square 195
  if (heroToken.x === 950 && heroToken.y === 1100) {
    disableMovment.downRight = true
  }
  //square 196
  if (heroToken.x === 1000 && heroToken.y === 1100) {
    disableMovment.downRight = true
    disableMovment.down = true
    disableMovment.right = true
  }
  //square 197
  if (heroToken.x === 900 && heroToken.y === 1150) {
    disableMovment.downRight = true
    disableMovment.down = true
    disableMovment.left = true
    disableMovment.downLeft = true

  }
  //square 198
  if (heroToken.x === 950 && heroToken.y === 1150) {
    disableMovment.downRight = true
    disableMovment.down = true
    disableMovment.downLeft = true
    disableMovment.right = true
  }


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

