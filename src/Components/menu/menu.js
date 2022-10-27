import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { ReactComponent as Insta } from "../../images/instaLogo.svg";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <nav>
        <Link to="/">
          <span role="img" aria-label="Головна сторінка"></span>
          Головна
        </Link>
        <Link to="/">
          <span role="img" aria-label="Про нас"></span>
          ПРО НАС
        </Link>
        <Link to="/raywell">
          <span role="img" aria-label="RAYWELL"></span>
          RAYWELL
        </Link>
        <Link to="/envie">
          <span role="img" aria-label="ENVIE"></span>
          ENVIE
        </Link>
        <Link to="/invidia">
          <span role="img" aria-label="INVIDIA"></span>
          INVIDIA
        </Link>
        <Link to="/extermo">
          <span role="img" aria-label="EXTREMO"></span>
          EXTREMO
        </Link>
        <Link to="/">
          <span role="img" aria-label="КОНТАКТИ"></span>
          КОНТАКТИ
        </Link>
      </nav>

      <a href="/" className="menuInsta">
        <Insta />
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
