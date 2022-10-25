import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import envie from "../../images/envie.jpg";
import extremo from "../../images/extremo.jpg";
import invidia from "../../images/invidia.jpg";
import raywell from "../../images/raywell.jpg";

const DemoCarousel = () => {
  return (
    <Carousel
      autoFocus={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows
    >
      <div>
        <img src={envie} alt="company Name" />
      </div>
      <div>
        <img src={extremo} alt="company Name" />
      </div>
      <div>
        <img src={invidia} alt="company Name" />
      </div>
      <div>
        <img src={raywell} alt="company Name" />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
