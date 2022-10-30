import "./Deco.css";

import Container from "../Container/Container";

import BcgDeco from "../../images/envie/Deco/bcg_deco.jpg";
import Gif from "../../images/envie/Deco/gif.gif";
import BlondHaire from "../../images/envie/Deco/blond_hair1.jpg";
import SecondBlondHaire from "../../images/envie/Deco/blond_hair2.jpg";
import ThirdBlondHaire from "../../images/envie/Deco/blond_hair3.jpg";
import Oxygen from "../../images/envie/Deco/oxygen.jpg";
import OxygenHair from "../../images/envie/Deco/respect_hair1.jpeg";
import OxygenHair2 from "../../images/envie/Deco/respect_hair_2.jpg";
import OxygenHair3 from "../../images/envie/Deco/respect_hair_3.jpg";
import OxygenHair4 from "../../images/envie/Deco/respect_hair_4.jpg";
import OxygenHair6 from "../../images/envie/Deco/respect_hair_6.jpg";
import OxygenHair7 from "../../images/envie/Deco/respect_hair_7.jpg";
import OxygenHair8 from "../../images/envie/Deco/respect_hair_8.jpg";
import Respect from "../../images/envie/respect.jpg";

import { Link } from "react-router-dom";

const Deco = () => {
  return (
    <section className="deco">
      <img src={BcgDeco} className="bcg_img" alt="Background powder" />
      <Container>
        <div className="deco__wrapper">
          <img src={Gif} className="gif_img" alt="product" />
          <div className="deco__block">
            <h2 className="deco__title">ENVIE RESPECT GREEN DECO-9</h2>
            <div className="deco__text">
              <p>
                Унікальний продукт для знебарвлення волосся до 7 рівнів. В
                результаті знебарвлення ви отримаєте ідеально чисте рівномірне
                полотно та досконалу якість волосся. Містить фіолетовий та синій
                пігмент, які здатні нейтралізувати інтенсивний жовтий та навіть
                оранжевий відтінок в процесі знебарвлення.
              </p>
              <p>
                Пудра містить гуарову камедь, природний полісахарид,вона глибоко
                зволожує волосся та зберігає вологу всередині. Також цей
                компонент має інтенсивний кондиціонуючий ефект, відновлює
                пошкоджене волосся, надає йому блиск та зменшує статичний заряд
                у кінцях.
              </p>
              <p>
                Пудра має зручну пластичну консистенцію та легко наноситься.
                Підходить для всіх методів знебарвлення. Ідеально підходить для
                технік з фольгою та шапочкою.
              </p>
            </div>
          </div>
        </div>
        <div className="deco__hair">
          <img
            className="blond__haire_photo"
            src={BlondHaire}
            alt="Blond haire"
          />
          <img
            className="blond__haire_photo"
            src={SecondBlondHaire}
            alt="Blond haire"
          />
          <img
            className="blond__haire_photo"
            src={ThirdBlondHaire}
            alt="Blond haire"
          />
        </div>
      </Container>
      <div className="deco__proportion">
        <Container>
          <div className="deco__proportion__wrapper">
            <h3 className="deco__proportion__title">
              Спосіб застосування Respect GREEN DECO-9
            </h3>
            <div className="deco__proportion__text">
              <p>Пропорції змішування 1:2</p>
              <p>10vol (3%) Знебарвлення на 1-1,5 тони, час витримки 25 хв.</p>
              <p>20vol (6%) Знебарвлення на 2-3 тони, час витримки 35 хв.</p>
              <p>30vol (9%) Знебарвлення на 4-5 тонів, час витримки 45 хв.</p>
              <p>40vol (12%) Знебарвлення на 5-7 тонів,час витримки 45 хв.</p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="deco__oxygen">
          <p className="deco__oxygen__title">OXYGEN</p>
          <p className="deco__oxygen__text">
            Кремоподібний стабілізований окисник Envie високої степені захисту з
            приємним ароматом квітів
          </p>
        </div>
        <div className="deco__oxygen__products">
          <img src={Oxygen} alt="Oxygen products" />
          <div className="deco__oxygen__products__text">
            <p>В асортименті: 1000/200ml </p>
            <p>х (активатор), 10 (3%), 20 (6%), 30 (9%), 40 (12%)</p>
          </div>
        </div>
        <div className="deco__work">
          <p className="deco__work__title">WORK</p>
          <p className="deco__work__text">
            Роботи виконані знебарвлюючою пудрою GREEN DECO-9
          </p>
          <p className="deco__work__text deco__work__text--margin">
            та новітнім фарбником на рослинній основі RESPECT
          </p>
          <div className="deco__work__img">
            <div className="deco__work__img--two">
              <img
                className="deco__work__img__example"
                src={OxygenHair}
                alt="Blond hair"
              />
              <img
                className="deco__work__img__example"
                src={OxygenHair2}
                alt="Blond hair"
              />
            </div>
            <div className="deco__work__img--tree">
              <img
                className="deco__work__img__example--size"
                src={OxygenHair3}
                alt="Blond hair"
              />
              <img
                className="deco__work__img__example--size"
                src={OxygenHair4}
                alt="Blond hair"
              />
              <img
                className="deco__work__img__example--size"
                src={OxygenHair6}
                alt="Blond hair"
              />
            </div>
            <div className="deco__work__img--two">
              <img
                className="deco__work__img__example"
                src={OxygenHair7}
                alt="Blond hair"
              />
              <img
                className="deco__work__img__example"
                src={OxygenHair8}
                alt="Blond hair"
              />
            </div>
          </div>
        </div>
        <div className="respect">
          <Link to="/respect">
            <div className="respect__block">
              <div className="respect__wrapper">
                <p className="respect__title">Vegan Respect</p>
                <p className="respect__text">
                  Новий професійний стійкий рослинний фарбник
                </p>
              </div>
              <img
                className="respect__img"
                src={Respect}
                alt="Respect series"
              />
            </div>
          </Link>
          <div className="respect_button_block">
            <button className="respect_button">
              <Link className="respect_link" to="/respect">
                Дізнатись більше
              </Link>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Deco;
