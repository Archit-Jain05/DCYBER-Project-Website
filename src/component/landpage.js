import React,{useEffect} from 'react'
import '../style/landpage.css'
import Logo from '../assets/LogoWC.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Video from '../assets/bgv2.mp4';

function Landpage() {
  useEffect(()=>{
    AOS.init({duration: 2000})
    },[])
  return (
    <div className='land-back'>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    <div className='land-main'>
        <img src={Logo} data-aos='fade-in' alt='Dcyber Logo' />
      </div>
    </div>
  )
}

export default Landpage
