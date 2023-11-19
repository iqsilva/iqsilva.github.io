import React from "react";
import styles from "./skills.module.css";
import Computer from "../../assets/computer.png";

const Skills = () => {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.skills_left}>
        <div className={styles.skills_bg}></div>
        <div className={styles.skills_card}>
          <img src={Computer} alt="Computer" className={styles.skills_img} />
        </div>
      </div>
      <div className={styles.skills_right}>
        <h1 className={styles.skills_title}>Skills</h1>
        <p className={styles.skills_sub}>Soft Skills</p>
        <ul className={styles.skills_soft}>
          <li>Effective Communication</li>
          <li>Teamwork</li>
          <li>Critical Thinking</li>
          <li>Adaptability</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Empathy</li>
          <li>Leadership</li>
          <li>Strategic Thinking</li>
          <li>Continuous learning</li>
        </ul>
        <p className={styles.skills_sub}>Hard Skills</p>
        <ul className={styles.skills_hard}>
          <li>Programming Languages</li>
          <li>Algorithms and Data Structures</li>
          <li>Web Development</li>
          <li>Database Management</li>
          <li>Debugging and Testing</li>
          <li>Version Control</li>
          <li>Mobile Development</li>
          <li>Problem Solving</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
