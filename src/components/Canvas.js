import React, { useEffect, useRef } from "react";
// import { heroData } from '../data/heroData'
import { heroToken, keyDown, keyUp, detectWalls, previousPosition } from '../player_actions/movement'
import { canvaseSize, map1, collisionDetection } from '../data/dungeonMaps/map1'
import '../styles/canvas.css';


function Canvas() {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    let heroTokenId = document.getElementById('heroToken');
    let mapTileToken = document.getElementById('mapTileToken');
    let startAreaGlyph = document.getElementById('startAreaGlyph');

    function drawTile() {
      let tiles = map1.floor_tiles;
      for (let tile in tiles) {
        ctx.drawImage(mapTileToken, tiles[tile].x, tiles[tile].y, map1.tile_size.height, map1.tile_size.width);
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(tiles[tile].x, tiles[tile].y, map1.tile_size.height, map1.tile_size.width);
      }

      ctx.drawImage(startAreaGlyph, map1.start_area.x, map1.start_area.y, map1.tile_size.height, map1.tile_size.width);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(map1.start_area.x, map1.start_area.y, map1.tile_size.height, map1.tile_size.width);
    }

    function drawHeroToken() {
      ctx.drawImage(heroTokenId, heroToken.x, heroToken.y, heroToken.w, heroToken.h);
    }

    function newPosition() {
      heroToken.x += heroToken.dx;
      heroToken.y += heroToken.dy;
      collisionDetection(previousPosition.x, previousPosition.y);
      detectWalls(canvas.current);
    }
    function clear() {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    }
    function update() {
      clear();
      drawTile();
      drawHeroToken();
      newPosition()
      requestAnimationFrame(update)
    }
    update()

  }, []);

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  return (
    <div>
      <canvas ref={canvas} id='canvas' width={canvaseSize.width} height={canvaseSize.height}></canvas>
    </div >
  );
}

export default Canvas;