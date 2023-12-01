import React from "react";
import Avatar from "../../assets/home.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation();

  return (
    <div id="home" className="home">
      <div className="home_left">
        <img src={Avatar} alt="Avatar" className="home_img" />
      </div>
      <div className="home_right">
        <div className="home_right_wrapper">
          <h1 className="home_title">Igor Silva</h1>
          <h2 className="home_intro">{t("home_intro")}</h2>
          <p className="home_desc">
            {t("home_description")}
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
