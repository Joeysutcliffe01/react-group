import BusinessCardImg from "../img/business-card-img-2.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export function BusinessCardHeader() {
  return (
    <>
      <header className="businesscard__header">
        <img
          className="businesscard__header-img"
          src={BusinessCardImg}
          alt="Business Card Imgage"
        />
        <div className="businesscard__contact-info">
          <h1 className="businesscard__h1">Laura Smith</h1>
          <h5 className="businesscard__h5">Frontend Developer</h5>
          <p className="businesscard__p">laurasmith.website</p>
          <div className="businesscard__header-links">
            <button className="businesscard__header-link-button" id="email">
              <FaEnvelope className="email-icon" />
              Email
            </button>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="businesscard__header-link-button"
                id="linkedin"
              >
                <FaLinkedin className="linkedin-icon" /> Linkedin
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
