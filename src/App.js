import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import Navbar from './component/navbar';
import Land from './component/landpage';
import Service from './component/service';
import { setMyVariable } from './component/navbar';




function App() {

  const [visibleComponent, setVisibleComponent] = useState('');
  setMyVariable(visibleComponent);

  const Home = useRef(null);
  const componentRef2 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Define the visibility threshold (0.5 means 50% visible)
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
    if (componentRef2.current) {
      observer.observe(componentRef2.current)
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (Home.current) {
        observer.unobserve(Home.current);
      }
      if (componentRef2.current) {
        observer.unobserve(componentRef2.current);
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
      <Element name="Service">
      <div ref={componentRef2} data-component-name="Service">
      <Service />
      </div>
      </Element>
    </div>
  );
}

export default App;
