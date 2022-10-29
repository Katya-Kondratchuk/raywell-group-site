import "./Vegan.css";

import Container from "../Container/Container";

// import { Link } from "react-router-dom";

const Vegan = () => {
  return (
    <section className="vegan">
      <Container>
        <h2 className="vegan__title">VEGAN NEW</h2>
        <p className="vegan__subtitle">
          Органічна серія для різних типів волосся
        </p>
        {/* <video
          className="vegan__video"
          src="../../video/Натуральна серія VEGAN NEW.mp4"
          poster="https://i.ytimg.com/vi_webp/6xoJ4wNN1qY/sddefault.webp"
          width="640"
          controls
          autoplay
          loop
          preload="auto"
        ></video> */}
        <iframe
          className="vegan__video"
          loop
          src="https://www.youtube.com/embed/6xoJ4wNN1qY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </section>
  );
};

export default Vegan;
