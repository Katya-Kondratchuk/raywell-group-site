import "./Certificate.css";
import raywell from "../../images/certificate_raywell.jpg";
import animal from "../../images/certificate_animal.jpg";
import envie from "../../images/certificate_envie.jpg";
import Container from "../Container/Container";

const Certificate = () => {
  return (
    <Container>
      <div className="certificate">
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
      </div>
    </Container>
  );
};

export default Certificate;
