import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="Головна сторінка"></span>
        Головна
      </a>
      <a href="/">
        <span role="img" aria-label="Про нас"></span>
        ПРО НАС
        </a>
      <a href="/">
        <span role="img" aria-label="RAYWELL"></span>
        RAYWELL
      </a>
            <a href="/">
        <span role="img" aria-label="ENVIE"></span>
        ENVIE
      </a>
                  <a href="/">
        <span role="img" aria-label="INVIDIA"></span>
        INVIDIA
      </a>
                  <a href="/">
        <span role="img" aria-label="EXTREMO"></span>
        EXTREMO
      </a>
                  <a href="/">
        <span role="img" aria-label="КОНТАКТИ"></span>
        КОНТАКТИ
      </a>
      
      {/* <a href=''><svg><use href=''></use></svg></a> */}
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;