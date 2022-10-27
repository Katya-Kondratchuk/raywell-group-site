import Header from "../Components/header/header";
import Brands from "../Components/brands/brands";
import AboutUs from "../Components/about_us/about_us";
import Certificate from "../Components/certificate/certificate";
import Contact from "../Components/contact/contact.jsx";
import DemoCarousel from "../Components/slider2/Slider2";


const Home = () => {

  return (
    <div>
      <Header />
      <DemoCarousel />
      <Brands />
      <AboutUs />
      <Certificate />
      <Contact />
    </div>
  );
};

export default Home;
