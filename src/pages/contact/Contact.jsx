import "./contact.min.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
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
      <div className="c-texts">
      <h1 className="c-title">Let&#39;s discuss your project</h1>
      <p className="c-desc">
            <b>Do you have an idea?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && alert("Thanks for your contact!")}
          </form>
      </div>
    </div>
  );
};

export default Contact;
