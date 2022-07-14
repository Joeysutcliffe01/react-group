import { NavLink, Outlet } from "react-router-dom";
import "./LayoutComponent.css";
import Logo from "../../images/react-logo-2.png";
import { useState } from "react";

export function LayoutComponent() {
  const [sideBar, setSidebar] = useState(false);

  return (
    <>
      {/* <nav className="layout__nav">
        <NavLink className="layout__nav-logo" to="/">
          <img src={Logo} alt="React logo" />
        </NavLink>
        <NavLink className="layout__nav-links" to="/react-facts">
          Facts
        </NavLink>
        <NavLink className="layout__nav-links" to="/business-card">
          Card
        </NavLink>
        <NavLink className="layout__nav-links" to="/airbnb">
          Airbnb
        </NavLink>
        <NavLink className="layout__nav-links" to="/travel">
          Travel
        </NavLink>
        <NavLink className="layout__nav-links" to="/meme-generator">
          Memes
        </NavLink>
        <NavLink className="layout__nav-links" to="/tenzies">
          Tenzies
        </NavLink>
      </nav> */}
      <main className="outlet">
        <Outlet />
      </main>

      {/* <footer className="layout-footer">
        <h1>This is the footer</h1>
      </footer> */}
    </>
  );
}
