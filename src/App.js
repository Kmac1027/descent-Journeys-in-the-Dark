
import './styles/App.css';
import Player from './components/Player'
import Canvas from './components/Canvas'
import TilesAndTokens from './components/TilesAndTokens'

function App() {
  return (
    <div className="App">
      <header>
        <TilesAndTokens />
        <Canvas />
        <Player />


      </header>

    </div >
  );
}

export default App;
