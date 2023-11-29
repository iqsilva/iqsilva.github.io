import React, { useState } from "react";
import "./navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {t} = useTranslation();

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
          <a href="#home"  onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-home"></i> {t("navbar_home")}</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-user"></i> {t("navbar_about")}</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-folder-open"></i> {t("navbar_projects")}</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-code"></i> {t("navbar_skills")}</a>
        </li>
        <li>
          <a href="#timeline" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-briefcase"></i> {t("navbar_timeline")}</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}><i className="fa fa-envelope"></i> {t("navbar_contact")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
