import '../styles/NavBar.css'
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {

    return(<>
        <div className='navbar-container'>
            <NavLink exact to='/' activeClassName='navlink-selected'>
                Home
            </NavLink>
            <NavLink to='/about' activeClassName='navlink-selected'>
                About
            </NavLink>
            <NavLink to='/games' activeClassName='navlink-selected'>
                Games
            </NavLink>
            <a target='_blank' rel='noreferrer' href='https://mailchi.mp/2c01d85709bb/a-message-in-the-bottle'>
                Newsletter
            </a>
        </div>
    </>)
}