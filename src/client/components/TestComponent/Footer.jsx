import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

export const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <ul className="footer-section">
          <li>
            <Link to="/" className="footerLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="footerLink">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/meals" className="footerLink">
              Meals
            </Link>
          </li>
        </ul>{" "}
        <div className="footer-logo">
          <img src={Logo} id="logo-footer" alt="Logo" /> Meal Sharing
        </div>
      </section>
    </footer>
  );
};

export default Footer;
