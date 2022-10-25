import "./Brands.css";
import logo from "../../images/INTERCOSMETICS_LOGHI.png";
import map from "../../images/brands_map.jpg";

const Brands = () => {
  return (
    <div className="brands">
      <h2 className="brands_title">ПЕРЕВАГИ БРЕНДУ</h2>
      <img className="brands_img" src={logo} alt="logo" />
      <img className="brands_map" src={map} alt="map" />
    </div>
  );
};

export default Brands;
