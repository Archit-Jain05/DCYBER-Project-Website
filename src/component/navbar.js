import React from 'react'
import '../styles/navbar.css'
import Logo from '../assets/LogoW.png'

function navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'><img src={Logo} alt='Dcyber Logo' className='logo'/></div>

      <div className='rightside'>hi right</div>
    </div>
  )
}

export default navbar
