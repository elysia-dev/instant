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
        <nav className="header-link-wrapper">
          <p className="header-link service">
            <a href="https://elysia.land/#service">{i18n.t("main.service")}</a>
          </p>
          <p className="header-link milestone">
            <a href="https://elysia.land/#milestone">{i18n.t("main.milestone")}</a>
          </p>
          <p className="header-link team">
            <a href="https://elysia.land/#team">{i18n.t("main.team")}</a>
          </p>
          <p className="header-link partners">
            <a href="https://elysia.land/#partners">{i18n.t("main.partners")}</a>
          </p>
          <p className="header-link contect">
            <a href="https://elysia.land/#contect">{i18n.t("main.contact")}</a>
          </p>
        </nav>
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
      <Footer />
    </div>
  );
}

export default Contact;
