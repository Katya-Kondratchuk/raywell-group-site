import "./header.css";
import Logo from "../../images/logoMobile.png";
import Container from "../container/container";
import Burger from "../burger/burger";
import Menu from "../menu/menu";
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
