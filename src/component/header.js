import React from 'react'
import '../styles/Header.css'
import LogoW from '../assets/LogoW.png'

function header() {
  return (
    <div>
      <div className="left"><p><img src={LogoW} alt='Dcyber Logo' className='left'></img></p></div>
      <div className="right">hiiii</div>
    </div>
  )
}

export default header
