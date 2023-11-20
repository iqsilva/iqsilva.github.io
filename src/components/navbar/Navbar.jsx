import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="brand">
        <p>Igor&#39;s Portfolio</p>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#home"  onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-home"></i> Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-user"></i> About</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-folder-open"></i> Projects</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-code"></i> Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-envelope"></i> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
