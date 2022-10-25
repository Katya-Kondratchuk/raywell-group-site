import Header from "../components/Header/Header";
import Brands from "../components/Brands/Brands";
import AboutUs from "../components/About_us/About_us";
import Certificate from "../components/Certificate/Certificate";
import Contact from "../components/Contact/Contact.jsx";
import DemoCarousel from "../components/Slider2/Slider2";
// import Modal from "../Components/modal/modal";
// import { useState } from "react";
// import { ReactComponent as ReactLogo } from "../images/menu_24px.svg";

const Home = () => {
  // const { modalActive, setModalActive } = useState(true);
  return (
    <div>
      {/* <button className="modalOpenButton" onClick={() => setModalActive(true)}>
        <ReactLogo />
      </button> */}
      <Header />
      <DemoCarousel />
      <Brands />
      <AboutUs />
      <Certificate />
      <Contact />
      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
};

export default Home;
