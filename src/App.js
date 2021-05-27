import './App.css';
import Begeistring from './components/Begeistring';
import Head from './components/Head'
import ImageSlider from './components/ImageSlider';
import Nav from './components/Nav';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <div className="App">
        <Head />
        <Nav />
        <ImageSlider slides={SliderData} />
        <Begeistring />
    </div>
  );
}

export default App;
