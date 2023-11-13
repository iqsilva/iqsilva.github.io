import "./alert.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Alert({ children, type, message }) {
  Alert.propTypes = {
    children: PropTypes.element.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={`alert ${type} " " ${!isShow && "hide"}`}>
      <span className="closebtn" onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
