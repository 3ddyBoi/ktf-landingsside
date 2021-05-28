import './App.css';
import Begeistring from './components/Begeistring';
import Fasiliteter from './components/Fasiliteter';
import Footer from './components/Footer';
import Head from './components/Head'
import ImageSlider from './components/ImageSlider';
import Kontakt from './components/Kontakt';
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
        <Fasiliteter />
        <Team />
        <Kontakt />
        <Footer />

    </div>
  );
}

export default App;
