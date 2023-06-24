import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoW.png'

function navbar() {
  return (
    <nav className='navbar-main'>
      <div className='nav-left'>
        <img src={Logo} alt='Dcyber Logo' />
      </div>
      <div className='nav-right'>
        <Link to={'Service'}></Link>
      </div>
    </nav>
  )
}

export default navbar
