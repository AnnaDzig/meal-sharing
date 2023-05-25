import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section>
        <ul>
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
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
