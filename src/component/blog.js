import React from 'react'
import '../style/blog.css'
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.jpg'
import Blog3 from '../assets/blog3.jpg'

function Blog() {
  return (
    <div className='blog-main'>
        <h1>Blogs</h1>
      <div className='blog-container'>
        <div className='blogs'>
            <div className='image'>
                <img src={Blog1} alt='blog1'></img>
            </div>
            <div className='blog'>
                    <h2>HOW EMAIL ATTACKS ARE EVOLVING IN 2021</h2>
                    <p>It’s all too common to see “fear appeals” used to stimulate users to keep their guards up against the enormous amount of cybercriminal activity that arises online every day. The term FUD (Fear, Uncertainty, and Doubt) was initially coined in the 1970s about IBM’s marketing technique of spreading scary rumors about a competitor’s new product. […]</p>
            </div>
            <button name='Read More' className='button-container'>Read More</button>
        </div>

        <div className='blogs'>
            <div className='image'>
                <img src={Blog2} alt='blog2'></img>
            </div>
            <div className='blog'>
              <h2>PROTECT YOUR IT INFRASTRUCTURE FROM VIRTUAL PRIVATE NETWORK</h2>
                    <p>As we increase our dependency upon networked communication, the incentive to compromise and degrade network performance rises for those who disrupt information flow. Attacks that cause loss of network performance can come in various types, including but not limited to distributed denial of service (DDoS) attacks, cutting wires, jamming transmissions, and eavesdropping. Users can safeguard […]</p>
            </div>
            <button name='Read More' className='button-container'>Read More</button>
        </div>

        <div className='blogs'>
            <div className='image'>
            <img src={Blog3} alt='blog3'></img>
            </div>
            <div className='blog'>
                    <h2>DCYBER IS HAPPY TO ANNOUNCE PARTNERSHIP WITH SECURECLOUDDB</h2>
                    <p><a href='HTTPS://WWW.SECURECLOUDDB.COM/'>HTTPS://WWW.SECURECLOUDDB.COM/</a></p>
            </div>
            <button name='Read More' className='button-container'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
