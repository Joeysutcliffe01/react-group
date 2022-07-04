import "./airbnb.css";
import { AirbnbHeader } from "./Airbnb-components/AirbnbHeader";
import { AirbnbHero } from "./Airbnb-components/AirbnbHero";
import { AirbnbCard } from "./Airbnb-components/AirbnbCard";
import Data from "./Data";

// console.log(Data);

export function Airbnb() {
  const airbnbData = Data.map((item) => {
    return (
      <AirbnbCard
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <>
      <div className="airbnb__container">
        <div className="airbnb__container-inner">
          <AirbnbHeader />
          <AirbnbHero />
          <section className="airbnb__card-containerard">{airbnbData}</section>
        </div>
      </div>
    </>
  );
}
