import "./ReactFacts.css";
import { ReactFactsHeader } from "./ReactFactsComponents/ReactFactsHeader";
import { ReactFactsMain } from "./ReactFactsComponents/ReactFactsMain";
export function ReactFacts() {
  return (
    <>
      <div className="react__facts-container">
        <div className="react__facts-card-container">
          <ReactFactsHeader />
          <ReactFactsMain />
        </div>
      </div>
    </>
  );
}
