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
        <p className="a-desc">
          I develop several types of applications, always focusing on optimizing
          processes, without compromising the final quality.
        </p>

        <p className="a-sub">Soft Skills</p>
        <p className="a-desc">
          I am always developing my skills and competencies related to human
          behavior to make the work environment a pleasant place.
        </p>

        <p className="a-sub">Fatec Indaiatuba</p>
        <p className="a-desc">
          {" "}
          Graduate Education, Systems Analysis and Development
        </p>

        <p className="a-sub">SENAI "Prof. Dr. Euryclides de Jesus Zerbini"</p>
        <p className="a-desc">
          {" "}
          Technical Education, Computer Science Technician
        </p>

        <p className="a-sub">Rockfeller Blumenau</p>
        <p className="a-desc">
          {" "}
          Extracurricular Education, English
        </p>
      </div>
    </div>
  );
};

export default About;
