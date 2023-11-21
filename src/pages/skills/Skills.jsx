import React from "react";
import styles from "./skills.module.css";
import SkillsImage from "../../assets/skills.png";

const Skills = () => {
  const [currentTab, setCurrentTab] = React.useState(true);

  const handleTabChange = (e) => {
    e.preventDefault();
    setCurrentTab(!currentTab);
  };

  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.skills_left}>
        <div className={styles.skills_bg}></div>
        <img src={SkillsImage} alt="Skills Image" className={styles.skills_img} />
      </div>
      <div className={styles.skills_right}>
        <h1 className={styles.skills_title}>My Skills</h1>
        <p className={styles.skills_subtitle}>Below is a list of the skills I possess to develop your project with quality and safety</p>
        <button onClick={handleTabChange}>{currentTab == true ? "Soft" : "Hard"} Skills</button>
        {
          currentTab == true ? (
          <div className={styles.skills_container}>
            <ul className={styles.skills_list}>
              <li className={styles.skills_list_item}>Effective Communication <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Teamwork <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Critical Thinking <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Adaptability <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Problem Solving <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Time Management <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Empathy <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Leadership <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Strategic Thinking <i className="fa fa-check-circle"></i></li>
              <li className={styles.skills_list_item}>Continuous learning <i className="fa fa-check-circle"></i></li>
            </ul>
          </div>
          ):(
            <div className={styles.skills_container}>
              <ul className={styles.skills_list}>
                <li className={styles.skills_list_item}>Programming Languages <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Algorithms and Data Structures <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Web Development <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Database Management <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Debugging and Testing <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Version Control <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Mobile Development <i className="fa fa-check-circle"></i></li>
                <li className={styles.skills_list_item}>Problem Solving <i className="fa fa-check-circle"></i></li>
              </ul>
            </div>
          )}
          <br />
          <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Skills;