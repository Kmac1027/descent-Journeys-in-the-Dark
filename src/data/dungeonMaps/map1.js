import { heroToken } from '../../player_actions/movement';
// import { monsterData } from '../../data/monsterData';
import { disableMovment } from '../../player_actions/movement';

export const map1 = {
  monsters: {
    skeletonToken: {
      w: 50,
      h: 50,
      x: 150,
      y: 150,
      speed: 5,
      dx: 0,
      dy: 0
    }
  },
  obstacles: {},
  glyphs: {
    white_glyph_img_path: 'images/map_tiles/item_icons/ancient glyph of teleportation white.jpg',
    red_glyph_img_path: 'images/map_tiles.item_icons/ancient glyph of teleportation Red',
    start_area: {
      x: 100,
      y: 0
    },
  },
  treasure_chests: {},
  items: {}
}


export const mapSize = {
  width: 950,
  height: 800
}
export const map1Floor = {
  tile_size: {
    height: 50,
    width: 50
  },
  floor_image_path: 'images/map_tiles/floors/corridor_2x2.png',
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


};

export const startingMoney = { amount: 300 };

export function collisionDetection(previousX, previousY) {
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

  if (heroToken.x - 50 === map1.monsters.skeletonToken.x && heroToken.y === map1.monsters.skeletonToken.y) {
    disableMovment.left = true;
  }
  if (heroToken.x + 50 === map1.monsters.skeletonToken.x && heroToken.y === map1.monsters.skeletonToken.y) {
    disableMovment.right = true;
  }
  if ((heroToken.y - 50) === map1.monsters.skeletonToken.y && heroToken.x === map1.monsters.skeletonToken.x) {
    disableMovment.up = true;
  }
  if ((heroToken.y + 50) === map1.monsters.skeletonToken.y && heroToken.x === map1.monsters.skeletonToken.x) {
    disableMovment.down = true;
  }
  if (heroToken.x + 50 === map1.monsters.skeletonToken.x && heroToken.y + 50 === map1.monsters.skeletonToken.y) {
    disableMovment.downRight = true
  }
  if (heroToken.x + 50 === map1.monsters.skeletonToken.x && heroToken.y - 50 === map1.monsters.skeletonToken.y) {
    disableMovment.upRight = true
  }
  if (heroToken.x - 50 === map1.monsters.skeletonToken.x && heroToken.y + 50 === map1.monsters.skeletonToken.y) {
    disableMovment.downLeft = true
  }
  if (heroToken.x - 50 === map1.monsters.skeletonToken.x && heroToken.y - 50 === map1.monsters.skeletonToken.y) {
    disableMovment.upLeft = true
  }
}

