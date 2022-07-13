import BusinessCardImg from "../img/business-card-img.jpeg";
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
          <h1 className="businesscard__h1">Joey Sutcliffe</h1>
          <h5 className="businesscard__h5">Frontend Developer</h5>
          <a
            className="businesscard__website-link"
            href="https://www.joeysutcliffe.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="businesscard__p">https://www.joeysutcliffe.com/</p>
          </a>
          <div className="businesscard__header-links">
            <button className="businesscard__header-link-button" id="email">
              <FaEnvelope className="email-icon" />
              Email
            </button>
            <a
              href="https://www.linkedin.com/in/joseph-sutcliffe-01/"
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
