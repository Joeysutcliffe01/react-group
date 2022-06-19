import AirbnbLogo from "../img/airbnb-logo.png";

export function AirbnbHeader() {
  return (
    <>
      <header className="airbnb__header">
        <a
          href="https://www.airbnb.es/rooms/4500525?adults=1&federated_search_id=5d23c822-3ad4-4209-9ea7-e79a3c0107e5&source_impression_id=p3_1619687159_oY8mPzLBsWNIJ27O&guests=1&check_in=2021-05-10&_set_bev_on_new_domain=1619687042_MWVlZjAyM2ZiNzVk&check_out=2021-05-14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="airbnb__logo" src={AirbnbLogo} alt="Airbnb Logo" />
        </a>
      </header>
    </>
  );
}
