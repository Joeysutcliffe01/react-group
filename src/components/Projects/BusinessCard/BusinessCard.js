import "./BusinessCard.css";
import { BusinessCardHeader } from "./BusinessCardComponents/BusinessCardHeader";
import { BusinessCardMain } from "./BusinessCardComponents/BusinessCardMain";
import { BusinessCardFooter } from "./BusinessCardComponents/BusinessCardFooter";
import { GlobalSidebar } from "../../GlobalComponents/GlobalSidebar";

export function BusinessCard() {
  return (
    <>
      <div className="businesscard__container">
        <GlobalSidebar />
        <div className="businesscard__card-container">
          <BusinessCardHeader />
          <BusinessCardMain />
          <BusinessCardFooter />
        </div>
      </div>
    </>
  );
}
