import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 100px;;
  background: #1d211e;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  z-index: 11;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  
  @media (max-width: 767px) {
    width: 100%;
  }

  a {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  
    &:hover {
      color: #ffffff;
    }
  }
`;