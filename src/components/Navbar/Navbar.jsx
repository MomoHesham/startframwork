import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navstyle from "./Navbar.module.css";

export default function Navbar() {
  const [aboutactive, setaboutactive] = useState(false);
  const [portfolioactive, setportfolioactive] = useState(false);
  const [contactactive, setcontactactive] = useState(false);
  const { pathname } = useLocation();
  const [scrolltoop, setscrolltoop] = useState(false);
  useEffect(() => {
    if (pathname === '/startframwork/about') {
      setaboutactive(true);
    } else if (pathname === '/startframwork/portfolio') {
      setportfolioactive(true)
    } else if (pathname === '/startframwork/contact') {
      setcontactactive(true)
    } else {
      setaboutactive(false);
      setportfolioactive(false);
      setcontactactive(false);
    }

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 20) {
        setscrolltoop(true)
      } else {
        setscrolltoop(false)
      }
    })
  }, []);

  function setAboutActive() {
    setaboutactive(true);
    setportfolioactive(false);
    setcontactactive(false);
  }
  function setPortfolioActive() {
    setportfolioactive(true);
    setaboutactive(false);
    setcontactactive(false);
  }
  function setContActactive() {
    setcontactactive(true);
    setportfolioactive(false);
    setaboutactive(false);
  }

  return (
    <nav className={`navbar navbar-expand-lg  ${navstyle.myNavBar} ${scrolltoop?navstyle.scrollMenu:""} fixed-top customBg`}>
      <div className="container">
        <Link
          to={""}
          className="navbar-brand text-white fs-2 text-uppercase fw-bolder"
          onClick={() => {
            setportfolioactive(false);
            setaboutactive(false);
            setcontactactive(false);
          }}
        >
          Start Framework
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"about"}
                className={`nav-link fs-6 fw-bolder text-white text-uppercase rounded-2 ${
                  aboutactive ? "active" : ""
                }`}
                onClick={setAboutActive}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"portfolio"}
                className={`nav-link fs-6 fw-bolder text-white text-uppercase rounded-2 ${
                  portfolioactive ? "active" : ""
                }`}
                onClick={setPortfolioActive}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"contact"}
                className={`nav-link fs-6 fw-bolder text-white text-uppercase rounded-2 ${
                  contactactive ? "active" : ""
                }`}
                onClick={setContActactive}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
