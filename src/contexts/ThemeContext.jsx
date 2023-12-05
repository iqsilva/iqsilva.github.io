import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
  ThemeProvider.propTypes = {
    children: PropTypes.string.isRequired
  };
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};