import "./Header.css";
import Logo from "../../images/logoMobile.png";
import { ReactComponent as ReactLogo } from "../../images/menu_24px.svg";
import Container from "../Container/Container";
// import Modal from "../modal/modal";
import { useState } from "react";

const Header = () => {
  const { setModalActive } = useState(true);
  return (
    <Container>
      <nav className="header">
        <ul className="d-flex header-list">
          <li className="header-item">
            <a href="/">
              <img
                className="logo-header"
                src={Logo}
                alt="Intercosmetics Company - Milano"
              />
            </a>
          </li>

          <li className="header-item">
            <button
              className="modalOpenButton"
              onClick={() => setModalActive(true)}
            >
              <ReactLogo />
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
