import FactsLogo from "../img/react__facts-logo.png";

export function ReactFactsHeader({ darkMode, togglerDarkMode }) {
  return (
    <>
      <header
        className={
          darkMode ? "react__facts-header-dark" : " react__facts-header-light"
        }
      >
        <img className="react__facts-logo" src={FactsLogo} alt="React Logo" />
        <h3 className="react__facts-h3">ReactFacts</h3>
        <div className="react__facts-toggler">
          <p
            className={
              darkMode
                ? "react__facts-toggler-light opacity"
                : "react__facts-toggler-light "
            }
          >
            Light
          </p>
          <div
            className={
              darkMode
                ? "react__facts-toggler-slider"
                : "react__facts-toggler-slider-light"
            }
            onClick={togglerDarkMode}
          >
            <div
              className={
                darkMode
                  ? "react__facts-toggler-slider-circle"
                  : "react__facts-toggler-slider-circle-light"
              }
            ></div>
          </div>

          <p
            className={
              darkMode
                ? "react__facts-toggler-dark"
                : "react__facts-toggler-dark opacity"
            }
          >
            Dark
          </p>
        </div>
      </header>
    </>
  );
}
