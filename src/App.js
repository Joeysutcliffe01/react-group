// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";

// ----------------------------Components
import { LayoutComponent } from "./components/Layout/LayoutComponent";
import { Home } from "./components/Home/Home";
import { ReactFacts } from "./components/Projects/ReactFacts/ReactFacts";
import { BusinessCard } from "./components/Projects/BusinessCard/BusinessCard";
import { Airbnb } from "./components/Projects/airbnb/Airbnb";
import { Custom404Page } from "./components/Custom404Page/Custom404Page";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<Home />} />
        <Route path="/react-facts" element={<ReactFacts />} />
        <Route path="/business-card" element={<BusinessCard />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="*" element={<Custom404Page />} />
      </Route>
    </Routes>
  );
}

export default App;

// ------------------------Notes
// --Make sure to add BrowserRouter to the index.js file
