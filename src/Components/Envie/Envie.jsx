import "./Envie.css";

import Container from "../Container/Container";

import Deco from "../../images/envie/deco.jpg";
import Respect from "../../images/envie/respect.jpg";
import Hyaluronic from "../../images/envie/hyaluronic.jpg";

import { Link } from "react-router-dom";

const Envie = () => {
  return (
    <section className="envie">
      <Container>
        <h2 className="envie__new">NEW</h2>
        <ul className="envie__list">
          <li className="envie__item">
            <Link to="/deco">
              <img src={Deco} alt="VEGAN GREEN DECO"></img>
              <div className="envie__container">
                <h2 className="envie__title">VEGAN GREEN DECO - 9</h2>
                <p className="envie__text">
                  Знебарвлююча пудра нового покоління
                </p>
              </div>
            </Link>
          </li>
          <li className="envie__item">
            <Link to="/respect">
              <img src={Respect} alt="Vegan Respect"></img>
              <div className="envie__container">
                <h2 className="envie__title">Vegan Respect</h2>
                <p className="envie__text">
                  Новий професійний стійкий рослинний фарбник
                </p>
              </div>
            </Link>
          </li>
          <li className="envie__item">
            <Link to="/hyaluronic">
              <img src={Hyaluronic} alt="Серія з гіалуроновою кислотою"></img>
              <div className="envie__container">
                <h2 className="envie__title">Серія з гіалуроновою кислотою</h2>
                <p className="envie__text">Для інтенсивного росту волосся</p>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="vegan_series__list">
          <li className="vegan_series__item">
            <Link to="/vegan">
              <div className="vegan_series__title vegan_series__title--green">
                Vegan
              </div>
              <p className="vegan_series__text">Серія VEGAN</p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--blue">
                Shampoo Reflex
              </div>
              <p className="vegan_series__text">Шампунь для блонду</p>
              <p className="vegan_series__subtext">
                Шампунь з ефектом анти-жовтизни
              </p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--yellowgreen">
                Collagene
              </div>
              <p className="vegan_series__text">Колагенова серія</p>
              <p className="vegan_series__subtext">Для фарбованого волосся</p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--yellow">
                Milk Protein
              </div>
              <p className="vegan_series__text">Серія з молочними протеїнами</p>
              <p className="vegan_series__subtext">Для фарбованого волосся</p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--grey">
                Keratin
              </div>
              <p className="vegan_series__text">Кератинова серія</p>
              <p className="vegan_series__subtext">Для пошкодженого волосся</p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--brown">
                Argan Oil
              </div>
              <p className="vegan_series__text">Серія з аргановою олією</p>
              <p className="vegan_series__subtext">
                Серія для відновлення пошкодженого волосся
              </p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--pink">
                Macadamia
              </div>
              <p className="vegan_series__text">Серія з олією макадамії</p>
              <p className="vegan_series__subtext">
                Зволожуюча серія з олією макадамії
              </p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--red">
                Protection
              </div>
              <p className="vegan_series__text">Захист</p>
              <p className="vegan_series__subtext">
                Продукти для комфортного та безпечного фарбування
              </p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--skyblue">
                Styling
              </div>
              <p className="vegan_series__text">Серія стайлінг</p>
              <p className="vegan_series__subtext">
                Серія для моделювання зачісок
              </p>
            </Link>
          </li>
          <li className="vegan_series__item">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--black">
                For Man
              </div>
              <p className="vegan_series__text">Чоловіча серія</p>
              <p className="vegan_series__subtext">Серія для чоловіків</p>
            </Link>
          </li>
          <li className="vegan_series__item vegan_series__item--center">
            <Link to="/">
              <div className="vegan_series__title vegan_series__title--orange">
                Sun
              </div>
              <p className="vegan_series__text">Серія Sun</p>
              <p className="vegan_series__subtext">
                Сонячна серія для очищення зволоження та захисту волосся у
                літній період
              </p>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Envie;
