import "./Travel.css";
import Data from "./Data";
import { TravelHeader } from "./Travel-Components/TravelHeader";
import { TravelCards } from "./Travel-Components/TravelCards";

console.log("Data", Data);

export function Travel() {
  const CardData = Data.map((item) => {
    return <TravelCards key={item.id} item={item} />;
  });

  console.log("CardData", CardData);
  return (
    <>
      <div className="travel__container">
        <div className="travel__card-container">
          <TravelHeader />
          {CardData}
        </div>
      </div>
    </>
  );
}
