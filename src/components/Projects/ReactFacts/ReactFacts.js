import { useState } from "react";
import { ReactFactsHeader } from "./ReactFactsComponents/ReactFactsHeader";
import { ReactFactsMain } from "./ReactFactsComponents/ReactFactsMain";
import { GlobalSidebar } from "../../GlobalComponents/GlobalSidebar";
import "./ReactFacts.css";

export function ReactFacts() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <>
      <div className="react__facts-container">
        <GlobalSidebar />
        <div
          className={
            darkMode
              ? "react__facts-card-container-dark"
              : " react__facts-card-container-light"
          }
        >
          <ReactFactsHeader
            darkMode={darkMode}
            togglerDarkMode={handleToggle}
          />
          <ReactFactsMain darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}
