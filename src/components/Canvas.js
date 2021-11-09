import React, { useEffect, useRef } from "react";
// import { heroData } from '../data/heroData'
import { heroToken, keyDown, keyUp, detectWalls, previousPosition } from '../player_actions/movement'
import { mapSize, map1Floor, collisionDetection, map1 } from '../data/dungeonMaps/map1'
import '../styles/canvas.css';



function Canvas() {
  const canvas = useRef(null);

  useEffect(() => {
    // let mousePos = {
    //   x: null,
    //   y: null
    // }
    // document.addEventListener("mousemove", function (e) {
    //   mousePos.x = e.clientX;
    //   mousePos.y = e.clientY;
    // });
    // let canvasClick = document.getElementById('canvas');
    // canvasClick.addEventListener('click', clickMe);
    // function clickMe() {
    //   console.log('X:', mousePos.x, 'Y:', mousePos.y);
    //   if (mousePos.x <= 150 && mousePos.y <= 50) {
    //     heroToken.x = 100;
    //     heroToken.y = 0
    //   }
    // }
    const ctx = canvas.current.getContext('2d');
    let heroTokenId = document.getElementById('heroToken');
    let skeletonTokenId = document.getElementById('skeleton');
    let mapTileToken = document.getElementById('mapTileToken');
    let startAreaGlyph = document.getElementById('startAreaGlyph');

    function drawTile() {
      let tiles = map1Floor.floor_tiles;
      for (let tile in tiles) {
        ctx.drawImage(mapTileToken, tiles[tile].x, tiles[tile].y, map1Floor.tile_size.height, map1Floor.tile_size.width);
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(tiles[tile].x, tiles[tile].y, map1Floor.tile_size.height, map1Floor.tile_size.width);
      }
      ctx.drawImage(startAreaGlyph, map1.glyphs.start_area.x, map1.glyphs.start_area.y, map1Floor.tile_size.height, map1Floor.tile_size.width);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(map1.glyphs.start_area.x, map1.glyphs.start_area.y, map1Floor.tile_size.height, map1Floor.tile_size.width);
    }
    function drawMonsterToken() {
      ctx.drawImage(skeletonTokenId,
        map1.monsters.skeletonToken.x,
        map1.monsters.skeletonToken.y,
        map1.monsters.skeletonToken.w,
        map1.monsters.skeletonToken.h);
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
        <canvas ref={canvas} id='canvas' width={mapSize.width} height={mapSize.height}></canvas>
      </div >
    </div>
  );
}

export default Canvas;