import React from "react";
import PropTypes from "prop-types";
import backimg from "../../assets/card.svg";

const Card = ({ link, image }) => {
  Card.propTypes = {
    repo: PropTypes.string,
    link: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired
  };

  return (
    <div className="card">
      <div className="card_inner">
        <div className="card_front">
          <img className="card_img" src={image} alt="Avatar"/>
        </div>
        <div className="card_back">
        <a href={link} target="_blank" rel="noreferrer">
          <img className="card_img" src={backimg} alt="Avatar" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
