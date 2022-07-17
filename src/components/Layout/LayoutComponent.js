import { NavLink, Outlet } from "react-router-dom";
import "./LayoutComponent.css";
import Logo from "../../images/react-logo-2.png";
import { useState } from "react";

export function LayoutComponent() {
  const [sideBar, setSidebar] = useState(false);

  return (
    <>
      <main className="outlet">
        <Outlet />
      </main>
    </>
  );
}
