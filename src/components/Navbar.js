import React from 'react'
import logo from '../logo.svg'


function NavBar() {
  return (
    <header>
      <nav>
        <img className='logo' src= { logo } alt='logo'/>
        <h3 className='logo-text'>ReactFacts</h3>
        <h4 className='nav-text'>Simple Page</h4>
      </nav>
    </header>
  )
}

export default NavBar