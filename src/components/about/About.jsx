import "./about.css";
import Computer from "../../img/computer.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={Computer} alt="computer" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Soft Skills</p>
        <ul className="a-desc">
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
        <p className="a-sub">Hard Skills</p>
        <ul className="a-desc">
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

export default About;
