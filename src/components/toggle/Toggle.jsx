import "./toggle.min.css";
import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Toggle = () => {
  const handleClick = () => {
    setVal((pre)=> !pre);
  };
  const {val, setVal} = useTheme();
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: !val ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
