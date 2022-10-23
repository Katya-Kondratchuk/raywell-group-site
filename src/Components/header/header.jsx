import "./header.css";
import Logo from '../../images/logoMobile.png'
// import Burger from '../../images/menu_24px.svg'
import {ReactComponent as ReactLogo} from '../../images/menu_24px.svg';
import Container from "../container/container";


const Header = () => {
    return (

            <Container>
        <header>
            <nav>
                <ul className="d-flex">
                    <li><a type="button" href="../../Pages/Home.jsx"><img className="logo-header" src={Logo} alt="" /></a></li>
                        <li className="lol">
                            <a href=''><ReactLogo /></a>
                        </li>

                </ul>
                </nav>
            </header>
                </Container>
  )
};

export default Header;
