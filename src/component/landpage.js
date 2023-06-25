import React from 'react'
import '../style/landpage.css'
import Logo from '../assets/LogoWC.png'

function Landpage() {
  return (
    <div className='land-back'>
        <div className='land-main'>
        <img src={Logo} alt='Dcyber Logo' />
      </div>
    </div>
  )
}

export default Landpage
