import "./header.css";
import Logo from '../../images/logoMobile.png'
// import {ReactComponent as ReactLogo} from '../../images/menu_24px.svg';
import Container from "../container/container";
import Modal from '../modal/modal.jsx'


const Header = () => {
    return (
        <Container>
            <nav className="header">
                <ul className="d-flex header-list">
                    <li className="header-item"><a href="/"><img className="logo-header" src={Logo} alt="Intercosmetics Company - Milano" /></a></li>
                    <li className="header-item"><Modal /></li>
                </ul>
            </nav>
        </Container>
  )
};

export default Header;
