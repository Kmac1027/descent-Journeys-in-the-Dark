import '../styles/canvas.css';
import React, { useEffect, useRef } from "react";
import { heroToken, keyDown, keyUp, detectWalls } from '../player_actions/movement';


export let runLoop = {
  x: 0,
  y: 0
};

function Canvas({ chosenQuest, collisionDetection }) {
  const canvas = useRef(null);

  useEffect(() => {
    //drawing on canvas
    const ctx = canvas.current.getContext("2d");

    let startAreaLabelId = document.getElementById("startLabel");
    let area1LabelId = document.getElementById("area1Label");
    let area2LabelId = document.getElementById("area2Label");
    let area3LabelId = document.getElementById("area3Label");
    let area4LabelId = document.getElementById("area4Label");
    let area5LabelId = document.getElementById("area5Label");
    let area6LabelId = document.getElementById("area6Label");
    let area7LabelId = document.getElementById("area7Label");
    let area8LabelId = document.getElementById("area8Label");
    let blackoutId = document.getElementById("blackout");
    let heroTokenId = document.getElementById("heroToken");
    let town = document.getElementById("town");
    let mapTileTokenId = document.getElementById("mapTileToken");
    let startAreaGlyphId = document.getElementById("whiteGlyph");
    let redGlyphId = document.getElementById("redGlyph");
    let markerId = document.getElementById("marker");
    let healthPotionId = document.getElementById("healthPotion");
    let vitalityPotionId = document.getElementById("vitalityPotion");
    let copperChestId = document.getElementById("copperChest");
    let goldChestId = document.getElementById("goldChest");
    let silverChestId = document.getElementById("silverChest");
    let normalDoor = document.getElementById("normal_door");
    let redDoor = document.getElementById("red_door");
    let yellowDoor = document.getElementById("yellow_door");
    let blueDoor = document.getElementById("blue_door");
    let normalDoorVert = document.getElementById("normal_door_vert");
    let redDoorVert = document.getElementById("red_door_vert");
    let yellowDoorVert = document.getElementById("yellow_door_vert");
    let blueDoorVert = document.getElementById("blue_door_vert");
    let redRuneKeyId = document.getElementById("red_rune_key");
    let yellowRuneKeyId = document.getElementById("yellow_rune_key");
    let blueRuneKeyId = document.getElementById("blue_rune_key");
    let goldPileId = document.getElementById("gold_pile");
    let rubbleId = document.getElementById("rubble");
    let pitId = document.getElementById("pit");
    let waterId = document.getElementById("water");

    //town doesn't draw
    function drawTown() {
      ctx.drawImage(
        town,
        chosenQuest.town.x,
        chosenQuest.town.y,
        chosenQuest.town.h,
        chosenQuest.town.w
      );
    }

    function drawLevel() {
      //labels
      let labels = chosenQuest.labels;
      ctx.drawImage(
        startAreaLabelId,
        labels.start_area.x,
        labels.start_area.y,
        labels.start_area.width,
        labels.start_area.height
      );
      if (labels.area1) {
        ctx.drawImage(
          area1LabelId,
          labels.area1.x,
          labels.area1.y,
          labels.area1.width,
          labels.area1.height
        );
      }
      if (labels.area2) {
        ctx.drawImage(
          area2LabelId,
          labels.area2.x,
          labels.area2.y,
          labels.area2.width,
          labels.area2.height
        );
      }
      if (labels.area3) {
        ctx.drawImage(
          area3LabelId,
          labels.area3.x,
          labels.area3.y,
          labels.area3.width,
          labels.area3.height
        );
      }
      if (labels.area4) {
        ctx.drawImage(
          area4LabelId,
          labels.area4.x,
          labels.area4.y,
          labels.area4.width,
          labels.area4.height
        );
      }
      if (labels.area5) {
        ctx.drawImage(
          area5LabelId,
          labels.area5.x,
          labels.area5.y,
          labels.area5.width,
          labels.area5.height
        );
      }
      if (labels.area6) {
        ctx.drawImage(
          area6LabelId,
          labels.area6.x,
          labels.area6.y,
          labels.area6.width,
          labels.area6.height
        );
      }
      if (labels.area7) {
        ctx.drawImage(
          area7LabelId,
          labels.area7.x,
          labels.area7.y,
          labels.area7.width,
          labels.area7.height
        );
      }
      if (labels.area8) {
        ctx.drawImage(
          area8LabelId,
          labels.area8.x,
          labels.area8.y,
          labels.area8.width,
          labels.area8.height
        );
      }

      //floor tiles
      let tiles = chosenQuest.floor.floor_tiles;
      for (let tile in tiles) {
        ctx.drawImage(
          mapTileTokenId,
          tiles[tile].x,
          tiles[tile].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(
          tiles[tile].x,
          tiles[tile].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      //Obstacles
      let rubble = chosenQuest.tokenPlacement.obstacles.rubble;
      let pits = chosenQuest.tokenPlacement.obstacles.pits;
      let water = chosenQuest.tokenPlacement.obstacles.water;
      for (let rock in rubble) {
        ctx.drawImage(
          rubbleId,
          rubble[rock].x,
          rubble[rock].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      for (let pit in pits) {
        ctx.drawImage(
          pitId,
          pits[pit].x,
          pits[pit].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      for (let pool in water) {
        ctx.drawImage(
          waterId,
          water[pool].x,
          water[pool].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }

      //glyphs
      ctx.drawImage(
        startAreaGlyphId,
        chosenQuest.tokenPlacement.start_area.x,
        chosenQuest.tokenPlacement.start_area.y,
        chosenQuest.floor.tile_size.width,
        chosenQuest.floor.tile_size.height
      );
      ctx.strokeStyle = "#ffffff";
      ctx.strokeRect(
        chosenQuest.tokenPlacement.start_area.x,
        chosenQuest.tokenPlacement.start_area.y,
        chosenQuest.floor.tile_size.width,
        chosenQuest.floor.tile_size.height
      );

      let glyphs = chosenQuest.tokenPlacement.glyphs;
      for (let glyph in glyphs) {
        ctx.drawImage(
          redGlyphId,
          glyphs[glyph].x,
          glyphs[glyph].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "red";
        ctx.strokeRect(
          glyphs[glyph].x,
          glyphs[glyph].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }

      let activatedGlyphs = chosenQuest.tokenPlacement.activated_glyphs;
      for (let glyph in activatedGlyphs) {
        ctx.drawImage(
          startAreaGlyphId,
          activatedGlyphs[glyph].x,
          activatedGlyphs[glyph].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(
          activatedGlyphs[glyph].x,
          activatedGlyphs[glyph].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }

      // potions and items
      let hps = chosenQuest.tokenPlacement.items.health_potions;
      let vps = chosenQuest.tokenPlacement.items.vitality_potions;
      for (let hp in hps) {
        ctx.drawImage(
          healthPotionId,
          hps[hp].x,
          hps[hp].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(
          hps[hp].x,
          hps[hp].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      for (let vp in vps) {
        ctx.drawImage(
          vitalityPotionId,
          vps[vp].x,
          vps[vp].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(
          vps[vp].x,
          vps[vp].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      //treasurechests
      let copperChest = chosenQuest.tokenPlacement.treasure_chests.copper;
      let silverChest = chosenQuest.tokenPlacement.treasure_chests.silver;
      let goldChest = chosenQuest.tokenPlacement.treasure_chests.gold;
      for (let chest in copperChest) {
        ctx.drawImage(
          copperChestId,
          copperChest[chest].x,
          copperChest[chest].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#b87333";
        ctx.strokeRect(
          copperChest[chest].x,
          copperChest[chest].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      for (let chest in silverChest) {
        ctx.drawImage(
          silverChestId,
          silverChest[chest].x,
          silverChest[chest].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#c0c0c0";
        ctx.strokeRect(
          silverChest[chest].x,
          silverChest[chest].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      for (let chest in goldChest) {
        ctx.drawImage(
          goldChestId,
          goldChest[chest].x,
          goldChest[chest].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
        ctx.strokeStyle = "#ffd700";
        ctx.strokeRect(
          goldChest[chest].x,
          goldChest[chest].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }

      let goldPile = chosenQuest.tokenPlacement.gold_pile;
      for (let pile in goldPile) {
        ctx.drawImage(
          goldPileId,
          goldPile[pile].x,
          goldPile[pile].y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }

      if (chosenQuest.tokenPlacement.rune_keys.red) {
        ctx.drawImage(
          redRuneKeyId,
          chosenQuest.tokenPlacement.rune_keys.red.x,
          chosenQuest.tokenPlacement.rune_keys.red.y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      if (chosenQuest.tokenPlacement.rune_keys.yellow) {
        ctx.drawImage(
          yellowRuneKeyId,
          chosenQuest.tokenPlacement.rune_keys.yellow.x,
          chosenQuest.tokenPlacement.rune_keys.yellow.y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
      if (chosenQuest.tokenPlacement.rune_keys.blue) {
        ctx.drawImage(
          blueRuneKeyId,
          chosenQuest.tokenPlacement.rune_keys.blue.x,
          chosenQuest.tokenPlacement.rune_keys.blue.y,
          chosenQuest.floor.tile_size.width,
          chosenQuest.floor.tile_size.height
        );
      }
    }

    function drawMonsterToken() {
      let monsters = chosenQuest.tokenPlacement.monsters;
      for (let monster in monsters) {
        // if (monsters[monster].type === "normal") {
        let imgId = document.getElementById(monsters[monster].name);
        ctx.drawImage(
          imgId,
          monsters[monster].x,
          monsters[monster].y,
          monsters[monster].w,
          monsters[monster].h
        );
        // } else {
        // let imgId = document.getElementById(monsters[monster].name);
        // ctx.drawImage(
        //   imgId,
        //   monsters[monster].x,
        //   monsters[monster].y,
        //   monsters[monster].w,
        //   monsters[monster].h
        // );
        // }
      }
      //marker
      ctx.drawImage(
        markerId,
        chosenQuest.tokenPlacement.marker.x,
        chosenQuest.tokenPlacement.marker.y,
        50,
        50
      );
    }

    function drawDoors() {
      let doors = chosenQuest.tokenPlacement.doors.horizontal.normal;
      let redDoors = chosenQuest.tokenPlacement.doors.horizontal.red;
      let yellowDoors = chosenQuest.tokenPlacement.doors.horizontal.yellow;
      let blueDoors = chosenQuest.tokenPlacement.doors.horizontal.blue;

      let vertDoors = chosenQuest.tokenPlacement.doors.vertical.normal;
      let vertRedDoors = chosenQuest.tokenPlacement.doors.vertical.red;
      let vertYellowDoors = chosenQuest.tokenPlacement.doors.vertical.yellow;
      let vertBlueDoors = chosenQuest.tokenPlacement.doors.vertical.blue;
      //horizontal doors
      for (let door in doors) {
        ctx.drawImage(
          normalDoor,
          doors[door].x,
          doors[door].y,
          chosenQuest.floor.tile_size.width * 4,
          chosenQuest.floor.tile_size.height * 2
        );
      }
      for (let door in redDoors) {
        ctx.drawImage(
          redDoor,
          redDoors[door].x,
          redDoors[door].y,
          chosenQuest.floor.tile_size.width * 4,
          chosenQuest.floor.tile_size.height * 2
        );
      }
      for (let door in yellowDoors) {
        ctx.drawImage(
          yellowDoor,
          yellowDoors[door].x,
          yellowDoors[door].y,
          chosenQuest.floor.tile_size.width * 4,
          chosenQuest.floor.tile_size.height * 2
        );
      }
      for (let door in blueDoors) {
        ctx.drawImage(
          blueDoor,
          blueDoors[door].x,
          blueDoors[door].y,
          chosenQuest.floor.tile_size.width * 4,
          chosenQuest.floor.tile_size.height * 2
        );
      }
      //vertical doors
      for (let door in vertDoors) {
        ctx.drawImage(
          normalDoorVert,
          vertDoors[door].x,
          vertDoors[door].y,
          chosenQuest.floor.tile_size.width * 2,
          chosenQuest.floor.tile_size.height * 4
        );
      }
      for (let door in vertRedDoors) {
        ctx.drawImage(
          redDoorVert,
          vertRedDoors[door].x,
          vertRedDoors[door].y,
          chosenQuest.floor.tile_size.width * 2,
          chosenQuest.floor.tile_size.height * 4
        );
      }
      for (let door in vertYellowDoors) {
        ctx.drawImage(
          yellowDoorVert,
          vertYellowDoors[door].x,
          vertYellowDoors[door].y,
          chosenQuest.floor.tile_size.width * 2,
          chosenQuest.floor.tile_size.height * 4
        );
      }
      for (let door in vertBlueDoors) {
        ctx.drawImage(
          blueDoorVert,
          vertBlueDoors[door].x,
          vertBlueDoors[door].y,
          chosenQuest.floor.tile_size.width * 2,
          chosenQuest.floor.tile_size.height * 4
        );
      }
    }

    function drawUnexploredAreas() {
      let unexplored = chosenQuest.unexplored;
      for (let area in unexplored) {
        for (let placement in unexplored[area])
          ctx.drawImage(
            blackoutId,
            unexplored[area][placement].x,
            unexplored[area][placement].y,
            unexplored[area][placement].width,
            unexplored[area][placement].height
          );
      }
    }

    function drawHeroToken() {
      ctx.drawImage(
        heroTokenId,
        heroToken.x,
        heroToken.y,
        heroToken.w,
        heroToken.h
      );
      ctx.strokeStyle = "#ffffff";
      ctx.strokeRect(heroToken.x, heroToken.y, heroToken.w, heroToken.h);
    }

    function newPosition() {
      heroToken.x += heroToken.dx;
      heroToken.y += heroToken.dy;
      collisionDetection(runLoop.x, runLoop.y);
      detectWalls(canvas.current);
    }
    function clear() {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }
    function update() {
      clear();
      drawLevel();
      drawMonsterToken();
      drawUnexploredAreas();
      drawDoors();
      drawTown();
      drawHeroToken();
      newPosition();
      // collisionDetection(runLoop.x, runLoop.y);
      requestAnimationFrame(update);
    }
    update();
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