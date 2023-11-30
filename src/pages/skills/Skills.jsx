import React, { useState } from "react";
import SkillsImage from "../../assets/skills.svg";
import { soft, hard } from "../../data";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const {t} = useTranslation();

  const [currentTab, setCurrentTab] = useState(true);
  const [currentArray, setCurrentArray] = useState(soft);
  const [previousArray, setPreviousArray] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [isFiltered, setFiltered] = useState(true);
  
  const handleTabChange = (e) => {
    e.preventDefault();
    setCurrentTab(!currentTab);
    currentTab ? setCurrentArray(hard) : setCurrentArray(soft);
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    setPreviousArray(currentArray);
    const filteredArray = currentArray.filter((item) => item.name == e.target.innerText.trim());
    setFiltered(!isFiltered);
    isFiltered ? setCurrentArray(filteredArray) : setCurrentArray(previousArray);
    const text = currentArray.filter((item) => item.name === e.target.innerText.trim())[0].description;
    setCurrentSkill(text);
  };

  return (
    <div id="skills" className="skills">
      <div className="skills_left">
        <img src={SkillsImage} alt="Skills Image" className="skills_img" />
      </div>
      <div className="skills_right">
        <h1 className="skills_title">{t("skills_title")}</h1>
        <p className="skills_desc">{t("skills_description")}</p>
        {isFiltered ? (
          <div className="skills_button_container">
            <button className="skills_button" onClick={handleTabChange} disabled={currentTab}>{t("soft_skills")}</button>
            <button className="skills_button" onClick={handleTabChange} disabled={!currentTab}>{t("hard_skills")}</button>
          </div>
        ):(null)}
        <div className="skills_container">
          <ul className="skills_list">
            {currentArray.map((item, i) => (
              <li key={i} onClick={handleItemClick} className="skills_list_item">
                {isFiltered ? (<i className="fa fa-plus"/>) : (<i className="fa fa-arrow-left"/>)}
                &nbsp;
                {item.name}
              </li>
            ))}
          </ul>
          {!isFiltered ? (<p className="skills_selected_item">{currentSkill}</p>) : (null)}
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Skills;