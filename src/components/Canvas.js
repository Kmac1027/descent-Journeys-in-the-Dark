import '../styles/canvas.css';
import React, { useEffect, useRef } from "react";
// import { heroData } from '../data/heroData'
import { heroToken, keyDown, keyUp, detectWalls } from '../player_actions/movement'
import { collisionDetection, map1 } from '../data/dungeonMaps/map1'


export let runLoop = {
  x: 0,
  y: 0
}

function Canvas() {
  const canvas = useRef(null);

  useEffect(() => {

    //drawing on canvas
    const ctx = canvas.current.getContext('2d');
    let heroTokenId = document.getElementById('heroToken');
    let town = document.getElementById('town');
    let mapTileTokenId = document.getElementById('mapTileToken');
    let startAreaGlyphId = document.getElementById('whiteGlyph');
    let markerId = document.getElementById('marker');

    function drawTown() {
      ctx.drawImage(town, map1.town.x, map1.town.y, map1.town.h, map1.town.w);
    }
    function drawLevel() {
      //floor tiles
      let tiles = map1.map1Floor.floor_tiles;
      for (let tile in tiles) {
        ctx.drawImage(mapTileTokenId, tiles[tile].x, tiles[tile].y, map1.map1Floor.tile_size.height, map1.map1Floor.tile_size.width);
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(tiles[tile].x, tiles[tile].y, map1.map1Floor.tile_size.height, map1.map1Floor.tile_size.width);
      }
      //glyphs
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
      //marker
      ctx.drawImage(markerId, map1.tokenPlacement.marker.x, map1.tokenPlacement.marker.y, 50, 50)
    }
    function drawHeroToken() {
      ctx.drawImage(heroTokenId, heroToken.x, heroToken.y, heroToken.w, heroToken.h);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(heroToken.x, heroToken.y, heroToken.w, heroToken.h);
    }

    function newPosition() {
      heroToken.x += heroToken.dx;
      heroToken.y += heroToken.dy;
      collisionDetection(runLoop.x, runLoop.y);
      detectWalls(canvas.current);
    }
    function clear() {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    }
    function update() {
      clear();
      drawLevel();
      drawMonsterToken();
      drawTown();
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