import React from "react";
import PropTypes from "prop-types";
import "./product.css";
import backimg from "../../assets/backimg.png";

const Product = ({ link, image }) => {
  Product.propTypes = {
    repo: PropTypes.string,
    link: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired
  };

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt="" className="p-img" />
        <img
          src={backimg}
          alt=""
          className="p-imgback"
        />
      </a>
    </div>
  );
};

export default Product;
