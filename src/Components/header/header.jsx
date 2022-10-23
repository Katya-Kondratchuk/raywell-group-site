import "./header.css";
import Logo from '../../images/logoMobile.png'
// import Burger from '../../images/menu_24px.svg'
import {ReactComponent as ReactLogo} from '../../images/menu_24px.svg';
import Container from "../container/container";


const Header = () => {
    return (

        <header className="container ">
            <nav>
                <ul className="d-flex">
                    <li><a type="button" href="../../Pages/Home.jsx"><img className="logo-header" src={Logo} alt="" /></a></li>
                    <li className="lol"> <a href=''></a>
      <ReactLogo />

                    </li>

                </ul>
            </nav>
      </header>
  )
};

export default Header;
