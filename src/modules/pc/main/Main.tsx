import React, { useEffect, useState } from "react";
import ElysiaLogo from "../../../shared/image/Elysia_Logo.png";
import ElysiaWhiteLogo from "../../../shared/image/Elysia_Logo_White.png";
import MainBackground from "../../../shared/image/main-background.png";
import GoogleLogo from "../../../shared/image/google-logo.png";
import AppleLogo from "../../../shared/image/apple-logo.png";
import DownArrow from "../../../shared/image/down-arrow.png";

/* Service */
import Service00 from "../../../shared/image/service00.png";
import Service01 from "../../../shared/image/service01.png";
import Service02 from "../../../shared/image/service02.png";
import ButtonArrow from "../../../shared/image/button-arrow.png";

/* Portfolio */
import ElysiaAsset3 from "../../../shared/image/portfolio/elysia-asset-3.png";
import ElysiaAsset4 from "../../../shared/image/portfolio/elysia-asset-4.png";
import ElysiaAsset5 from "../../../shared/image/portfolio/elysia-asset-5.png";
import ElysiaAsset6 from "../../../shared/image/portfolio/elysia-asset-6.png";
import ElysiaAsset7 from "../../../shared/image/portfolio/elysia-asset-7.png";
import ElysiaAssetRed1 from "../../../shared/image/portfolio/elysia-asset-red-1.png";
import ElysiaAssetBlue1 from "../../../shared/image/portfolio/elysia-asset-blue-1.png";

/* Team Image */
import Team1 from "../../../shared/image/team/Team1.png";
import Team2 from "../../../shared/image/team/Team2.png";
import Team3 from "../../../shared/image/team/Team3.png";
import Team4 from "../../../shared/image/team/Team4.png";
import Team5 from "../../../shared/image/team/Team9.png";
import Team6 from "../../../shared/image/team/Team8.png";

import LinkedIn from "../../../shared/image/linkedin.png";

/* Partners Image */
import Iconloop from "../../../shared/image/partners/iconloop.png";
import Hexlant from "../../../shared/image/partners/hexlant.png";
import Bishijie from "../../../shared/image/partners/bishijie.png";
import Xangle from "../../../shared/image/partners/xangle.png";
import Chainlink from "../../../shared/image/partners/chainlink.png";
import HahmShout from "../../../shared/image/partners/hahmshout.png";
import BKL from "../../../shared/image/partners/bkl.png";
import TSMP from "../../../shared/image/partners/tsmp.png";
import FocusLawAsia from "../../../shared/image/partners/focuslawasia.png";
import HiBlocks from "../../../shared/image/partners/hiblocks.png";
import Argos from "../../../shared/image/partners/argos.png";
import PropWave from "../../../shared/image/partners/propwave.png";
import SRC from "../../../shared/image/partners/src.png";
import Fang from "../../../shared/image/partners/fang.png";
import Gopax from "../../../shared/image/partners/gopax.png";
import Bithumb from "../../../shared/image/partners/bithumb.png";
import BithumbGlobal from "../../../shared/image/partners/bithumbglobal.png";
import HUB from "../../../shared/image/partners/hub.png";
import HOW from "../../../shared/image/partners/how.png";
import Anjuke from "../../../shared/image/partners/anjuke.png";
import SaeJong from "../../../shared/image/partners/shinkim.jpg";
import XT from "../../../shared/image/partners/xt.png";
import Mexc from "../../../shared/image/partners/mexc-global6000.png";
import Fbg from "../../../shared/image/partners/fbg.png";
import Blocore from "../../../shared/image/partners/blocore.png";
import Crypto from "../../../shared/image/partners/crypto.png";

import "../css/style.scss";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Main = () => {
  // const history = useHistory();
  const { t, i18n } = useTranslation();

  const Service = React.createRef<HTMLDivElement>();
  const Portfolio = React.createRef<HTMLDivElement>();
  const Team = React.createRef<HTMLDivElement>();
  const Partners = React.createRef<HTMLDivElement>();
  const Contact = React.createRef<HTMLDivElement>();
  const Top = React.createRef<HTMLDivElement>();
  const [state, setState] = useState({
    isMoreAsset: false,
    recaptcha: false,
    onChecked: false,
    fieldNull: false
  });

  /* See More을 핸들링하는 함수입니다 */
  const SwithcingState = () => {
    setState({ ...state, isMoreAsset: !state.isMoreAsset });
    console.log(state.isMoreAsset);
  };

  /* 색션마다 선언된 인자값을 받아 해당 위치로 이동하는 함수입니다 */
  const Scroll = (ref: string) => {
    // ref.current.scrollIntoView({ behavior: 'smooth' })
    var element = document.getElementById(ref);
    const offset = 85;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element!.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  /* 현재 스크롤값을 실시간으로 계산해 상단 GNB를 변환시킬 함수입니다 */
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  /* slack api를 호출합니다 */
  const [contactState, setContactState] = useState<{
    name: string;
    phone: string;
    email: string;
    company: string;
    content: string;
  }>({
    name: "",
    phone: "",
    email: "",
    company: "",
    content: ""
  });

  const sendContact = () => {
    setState({ ...state, fieldNull: false });
    if (contactState.email === "") {
      setState({ ...state, fieldNull: true });
      return;
    }
    if (contactState.name === "") {
      setState({ ...state, fieldNull: true });
      return;
    }
    if (contactState.content === "") {
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
      })
      .catch(() => {
        alert(t("contact.fail"));
      });
  };

  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  /* 클래스에 scroll-animation 지정한 블록들에 애니메이션을 추가합니다 */
  const ScrollAnimationDefaultMargin = 100;
  let ScrollAnimationTriggerMargin = 0;
  let ScrollAnimationTriggerHeight = 0;
  const ScrollAnimationElementList = document.querySelectorAll(
    ".scroll-animation"
  );

  const ScrollAnimationFunc = function() {
    for (const element of ScrollAnimationElementList as any) {
      if (!element.classList.contains("show")) {
        if (element.dataset.saMargin) {
          ScrollAnimationTriggerMargin = parseInt(element.dataset.saMargin);
        } else {
          ScrollAnimationTriggerMargin = ScrollAnimationDefaultMargin;
        }

        if (element.dataset.saTrigger) {
          ScrollAnimationTriggerHeight =
            document
              .querySelector(element.dataset.saTrigger)
              .getBoundingClientRect().top + ScrollAnimationTriggerMargin;
        } else {
          ScrollAnimationTriggerHeight =
            element.getBoundingClientRect().top + ScrollAnimationTriggerMargin;
        }

        if (window.innerHeight > ScrollAnimationTriggerHeight) {
          let delay = element.dataset.saDelay ? element.dataset.saDelay : 0;
          setTimeout(function() {
            element.classList.add("show");
          }, delay);
        }
      }
    }
  };
  window.addEventListener("load", ScrollAnimationFunc);
  window.addEventListener("scroll", ScrollAnimationFunc);

  return (
    <div className="elysia" id="top" ref={Top}>
      <section
        className="main"
        id="main"
        style={{ backgroundImage: `url(${MainBackground})` }}
      >
        <header
          className="main__gnb"
          style={{
            backgroundColor: `${scrollTop >= 100 ? "#FFFFFF" : "transparent"}`
          }}
        >
          <nav className="main__gnb__link-container">
            <figure
              className="elysia-logo"
              onClick={() => Scroll("top")}
              style={{
                backgroundImage: `url(${
                  scrollTop >= 100 ? ElysiaLogo : ElysiaWhiteLogo
                })`
              }}
            />
            <div className="main__gnb__link-wrapper">
              {/* <p className="main__gnb__link" onClick={() => Scroll("serviceref")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}>
                {t("navigation.service")}
              </p>
              <p className="main__gnb__link" onClick={() => Scroll("portfolioref")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}>
                {t("navigation.portfolio")}
              </p> */}
              <a
                className="main__gnb__link"
                href="#service"
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.service")}
              </a>
              <a
                className="main__gnb__link"
                href="#portfolio"
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.portfolio")}
              </a>
              <p
                className="main__gnb__link"
                onClick={() => Scroll("partners")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.partners")}
              </p>
              <p
                className="main__gnb__link"
                onClick={() => Scroll("team")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.team")}
              </p>
              <p
                className="main__gnb__link"
                onClick={() => Scroll("contact")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.contact")}
              </p>
              <a
                className="main__gnb__link main__gnb--bold"
                href="https://elysia.gitbook.io/elysia-guide/"
                target="_blank"
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.helpdesk")}
              </a>
              <a
                className="main__gnb__link main__gnb--bold"
                href="https://defi.elysia.land"
                target="_blank"
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
              >
                {t("navigation.elyfi")}
              </a>
            </div>
          </nav>
        </header>
        <div className="main__content-container">
          <h2 className="main__content-text--bold">
            {t("main.content-title")}
          </h2>
          <p className="main__content-text">{t("main.content-sub-title")}</p>
          <a
            className="main__store__button"
            href="https://play.google.com/store/apps/details?id=land.elysia"
          >
            <figure
              className="main__image__google-play"
              style={{ backgroundImage: `url(${GoogleLogo})` }}
            />
            <span className="main__image__text">Google Play</span>
          </a>
          <a
            className="main__store__button"
            href="https://apps.apple.com/us/app/elysia/id1536733411"
          >
            <figure
              className="main__image__app-store"
              style={{ backgroundImage: `url(${AppleLogo})` }}
            />
            <span className="main__image__text">App Store</span>
          </a>
        </div>
        <div className="main__down-arrow-wrapper">
          <img
            className="main__down-arrow"
            src={DownArrow}
            alt=""
            onClick={() => Scroll("service")}
          />
        </div>
      </section>
      <section
        className="service contents-container"
        id="serviceref"
        ref={Service}
      >
        <h1
          id="service"
          className="section__text section__text scroll-animation scroll-animation--up"
        >
          {t("service.title")}
        </h1>
        <h1
          className="section__text--bold scroll-animation scroll-animation--up"
          data-sa-delay="200"
        >
          {t("service.sub-title")}
        </h1>
        <div className="service__container">
          <img
            className="service__image scroll-animation scroll-animation--right"
            src={Service00}
            alt=""
          />
          <div
            className="service__text-wrapper scroll-animation"
            data-sa-delay="200"
          >
            <h2 className="service__header-text">{t("service.owners")}</h2>
            <h2 className="service__header-text--bold">
              {t("service.owners-title")}
            </h2>
            <p className="service__text">{t("service.owners-content")}</p>
            <p className="button" onClick={() => Scroll("contact")}>
              {t("service.owners-button")}
              <div className="button__arrow-wrapper">
                <figure
                  className="button__arrow-image"
                  style={{ backgroundImage: `url(${ButtonArrow})` }}
                />
              </div>
            </p>
          </div>
        </div>
        <div className="service__container">
          <div
            className="service__text-wrapper scroll-animation"
            data-sa-delay="200"
          >
            <h2 className="service__header-text">{t("service.buyers")}</h2>
            <h2 className="service__header-text--bold">
              {t("service.buyers-title")}
            </h2>
            <p className="service__text">{t("service.buyers-content")}</p>
            <Link to="/AppLink">
              <p
                className="button"
                onClick={() => {
                  window.location.replace(
                    "https://play.google.com/store/apps/details?id=land.elysia"
                  );
                }}
              >
                {t("service.buyers-button")}
                <div className="button__arrow-wrapper">
                  <figure
                    className="button__arrow-image"
                    style={{ backgroundImage: `url(${ButtonArrow})` }}
                  />
                </div>
              </p>
            </Link>
          </div>
          <img
            className="service__image scroll-animation scroll-animation--left"
            src={Service01}
            alt=""
          />
        </div>
        <div className="service__container">
          <img
            className="service__image  scroll-animation scroll-animation--right"
            src={Service02}
            alt=""
          />
          <div
            className="service__text-wrapper scroll-animation"
            data-sa-delay="200"
          >
            <h2 className="service__header-text">
              {t("service.participants")}
            </h2>
            <h2 className="service__header-text--bold">
              {t("service.participants-title")}
            </h2>
            <p className="service__text">{t("service.participants-content")}</p>
            <p
              className="button"
              onClick={() => {
                window.location.replace("https://defi.elysia.land");
              }}
            >
              {t("service.participants-button")}
              <div className="button__arrow-wrapper">
                <figure
                  className="button__arrow-image"
                  style={{ backgroundImage: `url(${ButtonArrow})` }}
                />
              </div>
            </p>
          </div>
        </div>
      </section>
      <section
        className="portfolio contents-container"
        id="portfolioref"
        ref={Portfolio}
      >
        <div className="portfolio__container">
          <h1
            id="portfolio"
            className="portfolio__text--bold section__text--bold scroll-animation scroll-animation--up"
            style={{ paddingTop: 70 }}
          >
            {t("portfolio.title")}
          </h1>
          <div className="portfolio__wrapper">
            {[
              [ElysiaAssetBlue1, "Elysia Asset Blue #1", "426075"],
              [ElysiaAssetRed1, "Elysia Asset Red #1", "181704"],
              [ElysiaAsset7, "Elysia Asset #7", "823045"],
              [ElysiaAsset6, "Elysia Asset #6", "1182180"],
              [ElysiaAsset5, "Elysia Asset #5", "1040950"],
              [ElysiaAsset4, "Elysia Asset #4", "814810"],
              [ElysiaAsset3, "Elysia Asset #3", "1041150"]
            ].map(([AssetImage, AssetName, AssetFunded], index) => {
              return (
                <div
                  className="portfolio__asset__container scroll-animation scroll-animation--up"
                  style={{
                    opacity: `${index >= 6 && !state.isMoreAsset ? 0 : 1}`,
                    display: `${
                      index >= 6 && !state.isMoreAsset ? "none" : "block"
                    }`
                  }}
                  data-sa-margin={index * 15}
                >
                  <div className="portfolio__asset-funded">
                    {t("portfolio.funded")}
                  </div>
                  <img
                    src={AssetImage}
                    className="portfolio__asset-picture"
                    alt="Elysia Asset"
                  />
                  <h2 className="portfolio__asset-name">{AssetName}</h2>
                  <p className="portfolio__asset-info funded">
                    {t("portfolio.total")}{" "}
                    <span className="portfolio__asset-value">
                      $
                      {AssetFunded.toString().replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="portfolio__see-more" onClick={SwithcingState}>
          {!state.isMoreAsset ? t("portfolio.seemore") : t("portfolio.close")}
        </h2>
      </section>
      <section
        className="partners contents-container"
        id="partners"
        ref={Partners}
      >
        <h1
          className="partners__text--bold section__text--bold scroll-animation scroll-animation--up"
          style={{ paddingTop: 70 }}
        >
          {t("partners.title")}
        </h1>
        <div className="partners__wrapper">
          {[
            Fbg,
            Bithumb,
            Crypto,
            Mexc,
            BithumbGlobal,
            Blocore,
            XT,
            Gopax,
            Xangle,
            Chainlink,
            Anjuke,
            Fang,
            Bishijie,
            Iconloop,
            Hexlant,
            HahmShout,
            HiBlocks,
            PropWave,
            SRC,
            Argos
          ].map((image, index) => {
            return (
              <img
                src={image}
                className="partners__picture scroll-animation scroll-animation--up"
                alt="Elysia"
                data-sa-margin={index * 5}
              />
            );
          })}
        </div>
        <h2
          className="partners__text--bold section__text--bold scroll-animation scroll-animation--up"
          style={{ paddingTop: 70 }}
        >
          {t("partners.legal-advisors")}
        </h2>
        <div className="partners__wrapper">
          {[SaeJong, BKL, FocusLawAsia, HUB, HOW, TSMP].map((image, index) => {
            return (
              <img
                src={image}
                className="partners__picture scroll-animation scroll-animation--up"
                alt="Elysia"
                data-sa-margin={index * 5}
                style={{ margin: "20px 107px" }}
              />
            );
          })}
        </div>
      </section>
      <section className="team contents-container" id="team" ref={Team}>
        <h1
          className="section__text--bold scroll-animation scroll-animation--up"
          style={{ paddingTop: 70 }}
        >
          {t("team.title")}
        </h1>
        <div className="team__info-wrapper scroll-animation scroll-animation--up">
          {[
            [Team1, "https://www.linkedin.com/in/junggun-lim-2b1a1a137/"],
            [
              Team2,
              "https://www.linkedin.com/in/%EC%9B%90%EC%A4%80-%EC%B0%A8-1b707653/"
            ],
            [Team3, "https://www.linkedin.com/in/yoon-kim-02228619/"],
            [Team4, "https://www.linkedin.com/in/donguk-seo-6483141b6/"],
            [Team5, "https://www.linkedin.com/in/jaehun-chung-538a52174/"],
            [Team6]
          ].map(([TeamImage, linkedInUrl], index) => {
            return (
              <div className="team__container">
                <div className="team__wrapper">
                  <img src={TeamImage} className="team__picture" alt="Elysia" />
                  <p className="team__hover-infomation">
                    {linkedInUrl && (
                      <div>
                        <a target="_blank" rel="noreferrer" href={linkedInUrl}>
                          <img src={LinkedIn} alt="LinkiedIn" />
                        </a>
                      </div>
                    )}
                    {/* {TeamHover.split('\n').map(line => {
                        return (<span>{line}<br /></span>)
                      })} */}
                    {t("team.info." + index)}
                  </p>
                </div>
                <div className="team__text-wrapper">
                  <h2
                    className="team__text--bold"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {t("team.name." + index)}
                  </h2>
                  <p className="team__text" style={{ whiteSpace: "nowrap" }}>
                    {t("team.dept." + index)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="contact contents-container scroll-animation scroll-animation--up"
        id="contact"
        ref={Contact}
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
    </div>
  );
};

export default Main;
