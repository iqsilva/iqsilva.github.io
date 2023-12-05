import React from "react";
import Avatar from "../../assets/about.svg";
import CV from '../../resources/cv.pdf';
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'Igor-Silva-CV';
    link.href = CV;
    link.click();
  };
  return (
    <div id="about" className="about">
      <div className="about_left">
        <div className="about_left_wrapper">
        <h1 className="about_title">{t("about_title")}</h1>
          <p className="about_desc">
          {t("about_description_1")}
          <br /><br />
          {t("about_description_2")}
          <br /><br />
          {t("about_description_3")}
          </p>
          <button className="btn" onClick={handleDownload}>{t("about_button")}</button>
        </div>
      </div>
      <div className="about_right">
          <img src={Avatar} alt="Avatar" className="about_img" />
      </div>
    </div>
  );
};

export default About;
