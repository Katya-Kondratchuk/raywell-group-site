import "./Header.css";
import Logo from "../../images/logoMobile.png";
import Container from "../Container/Container";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useState } from "react";
import { useMediaQueries } from "@react-hook/media-query";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { matches } = useMediaQueries({
    screen: "screen",
    width: "(max-width: 767px)",
  });
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
            {matches.width ? <Burger open={open} setOpen={setOpen} /> : ""}
            <Menu open={open} setOpen={setOpen} />
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
