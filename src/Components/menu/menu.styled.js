import styled from 'styled-components';


export const StyledMenu = styled.nav`
  display: flex;
  align-items: center;

 
  @media (max-width: 767px) {
  display: flex;
      justify-content: center;

  flex-direction: column;
  padding-top: 100px;;
  background: #1d211e;
  height: 100%;
  text-align: left;
  padding: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  z-index: 11;
 transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    width: 100%;

      .menuInsta {
    display: flex;
    color: #ffffff;
    width: 28px;
    margin-right: 50%;

    height: 28px;
  }

      a {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: grey;
    text-decoration: none;
    transition: color 0.3s linear;
    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:first-child {
      margin-top: 15px;
    }

    &:last-child {
      margin-top: 270px;
      margin-left: 47%;
    }
  
    &:hover {
      color: #ffffff;
    }
  }

  }

  @media (min-width: 768px) {
    a {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
      font-size: 13px;
      text-decoration: none;
      color: grey;
      transition: color 0.3s linear;
      &:not(:last-child) {
        margin-right: 15px;
      }

    }
    
    .menuInsta {
      color: grey;
            width: 20px;
      height: 20px;

    }

    .menuInsta svg {
      width: 20px;
      height: 20px;
    }
  } 

  @media (min-width: 1280px) {

   
    a {
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
      font-size: 19px;
      text-decoration: none;
      color: grey;

      &:hover {
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        color: #99b3ff;
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
      &:last-child {
        margin-left: 40px;
      }
    }
    
    .menuInsta {
      color: grey;
            width: 20px;
      height: 20px;

    }

    .menuInsta svg {
      width: 30px;
      height: 30px;

      &:hover {
        color: #99b3ff;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  } 

`;