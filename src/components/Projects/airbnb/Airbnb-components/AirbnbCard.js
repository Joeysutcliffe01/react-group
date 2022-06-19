import airbnbStart from "../img/airbnb-star.png";

export function AirbnbCard({
  country,
  img,
  price,
  rating,
  reviewCount,
  title,
  openSpots,
}) {
  let badge;

  if (openSpots === 0) {
    badge = "Sold Out";
  } else if (country === "Online") {
    badge = "Online";
  }
  //   console.log("props", props);
  console.log("openSpots", openSpots);
  return (
    <main className="airbnb__main-container">
      <div className="airbnb-card">
        {/* If we want to have only one conditional */}
        {/* {openSpots === 0 && <h4 className="airbnb__card-soldout"> Sold Out</h4>} */}

        {badge && <h4 className="airbnb__card-soldout"> {badge}</h4>}
        <img className="airbnb__card-img" src={`../img/${img}`} alt={title} />
        {console.log(img)}
        <div className="airbnb__card-stats">
          <img
            className="airbnb__card-star"
            src={airbnbStart}
            alt="Rating star"
          />
          <span className="airbnb__card-gray">{rating}</span>
          <span className="airbnb__card-gray">({reviewCount}) </span>
          <span className="airbnb__card-gray">•</span>
          <span className="airbnb__card-gray">{country}</span>
          <p>{title}</p>
          <p>
            {" "}
            <span className="airbnb__card-bold">From €{price}</span>{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
