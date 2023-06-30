import React,{useRef,useEffect} from 'react'
import '../style/navbar.css'
import { Link } from 'react-scroll';
import Logo from '../assets/LogoW.png'

function Navbar() {


  const openactive=useRef(null)
  const closeactive=useRef(null)
  const navactive=useRef(null)
  const navcolactive=useRef(null)
  const navlogoactive=useRef(null)
  const naviconactive=useRef(null)
  const navcurrentactive=useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 80;
      if(window.innerWidth > 980) { // code when in laptop view
        if (window.scrollY >= scrollThreshold) {
          navcolactive.current.classList.add('active')
          navlogoactive.current.classList.add('active')
          naviconactive.current.classList.add('active')
          navcurrentactive.current.classList.add('active')
          navactive.current.classList.remove('active')
        } else {
          navcolactive.current.classList.remove('active')
          naviconactive.current.classList.remove('active')
          navlogoactive.current.classList.remove('active')
          navcurrentactive.current.classList.remove('active')
          navactive.current.classList.add('active')
          openactive.current.classList.add('active')
          closeactive.current.classList.remove('active')
        }
    } else { //code when in mobile view
        if (window.scrollY >= scrollThreshold) {
          navlogoactive.current.classList.add('active')
          navcolactive.current.classList.add('active')
        } else {
          navlogoactive.current.classList.remove('active')
          navcolactive.current.classList.remove('active')
        }
    }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  const onbutton = () => {
    openactive.current.classList.toggle('active')
    closeactive.current.classList.toggle('active')
    navactive.current.classList.toggle('active')
    navcurrentactive.current.classList.toggle('active')
  }

  return (
    <nav className='navbar-main' ref={navcolactive}>
      <div className='nav-left' ref={navlogoactive}>
        <a href='/'><img src={Logo} alt='Dcyber Logo' /></a>
      </div>

      <div className='nav-right active' ref={navactive}>
        <ul>
        <li><Link to="Home" smooth={true} duration={500} className='link' onClick={onbutton}>Home</Link></li>
        <li><Link to="Service" smooth={true} duration={500} className='link' onClick={onbutton}>Services</Link></li>
        <li><Link to="service" smooth={true} duration={500} className='link' onClick={onbutton}>Partners</Link></li>
        <li><Link to="Framework" smooth={true} duration={500} className='link' onClick={onbutton}>Framework</Link></li>
        <li><Link to="service" smooth={true} duration={500} className='link' onClick={onbutton}>About us</Link></li>
        <li><Link to="service" smooth={true} duration={500} className='link' onClick={onbutton}>Team</Link></li>
        <li><Link to="service" smooth={true} duration={500} className='link' onClick={onbutton}>Blog</Link></li>
        <li><Link to="service" smooth={true} duration={500} className='link' onClick={onbutton}>Contact us</Link></li>

        </ul>
      </div>
      <div className='icons' ref={naviconactive}>
        <div className='navopen active' ref={openactive}>
          <button onClick={onbutton}>
        <ion-icon name="reorder" ></ion-icon>
        </button>
        </div>
        <div className='navclose' ref={closeactive}>
          <button onClick={onbutton}>
        <ion-icon name="close"></ion-icon>
        </button>
        </div>
        </div>
        <div className='Current-view' ref={navcurrentactive}>
          {myVariable}
      </div>
    </nav>
  )
}

export default Navbar
export let myVariable = '';
export function setMyVariable(value) {
  myVariable = value;
}
