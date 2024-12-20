import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleRegistrationClickDoctor = () => {
    navigate("/");
  };

  const handleRegistrationClickPathology = () => {
    navigate("/Pathology");
  };

  const handleAnalyseBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Medical-<span className="navbar-sign">Ally</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-links">
            Services
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-links">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-links">
            Doctors
          </Link>
        </li>
      </ul>

      {/* Doctor registration button */}
      <button
        className="text-appointment-btn"
        type="button"
        onClick={handleRegistrationClickDoctor}
      >
        <FontAwesomeIcon icon={faArrowRightToBracket} /> Doctor
      </button>

      <button
        className="text-appointment-btn"
        type="button"
        onClick={handleRegistrationClickPathology}
      >
        <FontAwesomeIcon icon={faArrowRightToBracket} /> Pathology
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">{/* Mobile navbar items */}</ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Header;
