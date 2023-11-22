import React from "react";
import styles from "./about.module.css";
import Avatar from "../../assets/avatar-about.png";
import CV from '../../resources/cv.pdf';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'Igor-Silva-CV';
    link.href = CV;
    link.click();
  };
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about_left}>
        <div className={styles.about_left_wrapper}>
        <h1 className={styles.about_title}>About</h1>
          <p className={styles.about_desc}>
          <b>Software Developer</b> with five years of experience in developing <b>web</b> and <b>mobile</b> applications for various clients, especially in the <b>healthcare sector</b>.
            <br /><br />
            Passionate about creating solutions that <b>empower</b> users and <b>improve</b> their lives.
            Always eager to <b>learn</b> new technologies and frameworks.
            <br /><br />
            Searching for <b>opportunities</b> to apply the skills and experience to <b>challenging</b> and <b>meaningful</b> projects.
          </p>
          <button onClick={handleDownload}>Download CV</button>
        </div>
      </div>
      <div className={styles.about_right}>
        <div className={styles.about_bg}></div>
          <img src={Avatar} alt="Avatar" className={styles.about_img} />
      </div>
    </div>
  );
};

export default About;
