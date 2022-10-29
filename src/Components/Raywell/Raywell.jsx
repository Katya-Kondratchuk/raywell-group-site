import "./Raywell.css";

import Container from "../Container/Container";

import Technics from "../../images/techniks.jpg";
import Bio from "../../images/bio.jpg";
import Procedures from "../../images/procedures.jpg";
import Mode from "../../images/mode.jpg";
import Barber from "../../images/barber.jpg";
import { Link } from "react-router-dom";

const Raywell = () => {
  return (
    <Container>
      <ul className="raywell-list">
        <li className="raywell-item card">
          <Link to="/technics">
            <img src={Technics} alt="Raywell Technics"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">Raywell technics</h2>
              <p className="raywell-descr">Технічні препарати</p>
            </div>
          </Link>
        </li>
        <li className="raywell-item card">
            <Link to="/technics">
            <img src={Bio} alt="Raywell Bio"></img>
            <div className="raywell-container">
              <h2 className="raywell-title">Raywell bio</h2>
              <p className="raywell-descr">Серія bio</p>
            </div>
            </Link>
        </li>
        <li className="raywell-item card">
          <a href="/">
            <img src={Procedures} alt="Raywell procedures"></img>
            <div className="raywell-container">
              <h2 className="raywell-title procedures-title">
                Процедури Raywell
              </h2>
            </div>
          </a>
        </li>
        <li className="raywell-item card">
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
        </li>
      </ul>
    </Container>
  );
};

export default Raywell;
