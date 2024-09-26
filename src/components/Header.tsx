import "./header.css";

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="window-logo.webp"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
