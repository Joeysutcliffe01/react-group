import { NavLink } from "react-router-dom";
import comingSoonImage from "../Home/img/coming-soon.png";

// -------------------------------------------------Image imports
// import Logo from "../../";
import reactLogoMain from "../Home/img/react-logo-bg.svg";
import rickAndMortyLogo from "../Home/img/rickandmorty.png";
import scrimbaLogo from "../Home/img/scrimba_logo.svg";
import diceLogo from "../Home/img/dice-logo.png";
import reactLogo from "../Projects/ReactFacts/img/react__facts-logo.png";
import cardLogo from "../Home/img/card-logo.png";
import airbnbLogo from "../Home/img/airbnb-logo 2.png";
import travelLogo from "../Projects/Travel/img/travel-pin.svg";
import memeLogo from "../Projects/MemeGenerator/img/meme-logo.svg";

export function MainSidebar({ isOpen }) {
  return (
    <section className="sidebar__main">
      <div className="sidebar__items sidebar__item-scrimba">
        <NavLink className="sidebar__links" to="/">
          <img
            className="sidebar__item-img"
            src={reactLogoMain}
            alt="scrimba logo"
          />

          <h3 className="sidebar__item-title">Home</h3>
        </NavLink>
      </div>
      <div className="sidebar__items sidebar__item-scrimba">
        <div className="sidebar__links">
          <img
            className="sidebar__item-img"
            src={scrimbaLogo}
            alt="scrimba logo"
          />

          <h3 className="sidebar__item-title">Scrimba</h3>
        </div>

        <div className="hover_container" style={{ top: "8rem" }}>
          <div className="scrimba__hover_container-inner">
            <NavLink className="scrimba__nav-links" to="/react-facts">
              <img
                className="scrimba__nav-links-images"
                src={reactLogo}
                alt="react logo"
              />
              Facts
            </NavLink>
            <NavLink className="scrimba__nav-links" to="/business-card">
              <img
                className="scrimba__nav-links-images"
                src={cardLogo}
                alt="cardLogo logo"
              />
              Card
            </NavLink>
          </div>
          <div className="scrimba__hover_container-inner">
            <NavLink className="scrimba__nav-links" to="/airbnb">
              <img
                className="scrimba__nav-links-images"
                src={airbnbLogo}
                alt="Airbnb logo"
              />
              Airbnb
            </NavLink>
            <NavLink className="scrimba__nav-links" to="/travel">
              <img
                className="scrimba__nav-links-images"
                src={travelLogo}
                alt="Travel logo"
              />
              Travel
            </NavLink>
          </div>
          <div className="scrimba__hover_container-inner">
            <NavLink className="scrimba__nav-links" to="/meme-generator">
              <img
                className="scrimba__nav-links-images"
                src={memeLogo}
                alt="Meme logo"
              />
              Memes
            </NavLink>
            <NavLink className="scrimba__nav-links" to="/tenzies">
              <img
                className="scrimba__nav-links-images"
                src={diceLogo}
                alt="Tenzies logo"
              />
              Tenzies
            </NavLink>
          </div>
        </div>
      </div>
      <div className="sidebar__items sidebar__item-scrimba">
        <NavLink className="sidebar__links" to="/">
          <img
            className="sidebar__item-img"
            src={rickAndMortyLogo}
            alt="rick and morty logo"
          />
          <h3 className="sidebar__item-title">Rick and Morty</h3>
          {/* <div className="rickandMorty__hover_container"></div> */}
          <div
            className="hover_container hover_container-rickAndMorty"
            style={{ top: "13rem" }}
          >
            <img
              className="coming-soon-img"
              src={comingSoonImage}
              alt=" Coming soon"
            />
          </div>
        </NavLink>
      </div>
    </section>
  );
}
