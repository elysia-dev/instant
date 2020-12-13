import React, { useState } from 'react';
import ElysiaLogo from '../../../shared/image/Elysia_Logo.png';
import '../../css/mobileStyle.scss';
import i18n from '../../../i18n/i18n';
import Footer from '../footer/Footer';
import { Link } from '@react-navigation/native';

const Contact = () => {
  const [state, setState] = useState({
    language: "ko",
  });
  i18n.locale = state.language;

  return (
    <div className="elysia">
      <header className="header-container">
        <Link to="/">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </Link>
      </header>
      <section className="contact-page-wrapper">
        <h1 className="contact-page-header">{i18n.t("contact.form_header")}</h1>
        <p className="contact-page-email-label">{i18n.t("contact.input_email")}<span className="contact-required-point"> *</span></p>
        <input type="text" name="user_id" className="contact-page-email-input" />
        <p className="contact-page-message-label">{i18n.t("contact.input_message")}<span className="contact-required-point"> *</span></p>
        <textarea className="contact-page-message-input" name="inputstr2" />
        <p className="contact-page-message-info">{i18n.t("contact.request_label")}</p>
        <button className="contact-page-button" >{i18n.t("contact.send_button")}</button>
      </section>
    </div>
  );
}

export default Contact;
