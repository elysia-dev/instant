import React, { useState } from 'react';
import '../../css/style.scss';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [state, setState] = useState<{ email: string, content: string }>({ email: "", content: "" });
  const { t } = useTranslation();

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
      <section className="contact-page-wrapper">
        <h1 className="contact-page-header">{t("contact.form_header")}</h1>
        <p className="contact-page-email-label">{t("contact.input_email")}<span className="contact-required-point"> *</span></p>
        <input type="text" name="user_id" className="contact-page-email-input" value={state.email} onChange={(event) => { setState({ ...state, email: event.target.value }) }} />
        <p className="contact-page-message-label">{t("contact.input_message")}<span className="contact-required-point"> *</span></p>
        <textarea className="contact-page-message-input" name="inputstr2" value={state.content} onChange={(event) => { setState({ ...state, content: event.target.value }) }} />
        <p className="contact-page-message-info">{t("contact.request_label")}</p>
        <button
          className="contact-page-button"
          onClick={sendContact}
        >
          {t("contact.send_button")}
        </button>
      </section>
    </div>
  );
}

export default Contact;
