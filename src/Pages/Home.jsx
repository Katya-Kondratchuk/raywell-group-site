import Slider from "../Components/slider/Slider.jsx";
import Header from "../Components/header/header";
import Brands from "../Components/brands/brands";
import AboutUs from "../Components/about_us/about_us";
import Certificate from "../Components/certificate/certificate";
import Container from "../Components/container/container";



const App = () => {
  return (
      <div>
      <Header />
      <Slider />
      <Brands />
      <AboutUs />
      <Certificate />
    </div>
  );
};

export default App;