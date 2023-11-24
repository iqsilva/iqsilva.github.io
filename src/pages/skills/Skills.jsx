import React, { useState } from "react";
import SkillsImage from "../../assets/skills.png";
import { soft, hard } from "../../data";

const Skills = () => {
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
    isFiltered ? setCurrentArray(filteredArray) : setCurrentArray(previousArray)
    const text = currentArray.filter((item) => item.name === e.target.innerText.trim())[0].description;
    setCurrentSkill(text);
  };

  return (
    <div id="skills" className="skills">
      <div className="skills_left">
        <div className="skills_bg"></div>
        <img src={SkillsImage} alt="Skills Image" className="skills_img" />
      </div>
      <div className="skills_right">
        <h1 className="skills_title">My Skills</h1>
        <p className="skills_desc">Click on the button below to view my skills and click on the skill for a detailed description</p>
        {isFiltered ? (
          <div className="skills_button_container">
            <button className="skills_button" onClick={handleTabChange} disabled={currentTab}>Soft Skills</button>
            <button className="skills_button" onClick={handleTabChange} disabled={!currentTab}>Hard Skills</button>
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