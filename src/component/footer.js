import React from 'react';
import '../style/footer.css';

function Footer() {
  return (
    <div className='foot'>
      <footer>
        <div className="main-content">
          <div className="left box">
            <h2>Social</h2>
            <div className="content">
              
              <div className="social">
                <a href=""><span className="fab fa-facebook-f"></span></a>
                <a href=""><span className="fab fa-twitter"></span></a>
                <a href=""><span className="fab fa-instagram"></span></a>
                <a href=""><span className="fab fa-youtube"></span></a>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">D-6, Laxmi Vishnu Chs, Plot no.617 Sector-6, Domino pizza street,

charkop, Kandivali West, Mumbai-400067, Maharashtra , INDIA</span>
              </div>
              
            </div>
          </div>
          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
            <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text"><a href='tel:+919820293767'>+91 9820293767</a></span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text"><a href='mailto:contactus@dcyber.in'>contactus@dcyber.in</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit">Created By <a href="https://www.linkedin.com/in/archit-jain-6021711aa">Archit Jain</a> | </span>
            <span className="far fa-copyright"></span>
            <span>Copyright <a href='/'> © DCyber Techlab Private Ltd.</a>, All Right Reserved.</span>
          </center>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
