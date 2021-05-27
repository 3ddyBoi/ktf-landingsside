import './App.css';
import Begeistring from './components/Begeistring';
import Head from './components/Head'
import ImageSlider from './components/ImageSlider';
import Nav from './components/Nav';
import { SliderData } from './components/SliderData';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
        <Head />
        <Nav />
        <ImageSlider slides={SliderData} />
        <Begeistring />
        <Team />
    </div>
  );
}

export default App;
