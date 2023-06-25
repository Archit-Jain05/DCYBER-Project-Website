import './App.css';
import { Element } from 'react-scroll';
import Navbar from './component/navbar'
import Land from './component/landpage'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name='service'>
      <Land />
      </Element>
    </div>
  );
}

export default App;
