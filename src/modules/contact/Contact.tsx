import React, { useState } from 'react';
import ElysiaLogo from '../../shared/image/Elysia_Logo.png';
import '../../css/style.scss';
import i18n from '../../i18n/i18n';
import Footer from '../footer/Footer';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const [state, setState] = useState({
    language: "ko",
  });
  i18n.locale = state.language;
  const navigation = useNavigation();

  return (
    <div className="elysia">
      <header className="header-container">
        <a onClick={() => navigation.navigate('Main')}>
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </a>
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
          <h2>{i18n.t("contact.form_header")}</h2>
          
          <p>{i18n.t("contact.form_header")}</p>
          <input type="text" name="user_id" />
          <p>{i18n.t("contact.form_header")}</p>
          <textarea name="inputstr2" />
          <p>{i18n.t("contact.form_header")}</p>

          <button className="contact-button" >{i18n.t("contact.contact_button")}</button>
        </section>
        <Footer />
    </div>
  );
}

export default Contact;
