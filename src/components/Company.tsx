import "./Company.css";

const items = [
  "src/components/absnews.png",
  "src/components/cnbc.png",
  "src/components/cnn.png",
  "src/components/fox-bus.png",
  "src/components/pbs.png",
  "src/components/the-new-york-times.png",
];

function Company() {
  return (
    <div className="company">
      {items.map((item, index) => (
        <img
          src={item}
          alt={item.replace(/-/g, " ").replace(".png", "")}
          key={index}
          className="company-image"
        />
      ))}
    </div>
  );
}

export default Company;
