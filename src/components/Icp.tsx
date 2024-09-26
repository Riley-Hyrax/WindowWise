import "./Icp.css";
const items = ["A Homeowner", " A U.S Resident", " Within A Covered Zip Code"];
function Icp() {
  return (
    <section className="section-2">
      {items.map((item) => (
        <div className="card-top" key={item}>
          <div className="card-lower" key={item}>
            <p className="card-text" key={item}>
              {item}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Icp;
