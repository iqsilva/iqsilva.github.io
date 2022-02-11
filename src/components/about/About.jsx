import "./about.css"
import Computer from "../../img/computer.jpg"
import Fatec from "../../img/fatec.png"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                    src={Computer} 
                    alt="computer" 
                    className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I'm a Systems Analysis and Development Technologist
                </p>
                <p className="a-desc">
                    I develop several types of applications, always focusing on optimizing processes, without compromising the final quality.
                </p>
            
                <p className="a-sub">Agile methodologies</p>
                <p className="a-desc">I use agile methodologies to develop my projects in harmony, save resources, and acquire agility and efficiency.</p>
            
            
                <p className="a-sub">Soft Skills</p>
                <p className="a-desc">I am always developing my skills and competencies related to human behavior to make the work environment a pleasant place.</p>
            
            
                <p className="a-sub">Languages</p>
                <p className="a-desc">I am attending an English course, where I will achieve fluency and proficiency by January 2022. Mother tongue: Portuguese.</p>
            
                <div className="a-award">
                    <img src={Fatec} alt="fatec" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Fatec Indaiatuba</h4>
                        <p className="a-award-desc">
                            Graduate Education, Systems Analysis and Development 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
