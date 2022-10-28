import "./Envie.css";

import Container from "../Container/Container";

import Deco from "../../images/deco.jpg";
import Respect from "../../images/respect.jpg";
import Hyaluronic from "../../images/hyaluronic.jpg";

import { Link } from "react-router-dom";

const Envie = () => {
  return (
    <Container>
      <ul className="raywell-list">
        <li className="raywell-item card">
          <Link to="/technics">
            <img src={Deco} alt="Raywell Technics"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">VEGAN GREEN DECO - 9</h2>
              <p className="raywell-descr">
                Знебарвлююча пудра нового покоління
              </p>
            </div>
          </Link>
        </li>
        <li className="raywell-item card">
          <a href="/">
            <img src={Respect} alt="Raywell Bio"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">Vegan Respect</h2>
              <p className="raywell-descr">
                Новий професійний стійкий рослинний фарбник
              </p>
            </div>
          </a>
        </li>
        <li className="raywell-item card">
          <a href="/">
            <img src={Hyaluronic} alt="Raywell procedures"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">Серія з гіалуроновою кислотою</h2>
              <p className="raywell-descr">Для інтенсивного росту волосся</p>
            </div>
          </a>
        </li>
        {/* <li className="raywell-item card">
          <a href="/">
            <img src={Mode} alt="Raywell Mode"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">Raywell Mode</h2>
              <p className="raywell-descr">Серія для моделювання</p>
            </div>
          </a>
        </li>
        <li className="raywell-item card">
          <a href="/">
            <img src={Barber} alt="Raywell Barber"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">Raywell Barber</h2>
              <p className="raywell-descr">Чоловіча серія для Барберів</p>
            </div>
          </a>
        </li> */}
      </ul>
    </Container>
  );
};

export default Envie;
