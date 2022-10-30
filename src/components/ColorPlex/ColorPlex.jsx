import "./ColorPlex.css";
// import "~react-image-gallery/styles/css/image-gallery.css";

// import Slider1 from '../../images/colorPlex/slider1.jpg'
// import Slider2 from '../../images/colorPlex/slider2.jpg'
// import Slider3 from '../../images/colorPlex/slider3.jpg'
// import Slider4 from '../../images/colorPlex/slider4.jpg'

const images = [
  {
    original: "../../images/colorPlex/slider1.jpg",
  },
  {
    original: "../../images/colorPlex/slider2.jpg",
  },
  {
    original: "../../images/colorPlex/slider3.jpg",
  },
  {
    original: "../../images/colorPlex/slider4.jpg",
  },
];

const ColorPlex = () => {
  return (
    <div>
      <h1 className="sectionTitle">Color Plex</h1>
      <span className="sectionText colorplex-text">
        Фарбник <br />з рослинним кератином
      </span>
      {/* <ImageGallery items={images} /> */}
    </div>
  );
};

export default ColorPlex;
