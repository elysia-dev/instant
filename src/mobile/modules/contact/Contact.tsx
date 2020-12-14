import React, { useState } from 'react';
import '../../css/mobileStyle.scss';
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
    <section className="mobile-contact-modal-wrapper" style={{ margin: "0px 20px" }}>
      <h1 className="mobile-contact-header">{t("contact.form_header")}</h1>
      <p className="mobile-contact-email-label">{t("contact.input_email")}<span className="contact-required-point"> *</span></p>
      <input type="text" name="user_id" className="mobile-contact-email-input" value={state.email} onChange={(event) => { setState({ ...state, email: event.target.value }) }} />
      <p className="mobile-contact-message-label">{t("contact.input_message")}<span className="contact-required-point"> *</span></p>
      <textarea className="mobile-contact-message-input" name="inputstr2" value={state.content} onChange={(event) => { setState({ ...state, content: event.target.value }) }} />
      <p className="mobile-contact-message-info">{t("contact.request_label")}</p>
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <button
          className="mobile-contact-button"
          onClick={sendContact}
        >
          {t("contact.send_button")}
        </button>
      </div>
    </section>
  );
}

export default Contact;
