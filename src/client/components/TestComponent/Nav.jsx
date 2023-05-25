import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

export const Nav = () => {
  return (
    <div className="NavBarContainer">
      <div className="heading-container">
        <img src={Logo} id="logo" alt="Logo" /> Meal Sharing
      </div>
      <div>
        <div>
          <ul className="listContainer">
            <li className="list-container-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-container-item">
              <Link to="/meals/:id">Meals</Link>
            </li>
            <li className="list-container-item">
              <Link to="/add-your-meal">Add Your Meal</Link>
            </li>
            <li className="list-container-item">
              <Link to="/about">About</Link>
            </li>
            <li className="list-container-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
