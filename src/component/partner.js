import React from 'react'
import '../style/partner.css'
import Partnersimg from '../assets/Partner1.jpg'

function Partner() {
  return (
    <div className='partner-main'>
        <h1>Our Partners</h1>
      <div className='seperate'>

      </div>
      <div className='single-img'>
        <img src={Partnersimg} alt='Partners' />
      </div>
    </div>
  )
}

export default Partner
