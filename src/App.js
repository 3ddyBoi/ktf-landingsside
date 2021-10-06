import "./App.css";
import Begeistring from "./components/Begeistring";
import left_blob from "./assets/design_elementer/left_blob.svg";
import right_blob from "./assets/design_elementer/right_blob.svg";
import Fasiliteter from "./components/Fasiliteter";
import Footer from "./components/Footer";
import Head from "./components/Head";
import ImageSlider from "./components/ImageSlider";
import Kontakt from "./components/Kontakt";
import Nav from "./components/Nav";
import Pamelding from "./components/Pamelding";
import { SliderData } from "./components/SliderData";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      <ImageSlider slides={SliderData} />
      <Begeistring />
      <img src={left_blob} alt="design element" id="left_blob" />
      <Fasiliteter />
      <Team />
      <img src={right_blob} alt="design element" id="right_blob" />
      <Kontakt />
      <Pamelding />
      <Footer />
    </div>
  );
}

export default App;
