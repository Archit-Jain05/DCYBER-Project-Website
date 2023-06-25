import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import './App.css';
import { setMyVariable } from './component/navbar';
import Navbar from './component/navbar';
import Land from './component/landpage';
import Service from './component/service';
import Footer from './component/footer';





function App() {

  const [visibleComponent, setVisibleComponent] = useState('');
  setMyVariable(visibleComponent);

  const Home = useRef(null);
  const service = useRef(null);
  const footer = useRef(null);

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
    };
  }, []);

  return (
    <div className="App">

      <Navbar />

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

      <div ref={footer} data-component-name="Footer">
      <Element name="Footer">
      <Footer />
      </Element>
      </div>
     
    </div>
  );
}

export default App;
