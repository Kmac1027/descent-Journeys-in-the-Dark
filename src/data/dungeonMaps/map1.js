import { heroToken } from '../../player_actions/movement'


export const canvaseSize = {
  width: 950,
  height: 800
}
export const map1 = {
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

  }


};

export function collisionDetection(previousX, previousY) {

  if (heroToken.x < 100 && heroToken.y <= 0) {
    heroToken.x = previousX;
    heroToken.y = previousY;
  }
  if (heroToken.x < 50 && heroToken.y <= 50) {
    heroToken.x = previousX;
    heroToken.y = previousY;
  }

}