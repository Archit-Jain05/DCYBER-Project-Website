import React, { useState, useEffect }  from 'react'
import '../style/team.css'
import def from '../assets/def.png'


function Team() {
  const [activeRadio, setActiveRadio] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveRadio((prevRadio) => {
        if (prevRadio === 4) {
          return 1;
        } else {
          return prevRadio + 1;
        }
      });
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [activeRadio]);

  return (
    <div className='top'>
       <h1>Team</h1>
    <div className='main'>
     
  <div class="container">
          <input type='radio' name='dot' id='one' checked={activeRadio === 1} />
          <input type='radio' name='dot' id='two' checked={activeRadio === 2} />
          <input type='radio' name='dot' id='three' checked={activeRadio === 3} />
          <input type='radio' name='dot' id='four' checked={activeRadio === 4} />


      <div class="main-card">

        <div class="cards">
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>

          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
        </div>
        
        <div class="cards">
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
        </div>

        <div class="cards">
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="NA" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
          <div class="card">
          <div class="content">
            <div class="img">
              <img src={def} alt="" />
            </div>
            <div class="details">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
            <div class="media-icons">
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="button">
      <label htmlFor='one' className={activeRadio === 1 ? 'active one' : 'one'}></label>
          <label htmlFor='two' className={activeRadio === 2 ? 'active two' : 'two'}></label>
          <label htmlFor='three' className={activeRadio === 3 ? 'active three' : 'three'}></label>
          <label htmlFor='four' className={activeRadio === 4 ? 'active four' : 'four'}></label>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Team
