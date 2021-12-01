import { map1 } from '../data/dungeonMaps/map1';
import { heroData } from '../data/heroData.js';
import { monsterData } from '../data/monsterData.js';


function TilesAndTokens({ chosenHero }) {
  let monsterArray = [];
  for (let key in map1.monsters) {
    monsterArray.push(map1.monsters[key])
  }
  // console.log(monsterArray)

  return (
    <div className='hidden'>
      {/* hero tokens */}
      <div>
        <img id='heroToken' src={heroData[chosenHero].token_path} alt={heroData[chosenHero].name} />
      </div >
      {/* dungeon floor tiles */}
      <div>
        <img id='mapTileToken' src={'images/map_tiles/floors/corridor_2x2.png'} alt={'map tile'} />
        <img id='marker' src={'images/map_tiles/marker.png'} alt={'target marker'} />
      </div >
      <div>
        {/* monster tokens */}
        <img id='skeleton' src={'images/monster_token/skeleton.png'} alt={'Skeleton token'} />
        <img id='masterSkeleton' src={'images/monster_token/skeleton_master.png'} alt={'Master Skeleton token'} />
      </div>
      {/* items and icons */}
      <div>
        <img id='whiteGlyph' src={'images/map_tiles/item_icons/ancient glyph of teleportation white.jpg'} alt={'white glyph'} />
        <img id='redGlyph' src={'images/map_tiles/item_icons/ancient glyph of teleportation red.jpg'} alt={'red glyph'} />
        <img id='healthPotion' src={'images/items/shop/health_potion.png'} alt={'health potion'} />
        <img id='vitalityPotion' src={'images/items/shop/vitality_potion.png'} alt={'vitality potion'} />
        <img id='copperChest' src={'images/map_tiles/item_icons/chest_copper.png'} alt={'copper chest'} />
        <img id='silverChest' src={'images/map_tiles/item_icons/chest_silver.png'} alt={'silver chest'} />
        <img id='goldChest' src={'images/map_tiles/item_icons/chest_gold.png'} alt={'gold chest'} />
      </div >
      {/* town */}
      <div>
        <img id='town' src={'images/map_tiles/town.png'} alt={'town'} />
      </div>

    </div>
  );
}

export default TilesAndTokens;
