import React from "react";
import Avatar from "../../assets/avatar.png";
import Typewriter from "../../components/typewriter/Typewriter";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home_left">
        <div className="home_bg"></div>
        <img src={Avatar} alt="Avatar" className="home_img" />
      </div>
      <div className="home_right">
        <div className="home_right_wrapper">
          <h1 className="home_title">Igor Silva</h1>
          <h2 className="home_intro"><Typewriter text="Software Developer" delay={200} infinite /></h2>
          <p className="home_desc">
            Based in São Paulo, Brazil and loves to create things for the web.
          </p> 
          <ul className="home_list">
            <li className="home_list_item">
              <a href="https://linkedin.com/in/iqsilva" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            </li>
            <li className="home_list_item">
              <a href="https://github.com/iqsilva" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
