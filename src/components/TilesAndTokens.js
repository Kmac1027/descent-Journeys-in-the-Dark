import { map1 } from '../data/dungeonMaps/map1'
import { heroData } from '../data/heroData.js'


function TilesAndTokens() {
  return (
    <div className='hidden'>
      {/* hero tokens */}
      <div>
        <img id='heroToken' src={heroData.steelhorns.token_path} alt={heroData.steelhorns.name} />
      </div >
      {/* dungeon floor tiles */}
      <div>
        <img id='mapTileToken' src={map1.floor_image_path} alt={'tile'} />
      </div >
      {/* items and icons */}
      <div>
        <img id='startAreaGlyph' src={map1.start_area.start_glyph_image_path} alt={'tile'} />
      </div >

    </div>
  );
}

export default TilesAndTokens;
