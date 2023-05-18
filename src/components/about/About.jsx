import "./about.css";
import Computer from "../../img/computer.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Computer} alt="computer" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a Systems Analysis and Development Technologist
        </p>

        <p className="a-sub">Soft Skills</p>
          <ul className="a-desc">
            <li>Effective communication</li>
            <li>Teamwork</li>
            <li>Critical thinking</li>
            <li>Adaptability</li>
            <li>Problem solving</li>
            <li>Time management</li>
            <li>Empathy</li>
            <li>Leadership</li>
            <li>Strategic thinking</li>
            <li>Continuous learning</li>
          </ul>

        <p className="a-sub">Hard Skills</p>
          <ul className="a-desc">
            <li>Fatec Indaiatuba - Graduate Education, Systems Analysis and Development</li>
            <li>SENAI "Prof. Dr. Euryclides de Jesus Zerbini" - Technical Education, Computer Science Technician</li>
            <li>Rockfeller Blumenau - Extracurricular Education, English</li>
          </ul>
      </div>
    </div>
  );
};

export default About;
