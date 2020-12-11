import React from 'react';
import '../../css/style.scss';
import i18n from '../../i18n/i18n';

const Contact = () => {
  return (
    <div className="elysia">
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
