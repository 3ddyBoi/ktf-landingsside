import './App.css';
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
    </div>
  );
}

export default App;
