import React from "react";
import { useLocale } from '../../hooks/useLocale'
import BR from '../../assets/brazil.svg'
import USA from '../../assets/usa.svg'

const Footer = () => {
    const { locale, changeLanguage } = useLocale();

    return (
      <footer className="footer">
        {`Copyright © Igor Silva 2023`}
        <button className="footer_button" onClick={() => changeLanguage("pt")} disabled={locale == "pt"}>
          <img src={BR} alt="BR" />
        </button>
        <button className="footer_button" onClick={() => changeLanguage("en")} disabled={locale == "en"}>
          <img src={USA} alt="USA" />
        </button>
      </footer>
    );
  };
  
  export default Footer;