import React, { useState } from 'react'
import '../style/footer.css'

function Footer() {



  return (
    <div className='main'>
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>About us</h2>
          <div class="content">
            <p>DCYBER is Start-up in the field of Digital Cyber Security. DCYBER is introduce by the International Identity and 
              Security Expert who is been working for Africa Government and US and India Multinational Financial institution, Mutual 
              Fund in the domain of Infrastructure and Security. </p><br /><p>DCYBER primary focus is Cyber Consulting & Cyber Advisory role. 
              Security Assessment and Gap Analysis. VAPT of Network and Applications. Cyber Frame work and Policy build. Preparation 
              for ISO,SOX and regulator audits.</p>
            <div class="social">
              <a href="/"><span class="fab fa-facebook-f"></span></a>
              <a href="/"><span class="fab fa-twitter"></span></a>
              <a href="/"><span class="fab fa-instagram"></span></a>
              <a href="/"><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">D-6, Laxmi Vishnu Chs, Plot no.617 Sector-6, Domino pizza street, charkop, Kandivali West, Mumbai-400067, Maharashtra , INDIA</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text"><a href="tel:+91 9820293767 (India)">+91 9820293767</a></span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text"><a href='mailto:contactus@dcyber.in'>contactus@dcyber.in</a></span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form>
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required />
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Created By <a href="https://www.linkedin.com/in/archit-jain-6021711aa" target='blank'>Archit Jain</a> |  </span>
          <span class="far fa-copyright">DCyber Techlab Private Ltd. , All Right Reserved.</span>
        </center>
      </div>
    </footer>
    </div>
  )
}

export default Footer
