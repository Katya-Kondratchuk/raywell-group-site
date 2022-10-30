import "./HeaderEnvie.css";
import LogoEnvie from "../../images/envie/logoEnvie.png";
import Container from "../Container/Container";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useState } from "react";
import { useMediaQueries } from "@react-hook/media-query";

const HeaderEnvie = () => {
  const [open, setOpen] = useState(false);
  const { matches } = useMediaQueries({
    screen: "screen",
    width: "(max-width: 767px)",
  });
  return (
    <div className="header__envie">
      <Container>
        <nav className="header">
          <ul className="d-flex header-list">
            <li className="header-item">
              <a href="/">
                <img
                  className="logo-header"
                  src={LogoEnvie}
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
    </div>
  );
};

export default HeaderEnvie;
