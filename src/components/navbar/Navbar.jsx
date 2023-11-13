import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Igor&#39;s Portfolio
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/product">Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
