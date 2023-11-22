import React from "react";
import PropTypes from "prop-types";
import backimg from "../../assets/backimg.png";

const Card = ({ link, image }) => {
  Card.propTypes = {
    repo: PropTypes.string,
    link: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired
  };

  return (
    <div className="card">
      <div className="card_browser">
        <div className="card_circle"></div>
        <div className="card_circle"></div>
        <div className="card_circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt="" className="card_img" />
        <img
          src={backimg}
          alt=""
          className="card_imgback"
        />
      </a>
    </div>
  );
};

export default Card;
