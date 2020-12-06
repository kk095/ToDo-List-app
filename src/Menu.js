import React from 'react'
import './Menu.css'
import {NavLink} from 'react-router-dom'

function Menu(){
   
    return(
        <>
        <div className='navbar'>
            <ul>
                <NavLink activeClassName="list" className="li"  to="/">ToDo List</NavLink>
                <NavLink activeClassName="list" className="li"  to="/contect">Search
                </NavLink>
            </ul>
        </div>
        </>
    )
}

export default Menu ;