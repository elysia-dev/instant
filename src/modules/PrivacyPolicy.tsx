import React, { useState } from 'react';
import ElysiaLogo from '../shared/image/Elysia_Logo.png';
import '../css/style.scss';
import i18n from '../i18n/i18n';
import Footer from './footer/Footer';

const PrivacyPolicy = () => {
  const [state, setState] = useState({
    language: "ko",
  });
  i18n.locale = state.language;
  
  return (
    <div className="elysia">
      <header className="header-container">
        <a href="https://elysia.land/">
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
        <section>
          <input type="text" name="user_id" />
        </section>
        <section>
          <textarea name="inputstr2" />
        </section>
        <section>
          <button className="contact-button" >{i18n.t("contact.contact_button")}</button>
        </section>
        <Footer />
    </div>
  );
}

export default PrivacyPolicy;
