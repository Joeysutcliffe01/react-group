import "./MemeGenerator.css";
// import Data from "./Data";
import { MemeGeneratorHeader } from "./MemeGenerator-Components/MemeGeneratorHeader";
import { MemeGeneratorMain } from "./MemeGenerator-Components/MemeGeneratorMain";

// console.log("Data", Data);

export function MemeGenerator() {
  return (
    <>
      <section className="MemeGenerator__container">
        <div className="MemeGenerator__card">
          <MemeGeneratorHeader />
          <MemeGeneratorMain />
        </div>
      </section>
    </>
  );
}
