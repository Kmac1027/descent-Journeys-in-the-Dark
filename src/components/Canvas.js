import '../styles/canvas.css';
import React, { useEffect, useRef } from "react";
import { heroToken, keyDown, keyUp, detectWalls } from '../player_actions/movement'
// import { collisionDetection, map1 } from '../data/dungeonMaps/map1'


export let runLoop = {
  x: 0,
  y: 0
}

function Canvas({ chosenQuest, collisionDetection }) {
  const canvas = useRef(null);

  useEffect(() => {

    //drawing on canvas
    const ctx = canvas.current.getContext('2d');
    let heroTokenId = document.getElementById('heroToken');
    let town = document.getElementById('town');
    let mapTileTokenId = document.getElementById('mapTileToken');
    let startAreaGlyphId = document.getElementById('whiteGlyph');
    let redGlyphId = document.getElementById('redGlyph');
    let markerId = document.getElementById('marker');
    let healthPotionId = document.getElementById('healthPotion');
    let vitalityPotionId = document.getElementById('vitalityPotion');
    let copperChestId = document.getElementById('copperChest');
    let goldChestId = document.getElementById('goldChest');
    let silverChestId = document.getElementById('silverChest');

    function drawTown() {
      ctx.drawImage(town, chosenQuest.town.x, chosenQuest.town.y, chosenQuest.town.h, chosenQuest.town.w);
    }
    function drawLevel() {
      //floor tiles
      let tiles = chosenQuest.floor.floor_tiles;
      for (let tile in tiles) {
        ctx.drawImage(mapTileTokenId, tiles[tile].x, tiles[tile].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(tiles[tile].x, tiles[tile].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }
      //glyphs
      ctx.drawImage(startAreaGlyphId, chosenQuest.tokenPlacement.start_area.x, chosenQuest.tokenPlacement.start_area.y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(chosenQuest.tokenPlacement.start_area.x, chosenQuest.tokenPlacement.start_area.y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);

      let glyphs = chosenQuest.tokenPlacement.glyphs;
      for (let glyph in glyphs) {
        ctx.drawImage(redGlyphId, glyphs[glyph].x, glyphs[glyph].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = 'red';
        ctx.strokeRect(glyphs[glyph].x, glyphs[glyph].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }

      let activatedGlyphs = chosenQuest.tokenPlacement.activated_glyphs;
      for (let glyph in activatedGlyphs) {
        ctx.drawImage(startAreaGlyphId, activatedGlyphs[glyph].x, activatedGlyphs[glyph].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(activatedGlyphs[glyph].x, activatedGlyphs[glyph].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }

      // potions and items
      let hps = chosenQuest.tokenPlacement.items.health_potions
      let vps = chosenQuest.tokenPlacement.items.vitality_potions
      for (let hp in hps) {
        ctx.drawImage(healthPotionId, hps[hp].x, hps[hp].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(hps[hp].x, hps[hp].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }
      for (let vp in vps) {
        ctx.drawImage(vitalityPotionId, vps[vp].x, vps[vp].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(vps[vp].x, vps[vp].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }
      //treasurechests
      let copperChest = chosenQuest.tokenPlacement.treasure_chests.copper
      let silverChest = chosenQuest.tokenPlacement.treasure_chests.silver
      let goldChest = chosenQuest.tokenPlacement.treasure_chests.gold
      for (let chest in copperChest) {
        ctx.drawImage(copperChestId, copperChest[chest].x, copperChest[chest].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = '#b87333';
        ctx.strokeRect(copperChest[chest].x, copperChest[chest].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }
      for (let chest in silverChest) {
        ctx.drawImage(silverChestId, silverChest[chest].x, silverChest[chest].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = '#c0c0c0';
        ctx.strokeRect(silverChest[chest].x, silverChest[chest].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }
      for (let chest in goldChest) {
        ctx.drawImage(goldChestId, goldChest[chest].x, goldChest[chest].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width)
        ctx.strokeStyle = '#ffd700';
        ctx.strokeRect(goldChest[chest].x, goldChest[chest].y, chosenQuest.floor.tile_size.height, chosenQuest.floor.tile_size.width);
      }

    }


    function drawMonsterToken() {
      let monsters = chosenQuest.tokenPlacement.monsters;
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
      ctx.drawImage(markerId, chosenQuest.tokenPlacement.marker.x, chosenQuest.tokenPlacement.marker.y, 50, 50)
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
        <canvas ref={canvas} id='canvas' width={chosenQuest.mapSize.width} height={chosenQuest.mapSize.height}></canvas>
      </div >
    </div>
  );
}

export default Canvas;