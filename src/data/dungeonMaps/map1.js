import { heroToken } from '../../player_actions/movement';
import { monsterData } from '../../data/monsterData';
import { disableMovment } from '../../player_actions/movement';

export const map1 = {
  monsters: {
    skeleton1: {
      data: monsterData.skeleton.normal,
      x: 150,
      y: 150
    },
    skeleton2: monsterData.skeleton.normal,
    masterSkeleton1: {
      data: monsterData.skeleton.master,
      x: 150,
      y: 150
    },
  },
  obstacles: {},
  glyphs: {},
  treasure_chests: {}
}


export const canvaseSize = {
  width: 950,
  height: 800
}
export const map1Floor = {
  tile_size: {
    height: 50,
    width: 50
  },
  start_area: {
    start_glyph_image_path: 'images/map_tiles/items_icons/ancient glyph of teleportation white.jpg',
    x: 100,
    y: 0
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
  if (heroToken.x === 100 && heroToken.y === 0) {
    disableMovment.left = true;
    disableMovment.up = true;
  }
  if (heroToken.x === 150 && heroToken.y === 0) {
    disableMovment.right = true;
    disableMovment.up = true;
  }
  if (heroToken.x === 50 && heroToken.y === 50) {
    disableMovment.left = true;
    disableMovment.up = true;
  }
  if (heroToken.x === 0 && heroToken.y === 100) {
    disableMovment.left = true;
    disableMovment.up = true;
  }
  if (heroToken.x === 0 && heroToken.y === 150) {
    disableMovment.left = true;
    disableMovment.down = true;
  }
  if (heroToken.x === 50 && heroToken.y === 200) {
    disableMovment.left = true;
    disableMovment.down = true;
  }
  if (heroToken.x === 100 && heroToken.y === 250) {
    disableMovment.left = true;
    disableMovment.down = true;
  }
  if (heroToken.x === 150 && heroToken.y === 250) {
    disableMovment.right = true;
    disableMovment.down = true;
  }
  if (heroToken.x === 200 && heroToken.y === 200) {
    disableMovment.right = true;
    disableMovment.down = true;
  }
  if (heroToken.x === 250 && heroToken.y === 150) {
    disableMovment.right = true;
    disableMovment.down = true;
  }
  if (heroToken.x === 250 && heroToken.y === 100) {
    disableMovment.right = true;
    disableMovment.up = true;
  }
  if (heroToken.x === 200 && heroToken.y === 50) {
    disableMovment.right = true;
    disableMovment.up = true;
  }

  //obstacles

  //monsters collision detection

  if (heroToken.x - 50 === skeletonToken.x && heroToken.y === skeletonToken.y) {
    // console.log(heroToken.x, skeletonToken.x)
    disableMovment.left = true;

  }
  if (heroToken.x + 50 === skeletonToken.x && heroToken.y === skeletonToken.y) {
    // console.log(heroToken.x, skeletonToken.x)
    disableMovment.right = true;

  }
  if ((heroToken.y - 50) === skeletonToken.y && heroToken.x === skeletonToken.x) {
    // console.log(heroToken.y, skeletonToken.y)
    disableMovment.up = true;

  }
  if ((heroToken.y + 50) === skeletonToken.y && heroToken.x === skeletonToken.x) {
    // console.log(heroToken.y, skeletonToken.y)
    disableMovment.down = true;

  }
}

export const skeletonToken = {
  w: 50,
  h: 50,
  x: 150,
  y: 150,
  speed: 5,
  dx: 0,
  dy: 0
}