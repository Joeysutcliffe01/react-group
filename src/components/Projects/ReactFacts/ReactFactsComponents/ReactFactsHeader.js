import FactsLogo from "../img/react__facts-logo.png";

export function ReactFactsHeader() {
  return (
    <>
      <header className="react__facts-header">
        <img className="react__facts-logo" src={FactsLogo} alt="React Logo" />
        <h3 className="react__facts-h3">ReactFacts</h3>
        <h5 className="react__facts-h5">React Course - Project 1</h5>
      </header>
    </>
  );
}
