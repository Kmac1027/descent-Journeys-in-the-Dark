import { useEffect } from 'react'
import { heroToken } from '../player_actions/movement'
import { monsterData } from '../data/monsterData.js';

function Overlord({ chosenHero, chosenQuest, turn, setTurn }) {


  useEffect(() => {
    if (turn === 'overlord') {
      alert('overlords turn')
      setTimeout(() => { setTurn('player') }, 2000)

    }
  }, [turn])

  return (
    <>
    </>
  );
}

export default Overlord;