import "./Footer.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="contact_address">
      <Container>
        <div className="contact_address__wrapper">
          <div>
            <ul className="contact_address__list">
              <li className="contact_address__item">
                <p className="contact_address__item__block">м. Київ</p>
              </li>
              <li className="contact_address__item">
                <p className="contact_address__item__block">
                  +38(063)515-13-36
                </p>
              </li>
              <li className="contact_address__item">
                <p className="contact_address__item__block">Василенко Ирина</p>
              </li>
              <li className="contact_address__item">
                <p className="contact_address__item__block">
                  makedonova4@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <div className="contact_address__list">
            <ul>
              <li className="contact_address__item contact_address__item__block">
                <p className="contact_address__item__text">Адреса студії</p>
                <address className="contact_address__link">
                  Київ, вул. Хоткевича 8
                </address>
              </li>
              <li className="contact_address__item contact_address__item__block">
                <p className="contact_address__item__text">
                  Адреса офісу (самовивіз )
                </p>
                <address className="contact_address__link">
                  Київ, вул Милославська 23
                </address>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
