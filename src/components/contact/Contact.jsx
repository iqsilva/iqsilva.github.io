import "./contact.css";
import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02zauo8",
        "template_sqz5xke",
        formRef.current,
        "user_Be6m1m0mYhVqtenR3rgu4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              igor.queiros@outlook.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Do you have an idea?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#FFF" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#FFF" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#FFF" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#FFF" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button style={{ color: darkMode && "#000" }}>Submit</button>
            {done && alert("Thanks for your contact!")}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
