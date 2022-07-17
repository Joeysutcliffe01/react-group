import { NavLink } from "react-router-dom";

export function Projects({
  //--------------------------Screenshot props
  airbnbScreen,
  tenziesScreen,
  memeScreen,
  travelScreen,

  //--------------------------Logo props
  reactLogoMain,
  scrimbaLogo,
  reactLogo,
  cardLogo,
  airbnbLogo,
  travelLogo,
  memeLogo,
  diceLogo,
  rickAndMortyLogo,
}) {
  return (
    <section className="projects__des-container">
      <div className="projcts">
        <NavLink className="project__link" to="/tenzies">
          <img
            className="projects__des-img"
            src={tenziesScreen}
            alt="Tenzies Screen"
          />
          <h1 className="projects__des-h1">Tenzies</h1>
          <img className="projects__des-logo" src={diceLogo} alt="Dice Logo" />
        </NavLink>
      </div>
      <div className="projcts">
        <NavLink className="project__link" to="/airbnb">
          <img
            style={{ height: "8rem" }}
            className="projects__des-img"
            src={airbnbScreen}
            alt=" airbn screenshot"
          />
          <h1 className="projects__des-h1">Airbnb </h1>
          <img
            style={{ width: "3rem" }}
            className="projects__des-logo"
            src={airbnbLogo}
            alt=" Airbnb Logo"
          />
        </NavLink>
      </div>
      <div className="projcts">
        <NavLink className="project__link" to="/meme-generator">
          <img
            className="projects__des-img"
            src={memeScreen}
            alt=" Meme Screenshot"
          />
          <h1 className="projects__des-h1">Meme Generator</h1>
          <img className="projects__des-logo" src={memeLogo} alt=" Meme Logo" />
        </NavLink>
      </div>
      <div className="projcts">
        <NavLink className="project__link" to="/travel">
          <img
            className="projects__des-img"
            src={travelScreen}
            alt=" Travel Screenshot"
          />
          <h1 className="projects__des-h1">Travel</h1>
          <img
            style={{ width: "3rem" }}
            className="projects__des-logo"
            src={travelLogo}
            alt=" Travel Logo"
          />
        </NavLink>
      </div>
      {/* <div className="projcts">
        <NavLink className="project__link" to="/travel">
          <img
            className="projects__des-img"
            src={travelScreen}
            alt=" Travel Screenshot"
          />
          <h1 className="projects__des-h1">Travel</h1>
          <img
            style={{ width: "3rem" }}
            className="projects__des-logo"
            src={travelLogo}
            alt=" Travel Logo"
          />
        </NavLink>
      </div> */}
    </section>
  );
}
