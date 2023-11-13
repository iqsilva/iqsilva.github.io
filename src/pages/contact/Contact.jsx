import "./contact.min.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [user_name, setUserName] = useState();
  const [user_email, setUserEmail] = useState();
  const [user_subject, setUserSubject] = useState();
  const [message, setMessage] = useState("");

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
            resetForm();
            setLoading(false);
          }, 3000);
        },
        (error) => {
          setTimeout(() => {
            console.log(error.text);
            resetForm();
            setLoading(false);
          }, 3000);
        }
      );
  };

  const resetForm = () => {
    setUserName("");
    setUserSubject("");
    setUserEmail("");
    setMessage("");
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
            <div className="loader">
              <Loader/>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                value={user_subject}
                onChange={(e) => setUserSubject(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                value={user_email}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
