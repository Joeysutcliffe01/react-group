import "./Home.css";
import { NavLink } from "react-router-dom";

// -------------------------------------------------Image imports
import Logo from "../../images/react-logo-2.png";
import reactLogoMain from "./img/react-logo-bg.svg";
import rickAndMortyLogo from "./img/rickandmorty.png";
import scrimbaLogo from "./img/scrimba_logo.svg";
import diceLogo from "./img/dice-logo.png";
import reactLogo from "../Projects/ReactFacts/img/react__facts-logo.png";
import cardLogo from "./img/card-logo.png";
import airbnbLogo from "./img/airbnb-logo 1.svg";
import travelLogo from "../Projects/Travel/img/travel-pin.svg";
import memeLogo from "../Projects/MemeGenerator/img/meme-logo.svg";

// -------------------------------------------------Image project Screenshot
import tenziesScreen from "./img/project-img/tenzies-screenshot.png";
import memeScreen from "./img/project-img/meme-screenshot.png";
import airbnbScreen from "./img/project-img/airbnb-screenshot.png";
import travelScreen from "./img/project-img/travelScreenshot.png";

// ------------------------------------------------- Component imports
import { Sidebar } from "./HomeComponents/Sidebar";
import { Projects } from "./HomeComponents/Projects";

export function Home() {
  return (
    <main className="main__home">
      {/* ------------------------------------------- This is the large spining atom */}
      <div className="main__home-react-bg-container">
        <img
          className="main__home-react-bg-img"
          src={reactLogoMain}
          alt="React Logo"
        />
      </div>

      {/* ------------------------------------------- Header */}
      <header className="home__header">
        <NavLink className="home__header-logo" to="/">
          <img src={Logo} alt="React logo" />
          My React Apps
        </NavLink>
      </header>

      <section className="home__body-container">
        {/* ------------------------------------------- Sidebar */}
        <Sidebar
          // -----------------------------------Logo props
          reactLogoMain={reactLogoMain}
          scrimbaLogo={scrimbaLogo}
          reactLogo={reactLogo}
          cardLogo={cardLogo}
          airbnbLogo={airbnbLogo}
          travelLogo={travelLogo}
          memeLogo={memeLogo}
          diceLogo={diceLogo}
          rickAndMortyLogo={rickAndMortyLogo}
        />

        {/* ------------------------------------------- Projects */}
        <Projects
          // -----------------------------------Logo props
          reactLogoMain={reactLogoMain}
          scrimbaLogo={scrimbaLogo}
          reactLogo={reactLogo}
          cardLogo={cardLogo}
          airbnbLogo={airbnbLogo}
          travelLogo={travelLogo}
          memeLogo={memeLogo}
          diceLogo={diceLogo}
          rickAndMortyLogo={rickAndMortyLogo}
          // -----------------------------------Screenshot props
          tenziesScreen={tenziesScreen}
          memeScreen={memeScreen}
          airbnbScreen={airbnbScreen}
          travelScreen={travelScreen}
        />
      </section>

      {/* ------------------------------------------- Maybe do a footer TBD */}
      {/* <footer className="layout-footer">
        <h1>Not sure what to put here yet 🤔, tbd</h1>
      </footer> */}
    </main>
  );
}
