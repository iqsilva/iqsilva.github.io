import React from "react";
import styles from "./home.module.css";
import Avatar from "../../assets/avatar.png";
import Typewriter from "../../components/typewriter/Typewriter";

const Home = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.home_left}>
        <div className={styles.home_bg}></div>
        <img src={Avatar} alt="Avatar" className={styles.home_img} />
      </div>
      <div className={styles.home_right}>
        <div className={styles.home_right_wrapper}>
          <h1 className={styles.home_name}>Igor Silva</h1>
          <h2 className={styles.home_intro}><Typewriter text="Software Developer" delay={200} infinite /></h2>
          <p className={styles.home_desc}>
            Based in São Paulo, Brazil and loves to create things for the web.
          </p> 
          <ul className={styles.home_list}>
            <li className={styles.home_list_item}>
              <a href="https://linkedin.com/in/iqsilva" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            </li>
            <li className={styles.home_list_item}>
              <a href="https://github.com/iqsilva" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
