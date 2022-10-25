import "./Certificate.css";
import raywell from "../../images/certificate_raywell.jpg";
import animal from "../../images/certificate_animal.jpg";
import envie from "../../images/certificate_envie.jpg";

const Certificate = () => {
  return (
    <div className="certificate">
      <img src={raywell} alt="certificate Raywell" />
      <img className="certificate_img" src={envie} alt="certificate Envie" />
      <img src={animal} alt="certificate not on animal" />
    </div>
  );
};

export default Certificate;
