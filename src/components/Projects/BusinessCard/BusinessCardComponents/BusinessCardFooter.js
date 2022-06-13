import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

export function BusinessCardFooter() {
  return (
    <>
      <footer className="businesscard__footer">
        <a
          className="businesscard__footer-links"
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="businesscard__footer-links"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          className="businesscard__footer-links"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="businesscard__footer-links"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </footer>
    </>
  );
}
