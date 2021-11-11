import '../styles/canvas.css';
import React, { useEffect, useRef } from "react";
// import { heroData } from '../data/heroData'
import { heroToken, keyDown, keyUp, detectWalls, previousPosition } from '../player_actions/movement'
import { collisionDetection, map1 } from '../data/dungeonMaps/map1'
import { mouseClickCorrection, mousePos } from '../player_actions/mouseClick'



function Canvas() {
  const canvas = useRef(null);

  useEffect(() => {
    //mouse click
    // document.addEventListener("mousemove", function (e) {
    //   mousePos.x = e.clientX;
    //   mousePos.y = e.clientY;
    // });
    // let canvasClick = document.getElementById('canvas');
    // canvasClick.addEventListener('click', mouseClickCorrection);

    //drawing on canvas
    const ctx = canvas.current.getContext('2d');
    let heroTokenId = document.getElementById('heroToken');

    let masterSkeleton = document.getElementById('masterSkeleton')
    let mapTileTokenId = document.getElementById('mapTileToken');
    let startAreaGlyphId = document.getElementById('whiteGlyph');

    function drawTile() {
      let tiles = map1.map1Floor.floor_tiles;
      for (let tile in tiles) {
        ctx.drawImage(mapTileTokenId, tiles[tile].x, tiles[tile].y, map1.map1Floor.tile_size.height, map1.map1Floor.tile_size.width);
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(tiles[tile].x, tiles[tile].y, map1.map1Floor.tile_size.height, map1.map1Floor.tile_size.width);
      }
      ctx.drawImage(startAreaGlyphId, map1.tokenPlacement.start_area.x, map1.tokenPlacement.start_area.y, map1.map1Floor.tile_size.height, map1.map1Floor.tile_size.width);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(map1.tokenPlacement.start_area.x, map1.tokenPlacement.start_area.y, map1.map1Floor.tile_size.height, map1.map1Floor.tile_size.width);
    }
    function drawMonsterToken() {
      let monsters = map1.tokenPlacement.monsters;
      for (let monster in monsters) {
        if (monsters[monster].type === 'normal') {
          let imgId = document.getElementById(monsters[monster].name);
          ctx.drawImage(imgId,
            monsters[monster].x,
            monsters[monster].y,
            monsters[monster].w,
            monsters[monster].h);
        } else {
          let imgId = document.getElementById(monsters[monster].name);
          ctx.drawImage(imgId,
            monsters[monster].x,
            monsters[monster].y,
            monsters[monster].w,
            monsters[monster].h);
        }

      }

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
      drawMonsterToken();
      drawHeroToken();
      newPosition()
      requestAnimationFrame(update)
    }
    update()


  }, []);

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);

  return (
    <div className='left'>
      <div id='canvasDivId'>
        <canvas ref={canvas} id='canvas' width={map1.mapSize.width} height={map1.mapSize.height}></canvas>
      </div >
    </div>
  );
}

export default Canvas;