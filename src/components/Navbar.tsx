import React, { useState } from "react";
import "../App.css";
import ph from "../assets/images/ph.png";
interface Props {
  navitems: string[];
}
function Navbar({ navitems }: Props) {
  const [i, si] = useState(-1);
  return (
    <header className="bg-navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container-lg">
        <div className="logo d-flex">
          <a className="navbar-brand" href="#">
            Lost <span>Games</span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto gap-4">
            {navitems.map((item, index) => (
              <li className="nav-item">
                <a
                  className={i === index ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  onClick={() => si(index)}
                  key={item}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="form-check form-switch switch">
            <img src="" alt="" />
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div>
          {" "}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
