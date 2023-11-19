import React from "react";
import "./intro.min.css";
import Me from "../../assets/me.png";
import HtmlLogo from "../../assets/html.png";
import CssLogo from "../../assets/css.png";
import JavascriptLogo from "../../assets/javascript.png";
import NodeLogo from "../../assets/node.png";
import ReactLogo from "../../assets/react.png";

const Intro = () => {
  return (
    <div id="home" className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Igor Silva</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <img src={HtmlLogo} alt="HTML Logo" className="i-title-img" />
              <img src={CssLogo} alt="CSS Logo" className="i-title-img" />
              <img src={JavascriptLogo} alt="JavaScript Logo" className="i-title-img" />
              <img src={NodeLogo} alt="Node.js Logo" className="i-title-img" />
              <img src={ReactLogo} alt="React Logo" className="i-title-img" />
            </div>
          </div>
          <br />
          <p className="i-desc">
            <b>Software Developer</b> with five years of experience in developing <b>web</b> and <b>mobile</b> applications for various clients, especially in the <b>healthcare sector</b>.
            <br /><br />
            Passionate about creating solutions that <b>empower</b> users and <b>improve</b> their lives.
            Always eager to <b>learn</b> new technologies and frameworks.
            <br /><br />
            Searching for <b>opportunities</b> to apply the skills and experience to <b>challenging</b> and <b>meaningful</b> projects.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Me" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
