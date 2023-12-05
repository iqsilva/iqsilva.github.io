import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import EmailImage from "../../assets/contact.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();

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
    <div id="contact" className="contact">
      <div className="contact_left">
        <div className="contact_left_wrapper">
        <h1 className="contact_title">{t("contact_title")}</h1>
        <p className="contact_desc">
          {t("contact_description")}
        </p>
        {loading ? (
          <Loader/>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              type="text"
              placeholder={`${t("contact_name")}`}
              name="user_name"
            />
            <input
              ref={subjectRef}
              type="text"
              placeholder={`${t("contact_subject")}`}
              name="user_subject"
            />
            <input
              ref={emailRef}
              type="text"
              placeholder={`${t("contact_email")}`}
              name="user_email"
            />
            <textarea
              ref={messageRef}
              rows="5"
              placeholder={`${t("contact_message")}`}
              name="message"
            />
            <button className="btn">{t("contact_button")}</button>
            {alert == 1 && <Alert type="success" message={`${t("success")}`}/>}
            {alert == 2 && <Alert type="error" message={`${t("error")}`}/>}
          </form>
        )}
        </div>
      </div>
      <div className="contact_right">
        <img src={EmailImage} alt="Email Image" className="contact_img" />
      </div>
    </div>
  );
};

export default Contact;
