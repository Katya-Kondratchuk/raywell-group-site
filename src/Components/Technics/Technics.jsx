import './Technics.css'

import Pudres from '../../images/pudres.jpg'
import Oxigen from '../../images/oxigen.jpg'
import ColorPlex from '../../images/cuticlex.jpg'
import IcyBlonde from '../../images/excellence-icy-blonde.jpg'
import VitaminColor from '../../images/vitamin-color.jpg'
import SpeedyColor from '../../images/speedy-color.jpg'
import StraightCream from '../../images/straightening-cream.jpg'
import ToxicCream from '../../images/toxic-cream.jpg'
import LissePlex from '../../images/tannic-lisse-plex.jpg'
import LuminHair from '../../images/lumin-hair.jpg'
import PermPlex from '../../images/perm-plex.jpg'
import BioPlex from '../../images/bio-plex.jpg'
import Pigment from '../../images/pigment.jpg'
import DirectPigment from '../../images/direct-pigment.jpg'
import Ater from '../../images/ater-color.jpg'
import TransparentCream from '../../images/transparent-color.png'
import Container from '../Container/Container'
import { Link } from "react-router-dom";


const TechnicsComp = () => {
    return (
        <Container>
            <h1 className='Tech-section-title'>Raywell technics</h1>
            <span className='Tech-section-text'>Технічні препарати</span>
            <ul className="technic-list">
                <li className="technik-item card">
                   <Link to="/powder">
                        <img className='technic-img' src={Pudres} alt="Пудри для освітлення" />
                        <h2 className='technic-title'>Пудри для освітлення</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/oxygen">
                        <img className='technic-img' src={Oxigen} alt="Окисники" />
                        <h2 className='technic-title'>Окисники</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/colorplex">
                        <img className='technic-img' src={ColorPlex} alt="Фарбник COLOR PLEX" />
                        <h2 className='technic-title'>Фарбник COLOR PLEX</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={IcyBlonde} alt="Фарбник EXCELLENCE ICY BLONDE" />
                        <h2 className='technic-title'>Фарбник EXCELLENCE ICY BLONDE</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={VitaminColor} alt="Фарбник VITAMIN COLOR" />
                        <h2 className='technic-title'>Фарбник VITAMIN COLOR</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={SpeedyColor} alt="Краплі SPEEDY COLOR" />
                        <h2 className='technic-title'>Краплі SPEEDY COLOR</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={StraightCream} alt="Вирівнюючий крем" />
                        <h2 className='technic-title'>Вирівнюючий крем</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={ToxicCream} alt="Кислотна змивка" />
                        <h2 className='technic-title'>Кислотна змивка</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={LissePlex} alt="Tannic Lisse Plex" />
                        <h2 className='technic-title'>Tannic Lisse Plex</h2>
                        <span className='technic-text'>Танінове відновлення</span>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={LuminHair} alt="Lumin Hair" />
                        <h2 className='technic-title'>Lumin Hair</h2>
                        <span className='technic-text'>Термоактивна ламінація волосся</span>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={PermPlex} alt="Perm Plex" />
                        <h2 className='technic-title'>Perm Plex</h2>
                        <span className='technic-text'>Хімічна завивка</span>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={BioPlex} alt="Система BIO PLEX" />
                        <h2 className='technic-title'>Система BIO PLEX</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={Pigment} alt="Пігментуючі засоби Raywell" />
                        <h2 className='technic-title'>Пігментуючі засоби Raywell</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={DirectPigment} alt="Direct Pigment" />
                        <h2 className='technic-title'>Direct Pigment</h2>
                        <span className='technic-text'>Прямі фарбники</span>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={Ater} alt="Серія Ater Color" />
                        <h2 className='technic-title'>Серія Ater Color</h2>
                    </Link>
                </li>
                <li className="technik-item card">
                    <Link to="/icyblonde">
                        <img className='technic-img' src={TransparentCream} alt="Знебарвлюючий крем" />
                        <h2 className='technic-title'>Знебарвлюючий крем</h2>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}


export default TechnicsComp;