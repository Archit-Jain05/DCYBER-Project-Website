import './App.css';
import { Element } from 'react-scroll';
import Navbar from './component/navbar';
import Land from './component/landpage';
import Service from './component/service';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name='Land Page'>
      <Land />
      </Element>
      <Element name='service'>
      <Service />
      </Element>
    </div>
  );
}

export default App;
