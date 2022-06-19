import TravelIcon from "../img/travel-icon.png";

export function TravelHeader() {
  return (
    <>
      <header className="travel__header">
        <img className="travel__logo" src={TravelIcon} alt="travel Logo" />
        <h5 className="travel__h3">My Travel Journal</h5>
      </header>
    </>
  );
}
