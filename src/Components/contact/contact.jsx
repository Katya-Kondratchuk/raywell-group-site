import "./Contact.css";
import team from "../../images/team.jpg";
import Container from "../Container/Container";

const Contact = () => {
  return (
    <Container>
      <div className="team">
        <img className="team_photo" src={team} alt="team_photo" />
        <h2 className="team_title">Contacts</h2>
        <ul className="social_list">
          <li className="social_item social_item--instagram">
            <a
              className="social_link"
              href="https://www.instagram.com/raywell_kiev"
            >
              Instagram
            </a>
          </li>
          <li className="social_item social_item--viber">
            <a
              className="social_link"
              href="viber://chat?number=%2B380635151336/"
            >
              Viber
            </a>
          </li>
          <li className="social_item social_item--telegram">
            <a
              className="social_link"
              href="tg://resolve?domain=Irina_raywell_kiev/"
            >
              Telegram
            </a>
          </li>
          <li className="social_item social_item--email">
            <a className="social_link" href="mailto:ukraineraywell@gmail.com">
              Email
            </a>
          </li>
        </ul>
        <div className="contact_address">
          <ul className="contact_address__list">
            <li className="contact_address__item">
              <p>м. Київ</p>
            </li>
            <li className="contact_address__item">
              <p>+38(063)515-13-36</p>
            </li>
            <li className="contact_address__item">
              <p>Василенко Ирина</p>
            </li>
            <li className="contact_address__item">
              <p>makedonova4@gmail.com</p>
            </li>
            <li className="contact_address__item contact_address__item--text">
              <address>Адреса студії Київ, вул. Хоткевича 8 </address>
              <address>
                Адреса офісу (самовивіз ) Київ, вул Милославська 23
              </address>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
