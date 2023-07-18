import React from 'react'
import '../style/partner.css'
import Partnersimg from '../assets/Partner1.jpg'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import p11 from '../assets/p11.png'
import p12 from '../assets/p12.png'
import p13 from '../assets/p13.png'
import p14 from '../assets/p14.png'
import p15 from '../assets/p15.png'
import p16 from '../assets/p16.jpg'
import p17 from '../assets/p17.jpg'


function Partner() {
  return (
    <div className='partner-main'>
        <h1>Our Partners</h1>
      <div className='seperate'>
          <a href=''><img src={p1} alt=''></img></a>
          <a href=''><img src={p2} alt=''></img></a>
          <a href=''><img src={p3} alt=''></img></a>
          <a href=''><img src={p4} alt=''></img></a>
          <a href=''><img src={p5} alt=''></img></a>
          <a href=''><img src={p6} alt=''></img></a>
          <a href=''><img src={p7} alt=''></img></a>
          <a href=''><img src={p8} alt=''></img></a>
          <a href=''><img src={p9} alt=''></img></a>
          <a href=''><img src={p10} alt=''></img></a>
          <a href=''><img src={p11} alt=''></img></a>
          <a href=''><img src={p12} alt=''></img></a>
          <a href=''><img src={p13} alt=''></img></a>
          <a href=''><img src={p14} alt=''></img></a>
          <a href=''><img src={p15} alt=''></img></a>
          <a href=''><img src={p16} alt=''></img></a>
          <a href=''><img src={p17} alt=''></img></a>
      </div>
      <div className='single-img'>
        <img src={Partnersimg} alt='Partners' />
      </div>
    </div>
  )
}

export default Partner
