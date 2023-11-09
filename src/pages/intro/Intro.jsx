import React from "react";
import "./intro.min.css";
import Me from "../../assets/me.png";
import HtmlLogo from "../../assets/html.png";
import CssLogo from "../../assets/css.png";
import JavascriptLogo from "../../assets/javascript.png";
import NodeLogo from "../../assets/node.png";
import ReactLogo from "../../assets/react.png";
import Toggle from "../../components/toggle/Toggle";

const Intro = () => {
  return (
    <div className="i">
      <Toggle />
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
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="white"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Me" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
