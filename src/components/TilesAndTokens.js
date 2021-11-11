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
        <img id='mapTileToken' src={map1.map1Floor.floor_image_path} alt={'map tile'} />
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
      </div >

    </div>
  );
}

export default TilesAndTokens;
