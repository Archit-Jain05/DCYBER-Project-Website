import React,{useEffect} from 'react'
import '../style/framework.css'
import i1 from '../assets/Framework.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Framework() {
useEffect(()=>{
AOS.init({duration: 1500})
},[])
  return (
    <div className='framework-main'>
      <h1 data-aos='fade-up' className='head'>Framework</h1>
      <img src={i1} data-aos='fade-up' alt='Dcyber Logo'/>
    </div>
  )
}

export default Framework
