import React, { useState } from 'react';
import '../../css/style.scss';
import i18n from '../../i18n/i18n';
import axios from 'axios';

const Contact = () => {
  const [state, setState] = useState<{ email: string, content: string }>({ email: "", content: "" });

  const sendContact = () => {
    axios.post(
      "https://api.elysia.land/land/contact",
      {
        email: state.email,
        content: state.content
      }
    ).then(() => {
      alert(i18n.t("contact.success"));
      setState({
        email: "",
        content: "",
      })
    }).catch(() => {
      alert(i18n.t("contact.fail"));
    })
  }

  return (
    <div className="elysia">
      <section className="contact-page-wrapper">
        <h1 className="contact-page-header">{i18n.t("contact.form_header")}</h1>
        <p className="contact-page-email-label">{i18n.t("contact.input_email")}<span className="contact-required-point"> *</span></p>
        <input type="text" name="user_id" className="contact-page-email-input" value={state.email} onChange={(event) => { setState({ ...state, email: event.target.value }) }} />
        <p className="contact-page-message-label">{i18n.t("contact.input_message")}<span className="contact-required-point"> *</span></p>
        <textarea className="contact-page-message-input" name="inputstr2" value={state.content} onChange={(event) => { setState({ ...state, content: event.target.value }) }} />
        <p className="contact-page-message-info">{i18n.t("contact.request_label")}</p>
        <button
          className="contact-page-button"
          onClick={sendContact}
        >
          {i18n.t("contact.send_button")}
        </button>
      </section>
    </div>
  );
}

export default Contact;
