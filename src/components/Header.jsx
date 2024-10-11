import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header-container">
      <Link to='/' className='logo'>pulsy</Link>
      <div className="header-links">
        <NavLink to='about'>About</NavLink>
        <NavLink  to='vans'>Vans</NavLink>
        <NavLink  to='hosts'>Hosts</NavLink>
      </div>
    </div>
  )
}
