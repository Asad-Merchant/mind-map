import React from 'react'
import mind from '../../assets/mind.jpeg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Mind Map</h2>
        <img src={mind} alt="" />
    </div>
  )
}

export default Navbar