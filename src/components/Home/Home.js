import "./Home.css";
import { NavLink, Outlet } from "react-router-dom";

// -------------------------------------------------Image imports
import reactLogoMain from "../../images/react-logo-2.png";
import rickAndMortyLogo from "./img/rickandmorty.png";
import scrimbaLogo from "./img/scrimba_logo.svg";
import Logo from "../../images/react-logo-2.png";
import diceLogo from "./img/dice-logo.png";
import reactLogo from "../Projects/ReactFacts/img/react__facts-logo.png";
import cardLogo from "./img/card-logo.png";
import airbnbLogo from "./img/airbnb-logo 1.svg";
import travelLogo from "../Projects/Travel/img/travel-pin.svg";
import memeLogo from "../Projects/MemeGenerator/img/meme-logo.svg";

export function Home() {
  return (
    <main className="main__home">
      <div className="main__home-react-bg-container">
        <img className="main__home-react-bg-img" src={reactLogoMain} alt="" />
      </div>
      <header className="home__header">
        <NavLink className="home__header-logo" to="/">
          <img src={Logo} alt="React logo" />
          My React Apps
        </NavLink>
      </header>
      <section className="sidebar__home">
        <div className="sidebar__items sidebar__item-scrimba">
          <img
            className="sidebar__item-img"
            src={reactLogoMain}
            alt="scrimba logo"
          />

          <h3 className="sidebar__item-title">Home</h3>
        </div>
        <div className="sidebar__items sidebar__item-scrimba">
          <img
            className="sidebar__item-img"
            src={scrimbaLogo}
            alt="scrimba logo"
          />

          <h3 className="sidebar__item-title">Scrimba</h3>

          <div className="scrimba__hover_container">
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
          <img
            className="sidebar__item-img"
            src={rickAndMortyLogo}
            alt="rick and morty logo"
          />

          <h3 className="sidebar__item-title">Rick and Morty</h3>
        </div>
      </section>
      <section className="projects__ container-home"> </section>

      <footer className="layout-footer">
        <h1>This is the footer</h1>
      </footer>
    </main>
  );
}
