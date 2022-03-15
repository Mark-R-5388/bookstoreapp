import {
  ImBooks,
  ImInstagram,
  ImTwitter,
  ImFacebook,
  ImGithub,
} from "react-icons/im";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <div className="footer_container_left">
          <p className="footer_date">2022</p>
          <div className="footer_container_logo_title">
            <ImBooks className="footer_logo" />
            <p className="footer_title">Book Store App</p>
          </div>
          <small className="footer_small">- All you need is a good book</small>
        </div>
        <div className="footer_container_right">
          <div className="footer_social_links_container">
            <p>
              <ImInstagram className="footer_social_link" />
            </p>
            <p>
              <ImTwitter className="footer_social_link" />
            </p>
            <p>
              <ImGithub className="footer_social_link" />
            </p>
            <p>
              <ImFacebook className="footer_social_link" />
            </p>
          </div>
          <p>Created By: Mark Rose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
