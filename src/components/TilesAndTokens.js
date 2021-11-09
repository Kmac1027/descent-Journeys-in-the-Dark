import { map1, map1Floor } from '../data/dungeonMaps/map1';
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
        <img id='mapTileToken' src={map1Floor.floor_image_path} alt={'map tile'} />
      </div >
      <div>
        {/* monster tokens */}
        {/* {monsterArray.map((monster, i) =>
          <div key={monster.name + i}>
            <img id={monster.name + i} src={monster.token_path} alt={monster.name}></img>
          </div>
        )} */}
        <img id='skeleton' src={monsterData.skeleton.normal.token_path} alt={'skeleton token'} />
      </div>
      {/* items and icons */}
      <div>
        <img id='startAreaGlyph' src={map1.glyphs.white_glyph_img_path} alt={'start area glyph'} />
      </div >

    </div>
  );
}

export default TilesAndTokens;
