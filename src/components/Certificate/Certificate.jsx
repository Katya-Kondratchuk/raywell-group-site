import "./Certificate.css";
import raywell from "../../images/home/certificate_raywell.jpg";
import animal from "../../images/home/certificate_animal.jpg";
import envie from "../../images/home/certificate_envie.jpg";
import Container from "../Container/Container";

const Certificate = () => {
  return (
    <section className="certificate">
      <Container>
        <img
          className="certificate_img"
          src={raywell}
          alt="certificate Raywell"
        />
        <img
          className="certificate_img certificate_img--envie"
          src={envie}
          alt="certificate Envie"
        />
        <img
          className="certificate_img"
          src={animal}
          alt="certificate not on animal"
        />
      </Container>
    </section>
  );
};

export default Certificate;
