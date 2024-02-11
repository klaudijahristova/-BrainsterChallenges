import React from "react";

const Header = () => {
  let items:string[] = [
    "HOME",
    "BIKES",
    "GEAR",
    "PARTS",
    "TIRES",
    "SERVICE-INFO",
    "CATALOGUES",
    "CONTACT",
  ];

  let icons:string[] = ["fa-solid fa-magnifying-glass", "fa-solid fa-bag-shopping"]; 

  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="index.tsx">
            <img src={`./images/logo.png`} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center text-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {items.map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="icons">
            {icons.map((icon, index) => (
              <i key={index} className={`${icon}`} />
            ))}
          </div>
        </div>
      </nav>
      <h1>Bikes</h1>
    </header>
  );
};

export default Header;

