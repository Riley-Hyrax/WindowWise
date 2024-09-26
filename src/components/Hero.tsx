import "./Hero.css";

function hero() {
  const heroText =
    "New Verified Relief Initiative Helps Homeowners Upgrade Their Windows";

  const heroPara = "Deadline At The End Of This Month";

  const heroButtonText = "Check My Zip Code";

  const trustPilotText = "Rated 4.9/5 by thousands of happy homeowners.";

  return (
    <section className="section-1">
      <div className="hero-section1">
        <h1>{heroText}</h1>
        <p className="lead lead-top">{heroPara}</p>
        <button className="btn btn-danger hero-button">{heroButtonText}</button>
        <img
          src="src\components\trustpilot.jpg"
          alt="trustpilot rating"
          className="img--trustpilot"
        />
        <p className="lead lead-trustpilot">{trustPilotText}</p>
      </div>
      <div className="hero-section2"></div>
    </section>
  );
}

export default hero;
