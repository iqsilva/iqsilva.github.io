import React, { useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
  
const Navbar = () => {
    const { t } = useTranslation();
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const changeClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const {theme, setTheme} = useTheme();

    const onMouseEnter = () => {
        setDropdown(!dropdown);
    }

    const changeTheme = (e) => {
      e.preventDefault();
      setTheme(!theme);
  }

return (
        <nav className="navbar">
          <div className="menu-icon" onClick={changeClick}>
              <i className={click ? 'fa fa-times' : 'fa fa-bars'} ></i>
          </div>
          <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>
              <li className='nav-items'>
                <a href="#home" className='nav-links' onClick={closeMobileMenu}><i className="fa fa-home"></i>&nbsp;{t("navbar_home")}</a>
              </li>
              <li className='nav-items'>
                <a href="#about" className='nav-links' onClick={closeMobileMenu}><i className="fa fa-user"></i>&nbsp;{t("navbar_about")}</a>
              </li>
              <li className='nav-items'>
                <a href="#projects" className='nav-links' onClick={closeMobileMenu}><i className="fa fa-folder-open"></i>&nbsp;{t("navbar_projects")}</a>
              </li>
              <li className='nav-items'>
                <a href="#skills" className='nav-links' onClick={closeMobileMenu}><i className="fa fa-code"></i>&nbsp;{t("navbar_skills")}</a>
              </li>
              <li className='nav-items'>
                <a href="#timeline" className='nav-links' onClick={closeMobileMenu}><i className="fa fa-briefcase"></i>&nbsp;{t("navbar_timeline")}</a>
              </li>
              <li className='nav-items'>
                <a href="#contact" className='nav-links' onClick={closeMobileMenu}><i className="fa fa-envelope"></i>&nbsp;{t("navbar_contact")}</a>
              </li>
              <li className='nav-items'>
                  <a className='nav-links' onClick={onMouseEnter}><i className='fa fa-language' />&nbsp;{t("navbar_language")}
                    {dropdown && <Dropdown/>}
                  </a>
              </li>
              <li className='nav-items'>
                <button className='nav-button' onClick={changeTheme}>
                  {theme ? <i className="fa fa-moon-o"></i> : <i className="fa fa-sun-o"></i>}&nbsp;{t("navbar_theme")}
                </button>
              </li>
          </ul>
        </nav>
    );
};
  
export default Navbar;