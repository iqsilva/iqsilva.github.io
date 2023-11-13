import "./contact.min.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_02zauo8",
        "template_sqz5xke",
        formRef.current,
        "user_Be6m1m0mYhVqtenR3rgu4"
      )
      .then(
        (result) => {
          setTimeout(() => {
            console.log(result.text);
            setDone(true);
            e.target.reset();
            setLoading(false);
          }, 3000);
        },
        (error) => {
          setTimeout(() => {
            console.log(error.text);
            e.target.reset();
            setLoading(false);
          }, 3000);
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
          {loading ? (
            <Loader/>
          ) : (
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
              {done && <Alert type="success" message="Thanks for your contact"/>}
            </form>
          )}
      </div>
    </div>
  );
};

export default Contact;
