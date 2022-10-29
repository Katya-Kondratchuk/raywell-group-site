import "./Brands.css";
import logo from "../../images/home/logo.png";
import map from "../../images/home/brands_map.jpg";
import Container from "../Container/Container";

const Brands = () => {
  return (
    <section className="brands">
      <Container>
        <h2 className="brands_title">ПЕРЕВАГИ БРЕНДУ</h2>
        <img className="brands_img" src={logo} alt="logo" />
      </Container>
      <img className="brands_map" src={map} alt="map" />
    </section>
  );
};

export default Brands;
