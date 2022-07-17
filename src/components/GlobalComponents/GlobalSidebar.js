import { useState } from "react";

import sideBarLogo from "../Home/img/react-logo-bg.svg";
import sideBarLogoClose from "../Home/img/logo-x.png";
import { MainSidebar } from "./MainSidebar";

export function GlobalSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className={isOpen ? "slider__closed" : "slider__open"}>
      <img
        className={isOpen ? "sidebar__logo-closed" : "sidebar__logo-open"}
        src={isOpen ? sideBarLogo : sideBarLogoClose}
        alt=""
        onClick={handleClick}
      />
      <div className={isOpen ? "invisible" : "visible"}>
        <MainSidebar />
      </div>
    </div>
  );
}
