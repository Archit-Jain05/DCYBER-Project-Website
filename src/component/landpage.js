import React,{useEffect} from 'react'
import '../style/landpage.css'
import Logo from '../assets/LogoWC.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Landpage() {
  useEffect(()=>{
    AOS.init({duration: 2000})
    },[])
  return (
    <div className='land-back'>
        <div className='land-main'>
        <img src={Logo} data-aos='fade-in' alt='Dcyber Logo' />
      </div>
    </div>
  )
}

export default Landpage
