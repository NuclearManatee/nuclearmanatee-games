import React from 'react'
import { Link } from 'react-router-dom'

export default function Game(props){

    const {content} = props
    console.log(content)
    const {title, description, itchLink, intLink} = content

    return (<>
        <div className='game-container'>
            {content && (<>
            <h2>{title}</h2>
            <p>{description}</p>
               {itchLink && (
                   <a href={itchLink}>More on <strong>Itch.io</strong></a>
               )}
               {intLink && (
                   <Link exact to={intLink}>Find out more...</Link>
               )}
            </>)}
        </div>
    </>)
}   