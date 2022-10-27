import "./Header.css";
import Logo from "../../images/logoMobile.png";
import Container from "../Container/Container";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
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
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
