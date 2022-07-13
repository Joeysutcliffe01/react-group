import "./Home.css";
import { NavLink, Outlet } from "react-router-dom";
import scrimbaLogo from "./img/scrimba_logo.svg";

export function Home() {
  return (
    <main className="main__home">
      <section className="sidebar__home">
        <div className="sidebar__items">
          <img
            className="sidebar__item-img"
            src={scrimbaLogo}
            alt="scrimba logo"
          />

          <h3 className="sidebar__item-title">Scrimba</h3>
        </div>

        <div className="sidebar__nav-links-container">
          <NavLink className="sidebar__nav-links" to="/react-facts">
            Facts
          </NavLink>
          <NavLink className="sidebar__nav-links" to="/business-card">
            Card
          </NavLink>
          <NavLink className="sidebar__nav-links" to="/airbnb">
            Airbnb
          </NavLink>
          <NavLink className="sidebar__nav-links" to="/travel">
            Travel
          </NavLink>
          <NavLink className="sidebar__nav-links" to="/meme-generator">
            Memes
          </NavLink>
          <NavLink className="sidebar__nav-links" to="/tenzies">
            Tenzies
          </NavLink>
        </div>
      </section>
      <section className="projects__ container-home"> </section>
    </main>
  );
}
