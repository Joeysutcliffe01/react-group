import FactsBg from "../img/react__facts-bg.png";

export function ReactFactsMain({ darkMode }) {
  return (
    <>
      <main className="react__facts-main">
        <h1 className="react__facts-h1">Fun facts about React</h1>
        <ul className="react__facts-ul">
          <li className="react__facts-li">Was first released in 2013</li>
          <li className="react__facts-li">
            Was originally created by Jordan Walke
          </li>
          <li className="react__facts-li">
            Has well over 100K stars on GitHub
          </li>
          <li className="react__facts-li">Is maintained by Facebook</li>
          <li className="react__facts-li">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
        <img
          className={darkMode ? "react__facts-bg" : "react__facts-bg light"}
          src={FactsBg}
          alt="Facts background"
        />
      </main>
    </>
  );
}
