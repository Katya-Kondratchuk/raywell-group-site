import Header from "../components/Header/Header";
import Brands from "../components/Brands/Brands";
import AboutUs from "../components/About_us/About_us";
import Certificate from "../components/Certificate/Certificate";
import Contact from "../components/Contact/Contact.jsx";
import DemoCarousel from "../components/Slider2/Slider2";
import Footer from "../components/Footer/Footer";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <Link to="raywell-group-site">
    <div>
      <Header />
      <DemoCarousel />
      <Brands />
      <AboutUs />
      <Certificate />
      <Contact />
      <Footer />
    </div>
    // </Link>
  );
};

export default Home;
