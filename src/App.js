import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import './App.css';
import { setMyVariable } from './component/navbar';
import Navbar from './component/navbar';
import Land from './component/landpage';
import Service from './component/service';
import Footer from './component/footer';
import Framework from './component/framework';
import Partner from './component/partner';




function App() {

  const [visibleComponent, setVisibleComponent] = useState('');
  setMyVariable(visibleComponent);

  const Home = useRef(null);
  const service = useRef(null);
  const framework = useRef(null);
  const footer = useRef(null);
  const partner = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Define the visibility threshold (0.5 means 50% visible)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the visible component name when it intersects with the viewport
          setVisibleComponent(entry.target.getAttribute('data-component-name'));
        }
      });
    }, options);

    // Observe the component element when it mounts
    if (Home.current) {
      observer.observe(Home.current);
    } 
    if (service.current) {
      observer.observe(service.current)
    }
    if (footer.current) {
      observer.observe(footer.current)
    }
    if (framework.current) {
      observer.observe(framework.current)
    }
    if (partner.current) {
      observer.observe(partner.current)
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (Home.current) {
        observer.unobserve(Home.current);
      }
      if (service.current) {
        observer.unobserve(service.current);
      }
      if (footer.current) {
        observer.unobserve(footer.current);
      }
      if (framework.current) {
        observer.unobserve(framework.current);
      }
      if (partner.current) {
        observer.unobserve(partner.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <Element name='Home'>
      <Navbar />
      </Element>

      <div ref={Home} data-component-name="Home">
      <Element name="Home">
      <Land />
      </Element>
      </div>
      
      <div ref={service} data-component-name="Service">
      <Element name="Service">
      <Service />
      </Element>
      </div>

      <div ref={partner} data-component-name="Partners">
      <Element name="Partner">
      <Partner />
      </Element>
      </div>


      <div ref={framework} data-component-name="Framework">
      <Element name="Framework">
      <Framework />
      </Element>
      </div>

      <div ref={footer} data-component-name="Contact us">
      <Element name="Footer">
      <Footer />
      </Element>
      </div>
     
    </div>
  );
}

export default App;
