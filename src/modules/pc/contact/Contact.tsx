import React, { useState } from 'react';
import '../css/style.scss';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [state, setState] = useState<{ email: string, content: string }>({ email: "", content: "" });
  const { t } = useTranslation();

  var root = window.document.getElementById("root");
  root!.style.background = "#FFFFFF";

  const sendContact = () => {
    axios.post(
      "https://api.elysia.land/land/contact",
      {
        email: state.email,
        content: state.content
      }
    ).then(() => {
      alert(t("contact.success"));
      setState({
        email: "",
        content: "",
      })
    }).catch(() => {
      alert(t("contact.fail"));
    })
  }

  return (
    <div className="elysia">
      <section className="contact-page">
        <h1 className="contact-page__header-text">{t("contact.form_header")}</h1>
        <p className="contact-page__email-label">{t("contact.input_email")}<span className="contact-page__required-point"> *</span></p>
        <input type="text" name="user_id" className="contact-page__email-input" value={state.email} onChange={(event) => { setState({ ...state, email: event.target.value }) }} />
        <p className="contact-page__message-label">{t("contact.input_message")}<span className="contact-page__required-point"> *</span></p>
        <textarea className="contact-page__message-textarea" name="inputstr2" value={state.content} onChange={(event) => { setState({ ...state, content: event.target.value }) }} />
        <p className="contact-page__info-text">{t("contact.request_label")}</p>
        <button
          className="contact-page__page-button"
          onClick={sendContact}
        >
          {t("contact.send_button")}
        </button>
      </section>
    </div>
  );
}

export default Contact;
