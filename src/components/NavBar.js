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
            <NavLink to='/newsletter' activeClassName='navlink-selected'>
                Newsletter
            </NavLink>
        </div>
    </>)
}