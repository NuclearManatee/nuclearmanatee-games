import React, {useEffect , useState} from 'react'
import Game from './Game'
import gamesObject from '../data/games.json'
import '../styles/Games.css'

export default function Games(){

    const [games,setGames] = useState([])
    console.log(games)

    useEffect( () => {
        setGames(gamesObject)
      },[games]);
    
    return (<>
        <div className='games-container'>
            {games.length > 0 && games.map((game) => {
                return (
                    <Game key={game.id}
                    content={game.content}
                    />
                );
            })}
            <p></p>
            <p>You can find more on <strong><a href='nuclearmanatee.itch.io'>itch.io</a></strong>.</p>
        </div>
    </>)
}