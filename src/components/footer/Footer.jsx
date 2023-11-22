import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="footer">{`Copyright © Igor Silva ${year}`}</footer>;
  };
  
  export default Footer;