import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/Footer.css'
import {  FaPhone } from 'react-icons/fa'
import {  FaLocationPin, FaMessage } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='col1'>
       {/* <h1 className='foot-head'>logo</h1> */}
       <p>We are passionate about sourcing and exporting the world's <br /> finest specialty coffees from the most exceptional origins.</p>
       <div className='phone'>
       <FaPhone className='icon' />
         <h3>+2519 xx xx xx <br />
         +2519 xx xx xx</h3>
       </div>
       <div className='mail'>
       <FaMessage className='icon' />
         <h3>ashenafisahele@gmail.com</h3>
       </div>
       <div className='location'>
       <FaLocationPin className='icon' />
         <h3>A.A ferensay legassion infront of entoto hospital </h3>
       </div>
      </div>
      <div className='col2'>
        <h3 className='foot-head'>quick links</h3>
        <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
      <Link>project</Link>
      <Link>contact Us</Link>
      </div>
      <div className='col3'>
      <h3 className='foot-head'>project center</h3>
      <ul>
        <li>afforestation</li>
        <li>job apportunitys</li>
        <li>Coffee & Spice Development</li>
        
      </ul>
        
      </div>
      <div className='col4'>
        
      </div>
    </div>
  )
}

export default Footer
