import React, { useState } from "react";
import SkillsImage from "../../assets/skills.png";
import { soft, hard } from "../../data";

const Skills = () => {
  const [currentTab, setCurrentTab] = useState(true);
  const [currentArray, setCurrentArray] = useState(soft);

  const handleTabChange = (e) => {
    e.preventDefault();
    setCurrentTab(!currentTab);
    currentTab ? setCurrentArray(hard) : setCurrentArray(soft);
  };

  return (
    <div id="skills" className="skills">
      <div className="skills_left">
        <div className="skills_bg"></div>
        <img src={SkillsImage} alt="Skills Image" className="skills_img" />
      </div>
      <div className="skills_right">
        <h1 className="skills_title">My Skills</h1>
        <p className="skills_subtitle">Below is a list of the skills I possess to develop your project with quality and safety</p>
        <button onClick={handleTabChange}>{currentTab == true ? "See Hard" : "See Soft"} Skills</button>
        <div className="skills_container">
          <ul className="skills_list">
            {currentArray.map((item, i) => (
              <li key={i} className="skills_list_item">{item} <i className="fa fa-check-circle"></i></li>
            ))}
          </ul>
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