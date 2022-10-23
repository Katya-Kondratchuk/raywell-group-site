<<<<<<< HEAD
import Home from './Pages/Home'



const App = () => {
  return (
  <Home />
=======
import Slider from "./Components/slider/Slider";
import Header from "./Components/header/header";
import Brands from "./Components/brands/brands";
import AboutUs from "./Components/about_us/about_us";
import Certificate from "./Components/certificate/certificate";
import Contact from "./Components/contact/contact";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Brands />
      <AboutUs />
      <Certificate />
      <Contact />
    </div>
>>>>>>> eb032c09c9dd9e7595de63108a6ebe1d6911789b
  );
};

export default App;
