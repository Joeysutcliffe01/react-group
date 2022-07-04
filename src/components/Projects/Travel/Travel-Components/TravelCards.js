import Data from "../Data";
import TravelPin from "../img/travel-pin.svg";

// console.log(Data);

export function TravelCards(props) {
  return (
    <>
      <main className="travel__main">
        <section className="travel__card">
          <img
            className="travel__card-img"
            src={props.item.imageUrl}
            alt={props.item.title}
          />
          <div className="travel__card-info">
            <div className="travel__card-header-container">
              <img className="travel__card-pin" src={TravelPin} alt="Pin" />
              <h4 className="travel__card-h4">{props.item.title}</h4>
              <a href={props.item.googleMapsUrl} className="travel__card-a">
                View on Google Maps
              </a>
            </div>
            <h1 className="travel__card-h1">{props.item.location}</h1>
            <h3 className="travel__card-h1">
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p className="travel__card-p">{props.item.description}</p>
          </div>
        </section>
      </main>
    </>
  );
}
