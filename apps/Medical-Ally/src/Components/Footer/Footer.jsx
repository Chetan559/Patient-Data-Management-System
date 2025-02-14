import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Medical-<span className="ft-sign">Ally</span>
            </p>
            <p className="ft-description">
              Your well-being is our priority – trust Medical-Ally for
              personalized healthcare solutions tailored just for you.
            </p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Health Data Input and Management</a>
            </li>
            <li>
              <a href="#services">Doctor Verification and Analysis</a>
            </li>
            <li>
              <a href="#services">Communication and Collaboration</a>
            </li>
            <li>
              <a href="#services">GPT-Powered Analysis and Insights</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthapp.com">support@medicalally.com</a>
            </li>
            <li>
              <a href="mailto:appointment@healthapp.com">
                appointment@medicalally.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890">+1234567890</a>
            </li>
            <li>
              <a href="tel:+9876543210">+9876543210</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 Medical-Ally. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
