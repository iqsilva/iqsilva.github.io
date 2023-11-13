import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [val, setVal] = useState(true);
  return (
    <ThemeContext.Provider value={{ val, setVal }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const val = useContext(ThemeContext);
  if (val === undefined) throw new Error("Context is undefined");
  return val;
};

export default ThemeProvider;
