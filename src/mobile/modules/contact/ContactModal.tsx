import React, { useState } from 'react';
import ElysiaLogo from '../../../shared/image/Elysia_Logo.png';
import '../../css/mobileStyle.scss';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Quit from '../../../shared/image/quitbutton.png';

const ContactModal = () => {
  const [state, setState] = useState<{ email: string, content: string, modalHandler?: boolean }>({ email: "", content: "", modalHandler: false });
  const { t, i18n } = useTranslation();

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
      <div className="mobile-modal" style={
          state.modalHandler ? { display: "block" } : { display: "none" }
        }>
        <section className="mobile-contact-modal-wrapper">
          <a className="mobile-modal-quit" onClick={() => setState({ ...state, modalHandler: false })}>
            <img src={Quit} className="mobile-modal-quit" alt="Elysia" />
          </a>
          <h1 className="mobile-contact-modal-header">{t("contact.form_header")}</h1>
          <p className="mobile-contact-modal-email-label">{t("contact.input_email")}<span className="mobile-contact-required-point"> *</span></p>
          <input type="text" name="user_id" className="mobile-contact-modal-email-input" value={state.email} onChange={(event) => { setState({ ...state, email: event.target.value }) }} />
          <p className="mobile-contact-modal-message-label">{t("contact.input_message")}<span className="mobile-contact-required-point"> *</span></p>
          <textarea className="mobile-contact-modal-message-input" name="inputstr2" value={state.content} onChange={(event) => { setState({ ...state, content: event.target.value }) }} />
          <p className="mobile-contact-modal-message-info">{t("contact.request_label")}</p>
          <button
            className="mobile-contact-modal-button"
            onClick={sendContact}
          >
            {t("contact.send_button")}
          </button>
        </section>
      </div>
    );
  }

export default ContactModal;
