import "./about.css"
import Igor from "../../img/igor.jpg"
import Award from "../../img/award.png"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                    src={Igor} 
                    alt="" 
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
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
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
