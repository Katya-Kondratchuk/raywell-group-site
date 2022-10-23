import "./contact.css";
import team from "../../images/team.jpg";

const Contact = () => {
  return (
    <div className="team">
      <img className="team_photo" src={team} alt="team_photo" />
      <h2 className="team_title">Contacts</h2>
      <ul className="social_list">
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
        <p>м. Київ</p>
        <p>+38(063)515-13-36</p>
      </div>
    </div>
  );
};

export default Contact;
