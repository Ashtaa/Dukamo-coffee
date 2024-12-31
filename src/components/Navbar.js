import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/Navbar.css'

function Navbar() {
  return (
    <div className='nav-container' >
        <h1 className='logo'>logo</h1>
      <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
      <Link to='/projects'>project</Link>
      <Link to='/contact'>contact Us</Link>
      </nav>
    </div>
  )
}

export default Navbar
