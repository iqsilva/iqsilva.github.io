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
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/"><i className="fa fa-home"></i> Home</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/about"><i className="fa fa-code"></i> About</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/product"><i className="fa fa-folder-open"></i> Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/contact"><i className="fa fa-envelope"></i> Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
