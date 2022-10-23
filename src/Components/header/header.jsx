import './header.css'
import Logo from '../../images/logoMobile.png'
import Burger from '../../images/hamburger-menu.svg'

const Header = () => {
    return (
        <header className='container header'>
            <nav>
                <ul className='d-flex'>
                    <li className='logo-header'><a href="#"><img className='logo-header' src={Logo} alt="Logo" /></a></li>
                    <li><button><svg width="10px" height="10px"><use href={Burger}></use></svg></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;