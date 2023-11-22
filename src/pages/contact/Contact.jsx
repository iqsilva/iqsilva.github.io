import React, { useRef, useState, useEffect } from "react";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import EmailImage from "../../assets/email.png";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        user_name: nameRef.current.value,
        user_subject: emailRef.current.value,
        user_email: subjectRef.current.value,
        message: messageRef.current.value,
      });
      setAlert(1);
    } catch (error) {
      console.log(error);
      setAlert(2);
    } finally {
      e.target.reset();
      setLoading(false);
    }
  };

  useEffect(() => emailjs.init(import.meta.env.VITE_USER_ID), []);

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contact_left}>
        <div className={styles.contact_left_wrapper}>
        <h1 className={styles.contact_title}>Let&#39;s discuss your project</h1>
        <p className={styles.contact_desc}>
          <b>Do you have an idea?</b> Get in touch. Always available for
          freelancing if the right project comes along me.
        </p>
        {loading ? (
          <Loader/>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              ref={subjectRef}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              ref={emailRef}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              ref={messageRef}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {alert == 1 && <Alert type="success" message="Thanks for your contact"/>}
            {alert == 2 && <Alert type="error" message="Something went wrong"/>}
          </form>
        )}
        </div>
      </div>
      <div className={styles.contact_right}>
        <div className={styles.contact_bg}></div>
        <img src={EmailImage} alt="Email Image" className={styles.contact_img} />
      </div>
    </div>
  );
};

export default Contact;
