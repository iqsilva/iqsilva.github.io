import React, { createContext, useState } from "react";
import i18n from "../i18n";
import PropTypes from "prop-types";

export const LocaleContext = createContext();
  
export const LocaleProvider = ({ children }) => {
    LocaleProvider.propTypes = {
        children: PropTypes.string.isRequired
    };
    const [locale, setLocale] = useState(i18n.language);

    i18n.on('languageChanged', () => setLocale(i18n.language))
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
  
    return  <LocaleContext.Provider value={{ locale, setLocale, changeLanguage}}>
                {children}
            </LocaleContext.Provider>;
};