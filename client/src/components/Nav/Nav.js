import React from "react";
import { Link } from "react-router-dom";
import '../../styles/NavFooter.css';


function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-links-list">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-link">
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
