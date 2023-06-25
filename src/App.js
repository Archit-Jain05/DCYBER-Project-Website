import './App.css';
import React, { useEffect, useRef, useState } from 'react';
//import { Element } from 'react-scroll';
import Navbar from './component/navbar';
import Land from './component/landpage';
import Service from './component/service';
import { setMyVariable } from './component/navbar';




function App() {

  const [visibleComponent, setVisibleComponent] = useState('');
  setMyVariable(visibleComponent);

  const componentRef = useRef(null);
  const componentRef2 = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
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
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div ref={componentRef} data-component-name="Home">
      <Land />
      </div>
      <div ref={componentRef2} data-component-name="Service">
      <Service />
      </div>
    </div>
  );
}

export default App;
