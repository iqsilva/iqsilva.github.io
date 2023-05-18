import "./product.css";
import { ThemeContext } from "./../../context";
import { useContext } from "react";

const Product = ({ img, backimgdark, backimg, link }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <img src={darkMode ? backimgdark : backimg} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
