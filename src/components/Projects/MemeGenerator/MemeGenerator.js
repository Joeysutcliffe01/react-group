import "./MemeGenerator.css";
// import Data from "./Data";
import { MemeGeneratorHeader } from "./MemeGenerator-Components/MemeGeneratorHeader";
import { MemeGeneratorMain } from "./MemeGenerator-Components/MemeGeneratorMain";
import { GlobalSidebar } from "../../GlobalComponents/GlobalSidebar";

// console.log("Data", Data);

export function MemeGenerator() {
  return (
    <>
      <section className="MemeGenerator__container">
        <GlobalSidebar />
        <div className="MemeGenerator__card">
          <MemeGeneratorHeader />
          <MemeGeneratorMain />
        </div>
      </section>
    </>
  );
}
