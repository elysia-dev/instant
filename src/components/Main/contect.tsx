import axios from "axios";
import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import ButtonArrow from "src/assets/image/button-arrow.png";


const Contect: FunctionComponent<{ ref: React.RefObject<HTMLDivElement> }> = ({
  ref
}) => {
  const [state, setState] = useState({
    fieldNull: false,
    recaptcha: false,
    onChecked: false
  })
  const [contactState, setContactState] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    content: ""
  });
  const { t } = useTranslation();
  
  const sendContact = () => {
    if (contactState.email === "" || contactState.name === "" || contactState.content === "") {
      setState({ ...state, fieldNull: true });
      return;
    }
    axios
      .post("https://api.elysia.land/land/contact", {
        email: contactState.email,
        content:
          "\nname : " +
          contactState.name +
          "\nphone : " +
          contactState.phone +
          "\ncompany : " +
          contactState.company +
          "\nmessage : " +
          contactState.content
      })
      .then(() => {
        alert(t("contact.success"));
        setContactState({
          ...contactState,
          name: "",
          phone: "",
          email: "",
          company: "",
          content: ""
        });
        setState({ ...state, fieldNull: false });
        window.onbeforeunload = function() {
          window.scrollTo(0, 0);
        };
      })
      .catch(() => {
        alert(t("contact.fail"));
      });
  };

  return (
    <section
      className="contact contents-container scroll-animation scroll-animation--up"
      id="contact"
      ref={ref}
    >
      <h1 className="section__text scroll-animation scroll-animation--up">
        {t("contact.title")}
      </h1>
      <h2
        className="section__text--bold scroll-animation scroll-animation--up"
        style={{ paddingBottom: 0 }}
        data-sa-delay="200"
      >
        {t("contact.sub-title")}
      </h2>
      <p
        className="contact__section__text scroll-animation scroll-animation--up"
        data-sa-delay="400"
      >
        {t("contact.title-info")}
      </p>
      <div className="contact__form-container scroll-animation scroll-animation--up">
        <div className="contact__input-wrapper scroll-animation scroll-animation--right">
          <input
            type="text"
            className={
              state.fieldNull === true && contactState.name === ""
                ? "contact__input--required"
                : "contact__input"
            }
            placeholder={t("contact.name")}
            value={contactState.name}
            onChange={event => {
              setContactState({ ...contactState, name: event.target.value });
            }}
          />
          <span className="contact__required-point">*</span>
        </div>
        <div className="contact__input-wrapper scroll-animation scroll-animation--left">
          <input
            type="text"
            className="contact__input"
            placeholder={t("contact.phone")}
            value={contactState.phone}
            onChange={event => {
              setContactState({ ...contactState, phone: event.target.value });
            }}
          />
        </div>
        <div className="contact__input-wrapper scroll-animation scroll-animation--right">
          <input
            type="text"
            className={
              state.fieldNull === true && contactState.email === ""
                ? "contact__input--required"
                : "contact__input"
            }
            placeholder={t("contact.email")}
            value={contactState.email}
            onChange={event => {
              setContactState({ ...contactState, email: event.target.value });
            }}
          />
          <span className="contact__required-point">*</span>
        </div>
        <div className="contact__input-wrapper scroll-animation scroll-animation--left">
          <input
            type="text"
            className="contact__input"
            placeholder={t("contact.company")}
            value={contactState.company}
            onChange={event => {
              setContactState({
                ...contactState,
                company: event.target.value
              });
            }}
          />
        </div>
        <div
          className="contact__input-wrapper scroll-animation scroll-animation--up"
          style={{ gridColumn: "span 2" }}
        >
          <textarea
            className={
              state.fieldNull === true && contactState.content === ""
                ? "contact__textarea--required"
                : "contact__textarea"
            }
            placeholder={t("contact.message")}
            value={contactState.content}
            onChange={event => {
              setContactState({
                ...contactState,
                content: event.target.value
              });
            }}
          />
          <span className="contact__required-point">*</span>
        </div>
      </div>
      <div className="contact__submit-container scroll-animation">
        <div className="contact__recaptcha-wrapper">
          <ReCAPTCHA
            sitekey={"6LdAI24aAAAAAG0QIW1ZdyfsQMHrW3uwskzlVTH7"}
            onChange={() => setState({ ...state, recaptcha: true })}
            onExpired={() => setState({ ...state, recaptcha: false })}
          />
        </div>
        <div className="contact__checkbox-wrapper">
          <input
            className="contact__checkbox"
            type="checkbox"
            name="check"
            value="check"
            onClick={() => {
              setState({ ...state, onChecked: !state.onChecked });
            }}
          />
          <p className="contact__checkbox-text">{t("contact.checkbox")}</p>
        </div>
      </div>
      <div className="contact__button-wrapper scroll-animation">
        {state.onChecked && state.recaptcha ? (
          <p className="button" onClick={sendContact}>
            {t("contact.button")}
            <div className="button__arrow-wrapper">
              <figure
                className="button__arrow-image"
                style={{ backgroundImage: `url(${ButtonArrow})` }}
              />
            </div>
          </p>
        ) : (
          <p className="button--disable">
            {t("contact.button")}
            <div className="button--disable__arrow-wrapper">
              <figure
                className="button--disable__arrow-image"
                style={{ backgroundImage: `url(${ButtonArrow})` }}
              />
            </div>
          </p>
        )}
      </div>
      <p
        className="contact__required-message"
        style={{
          display: `${state.fieldNull === true ? "inline-block" : "none"}`
        }}
      >
        {t("contact.required")}
      </p>
    </section>
  )
}

export default Contect;
