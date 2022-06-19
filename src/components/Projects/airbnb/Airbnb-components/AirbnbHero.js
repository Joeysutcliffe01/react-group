import HeroImg from "../img/airbnb-hero.png";

export function AirbnbHero() {
  return (
    <section className="airbnb__hero-section">
      <img className="airbnb__hero-img" src={HeroImg} alt="Airbnbs" />
      <div className="hero__info-container">
        <h1 className="airbnb__hero-h1">Online Experiences</h1>
        <p className="airbnb__hero-p">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
