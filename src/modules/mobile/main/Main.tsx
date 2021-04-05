import React, { useState, useEffect } from 'react';
import ElysiaLogo from '../../../shared/image/Elysia_Logo.png';
import ElysiaWhiteLogo from '../../../shared/image/Elysia_Logo_White.png';
import MainBackground from '../../../shared/image/main-background.png';
import GoogleLogo from '../../../shared/image/google-logo.png';
import AppleLogo from '../../../shared/image/apple-logo.png';
import DownArrow from '../../../shared/image/down-arrow.png';

/* Service */
import Service00 from '../../../shared/image/service00.png';
import Service01 from '../../../shared/image/service01.png';
import Service02 from '../../../shared/image/service02.png';
import ButtonArrow from '../../../shared/image/button-arrow.png';

/* Team Image */
import Team1 from '../../../shared/image/team/Team1.png';
import Team2 from '../../../shared/image/team/Team2.png';
import Team3 from '../../../shared/image/team/Team3.png';
import Team4 from '../../../shared/image/team/Team4.png';
import Team5 from '../../../shared/image/team/Team9.png';
import Team6 from '../../../shared/image/team/Team8.png';

import LinkedIn from '../../../shared/image/linkedin.png';

/* Partners Image */
import Iconloop from '../../../shared/image/partners/iconloop.png';
import Hexlant from '../../../shared/image/partners/hexlant.png';
import Bishijie from '../../../shared/image/partners/bishijie.png';
import Xangle from '../../../shared/image/partners/xangle.png';
import Chainlink from '../../../shared/image/partners/chainlink.png';
import HahmShout from '../../../shared/image/partners/hahmshout.png';
import BKL from '../../../shared/image/partners/bkl.png';
import TSMP from '../../../shared/image/partners/tsmp.png';
import FocusLawAsia from '../../../shared/image/partners/focuslawasia.png';
import HiBlocks from '../../../shared/image/partners/hiblocks.png';
import Argos from '../../../shared/image/partners/argos.png';
import PropWave from '../../../shared/image/partners/propwave.png';
import SRC from '../../../shared/image/partners/src.png';
import Fang from '../../../shared/image/partners/fang.png';
import Gopax from '../../../shared/image/partners/gopax.png';
import Bithumb from '../../../shared/image/partners/bithumb.png';
import BithumbGlobal from '../../../shared/image/partners/bithumbglobal.png';
import HUB from '../../../shared/image/partners/hub.png';
import HOW from '../../../shared/image/partners/how.png';
import Anjuke from '../../../shared/image/partners/anjuke.png';

import '../css/mobileStyle.scss';
import Slider from '../slider/Slider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Main = () => {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({
    isMoreAsset: false,
    recaptcha: false,
    onChecked: false,
    fieldNull: false
  })

  /* slack api를 호출합니다 */
  const [contactState, setContactState] = useState<{
    name: string,
    phone: string,
    email: string,
    company: string,
    content: string
  }>({
    name: "",
    phone: "",
    email: "",
    company: "",
    content: ""
  });

  const sendContact = () => {
    setState({ ...state, fieldNull: false })
    if (contactState.email === "") {
      setState({ ...state, fieldNull: true })
      return;
    }
    if (contactState.name === "") {
      setState({ ...state, fieldNull: true })
      return;
    }
    if (contactState.content === "") {
      setState({ ...state, fieldNull: true })
      return;
    }
    axios.post(
      "https://api.elysia.land/land/contact",
      {
        email: contactState.email,
        content: "\nname : " + contactState.name + "\nphone : " + contactState.phone + "\ncompany : " + contactState.company + "\nmessage : " + contactState.content
      }
    ).then(() => {
      alert(t("contact.success"));
      setContactState({
        ...contactState,
        name: "",
        phone: "",
        email: "",
        company: "",
        content: ""
      })
    }).catch(() => {
      alert(t("contact.fail"));
    })
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  /* 현재 스크롤값을 실시간으로 계산해 상단 GNB를 변환시킬 함수입니다 */
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [getHeight, setHeight] = useState(0);
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
    setHeight(document.getElementById('main')?.clientHeight!);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  /* 색션마다 선언된 인자값을 받아 해당 위치로 이동하는 함수입니다 */
  const Scroll = (ref: string) => {
    // ref.current.scrollIntoView({ behavior: 'smooth' })
    var element = document.getElementById(ref);
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element!.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  /* 클래스에 scroll-animation 지정한 블록들에 애니메이션을 추가합니다 */
  const ScrollAnimationDefaultMargin = 100;
  let ScrollAnimationTriggerMargin = 0;
  let ScrollAnimationTriggerHeight = 0;
  const ScrollAnimationElementList = document.querySelectorAll('.scroll-animation');

  const ScrollAnimationFunc = function () {
    for (const element of ScrollAnimationElementList as any) {
      if (!element.classList.contains('show')) {
        if (element.dataset.saMargin) {
          ScrollAnimationTriggerMargin = parseInt(element.dataset.saMargin);
        } else {
          ScrollAnimationTriggerMargin = ScrollAnimationDefaultMargin;
        }

        if (element.dataset.saTrigger) {
          ScrollAnimationTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + ScrollAnimationTriggerMargin;
        } else {
          ScrollAnimationTriggerHeight = element.getBoundingClientRect().top + ScrollAnimationTriggerMargin;
        }

        if (window.innerHeight > ScrollAnimationTriggerHeight) {
          let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
          setTimeout(function () {
            element.classList.add('show');
          }, delay);
        }
      }
    }
  }
  window.addEventListener('load', ScrollAnimationFunc);
  window.addEventListener('scroll', ScrollAnimationFunc);


  return (
    <div className="elysia--mobile" id="top">
      <section className="main" id="main" style={{ backgroundImage: `url(${MainBackground})` }}>
        <header className="main__nav" style={{ backgroundColor: `${scrollTop >= (getHeight - 35) ? "#FFFFFF" : "transparent"}` }} >
          <figure className="elysia-logo" style={{ backgroundImage: `url(${scrollTop >= (getHeight - 35) ? ElysiaLogo : ElysiaWhiteLogo})` }} />
        </header>
        <div className="main__content-container">
          <h1 className="main__content-text--bold">
            DIGITAL<br />INFRASTRUCTURE<br />FOR REAL<br />ESTATE ASSETS
          </h1>
          <p className="main__content-text">
            Elysia provides the latest technology<br />to bridge the gap between<br />traditional real estate participants<br />and global investors
          </p>
          <a className="main__store__button" href="https://play.google.com/store/apps/details?id=land.elysia">
            <figure className="main__image__google-play" style={{ backgroundImage: `url(${GoogleLogo})` }} />
            <span className="main__image__text">Google Play</span>
          </a>
          <a className="main__store__button" href="https://apps.apple.com/us/app/elysia/id1536733411">
            <figure className="main__image__app-store" style={{ backgroundImage: `url(${AppleLogo})` }} />
            <span className="main__image__text">App Store</span>
          </a>
        </div>
        <div className="main__down-arrow-wrapper">
          <img className="main__down-arrow" src={DownArrow} alt="" onClick={() => Scroll("service")} />
        </div>
      </section>
      <section className="service" id="service">
        <h1 className="section__text scroll-animation scroll-animation--up">
          What is ELYSIA?
        </h1>
        <h1 className="section__text--bold scroll-animation scroll-animation--up" data-sa-delay="200">
          We help digitalize<br />real estate ownership<br />to provide direct access<br />to secondary markets<br />on a global scale
        </h1>
        <div className="service__container">
          <img className="service__image scroll-animation scroll-animation--up" src={Service00} alt="" />
          <div className="service__text-wrapper scroll-animation scroll-animation--up">
            <h1 className="service__header-text">
              For Owners
            </h1>
            <h1 className="service__header-text--bold">
              Tokenize your real estate with Elysia
            </h1>
            <p className="service__text">
              Use blockchain technology to create immutable<br />representation of your assets. Meet instant global liquidity
            </p>
            <p className="button" onClick={() => Scroll("contact")}>
              Contact us
              <div className="button__arrow-wrapper">
                <figure className="button__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }} />
              </div>
            </p>
          </div>
        </div>
        <div className="service__container">
          <img className="service__image scroll-animation scroll-animation--up" src={Service01} alt="" />
          <div className="service__text-wrapper scroll-animation scroll-animation--up">
            <h1 className="service__header-text">
              For Buyers
            </h1>
            <h1 className="service__header-text--bold">
              Real estate investing<br />at your fingertips
            </h1>
            <p className="service__text">
              Find real estate opportunities around the world and settle transactions with almost no intermediary costs
            </p>
            <Link to="/AppLink">
              <p className="button" onClick={() => {
                window.location.replace("https://play.google.com/store/apps/details?id=land.elysia")
              }}>
                Download the app
                <div className="button__arrow-wrapper">
                  <figure className="button__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }} />
                </div>
              </p>
            </Link>
          </div>
        </div>
        <div className="service__container">
          <img className="service__image scroll-animation scroll-animation--up" src={Service02} alt="" />
          <div className="service__text-wrapper scroll-animation scroll-animation--up">
            <h1 className="service__header-text">
              For Participants
            </h1>
            <h1 className="service__header-text--bold">
              Decentralized Applications
            </h1>
            <p className="service__text">
              Demand driven peer-to-peer lending markets using real estate tokens as collateral will be the next step for personal finance
            </p>
            <p className="button--disable">
              Coming soon
              <div className="button--disable__arrow-wrapper">
                <figure className="button--disable__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }} />
              </div>
            </p>
          </div>
        </div>
      </section>
      <section className="portfolio" id="milestone">
        <h1 className="section__text--bold scroll-animation scroll-animation--up" style={{ paddingTop: 70, paddingBottom: 30 }}>
          Our Track Record
        </h1>
        <div className="portfolio__slider-container scroll-animation scroll-animation--up">
          <Slider />
        </div>
      </section>
      <section className="partners" id="partners">
        <h1 className="partners__text--bold section__text--bold scroll-animation scroll-animation--up" style={{ paddingTop: 70 }}>
          PARTNERS
        </h1>
        <div className="partners__container">
          {
            [
              Iconloop,
              Hexlant,
              Bishijie,
              Xangle,
              Chainlink,
              HahmShout,
              HUB,
              BKL,
              TSMP,
              FocusLawAsia,
              HiBlocks,
              Argos,
              PropWave,
              Anjuke,
              SRC,
              Fang,
              Gopax,
              Bithumb,
              BithumbGlobal,
              HOW
            ].map((image, index) => {
              return (
                <div className="partners__item">
                  <img src={image} className="partners__image scroll-animation scroll-animation--up" alt="" />
                </div>
              );
            })
          }
        </div>
      </section>
      <section className="team" id="team">
        <h1 className="partners__text--bold section__text--bold scroll-animation scroll-animation--up" style={{ paddingTop: 70 }}>
          EXECUTIVE TEAM
        </h1>
        <div className="team__info-wrapper scroll-animation scroll-animation--up" >
          {
            [
              [
                Team1,
                "JungGun Lim", "CEO",
                `・Seoul National University, Dept. of
                  　chemical & biological engineering
                  ・Samsung SDI
                  ・Specializes in Ruby/React JS\n
                  Mr. Lim is the CEO of Elysia. He outlines the direction of the foundation and manages the overall operations and resources of Elysia`,
                "https://www.linkedin.com/in/junggun-lim-2b1a1a137/",
              ],
              [
                Team2,
                "WonJoon Cha", "CSO",
                `・Seoul National University, School of
                  　mechanical & aerospace engineering
                  ・CEO of BTbridge lnc.
                  ・Specializes in Big data development\n
                  Mr. Cha reviews the overall planning and legal regulations for the business`,
                "https://www.linkedin.com/in/%EC%9B%90%EC%A4%80-%EC%B0%A8-1b707653/",
              ],
              [
                Team3,
                "Yoon Kim", "CMO",
                `・Pepperdine University B.A.
                  ・Business Development at STX O&S
                  　and Hanjin
                  ・Business Development at ICONLOOP\n
                  Mr. Kim manages sales and marketing operations at Elysia`,
                "https://www.linkedin.com/in/yoon-kim-02228619/"
              ],
              [
                Team4, "DongUk Seo", "CTO",
                `・Seoul National University,
                  　Computer Science & Engineering
                  ・Backend Lead Developer at HCG
                  ・Backend Development Intern at Naver\n
                  Mr. Seo is currently the Chief Technology Officer at Elysia and is in charge of blockchain architecture and software engineering`,
                "https://www.linkedin.com/in/donguk-seo-6483141b6/"
              ],
              [
                Team5,
                "Michael Chung", "COO",
                `・KAIST National University
                  ・Industrial engineering
                  ・KTB Investment & securities
                  ・Prop Trading, FRM
                  ・ICONLOOP
                  ・Business Development\n
                  Mr.Chung manages operations and finance at Elysia`,
                "https://www.linkedin.com/in/jaehun-chung-538a52174/"
              ],
              /*
              [
                Team6,
                "Jacob Lee",
                "Bees’ Company CEO",
                `・ Hanyang University, Dept. of
                 mechanical engineering
                ・ STX Co.junior engineer
                ・ Specializes in rental management
                 and consulting\n
                Mr.Lee is responsible for industry partnerships and advises real estate operations`
              ],
              */
            ].map(([TeamImage, TeamName, TeamDept, TeamHover, linkedInUrl], index) => {
              return (
                <div className="team__container">
                  <div className="team__wrapper">
                    <img src={TeamImage} className="team__picture" alt="Elysia" />
                    <p className="team__hover-infomation">
                      {
                        linkedInUrl && <div>
                          <a href={linkedInUrl} target="_blank" rel="noopener">
                            <img src={LinkedIn} alt='LinkiedIn' />
                          </a>
                        </div>
                      }
                      {TeamHover.split('\n').map(line => {
                        return (<span>{line}<br /></span>)
                      })}
                    </p>
                  </div>
                  <div className="team__text-wrapper">
                    <h1 className="team__text--bold" style={{ whiteSpace: "nowrap" }}>{TeamName}</h1>
                    <p className="team__text" style={{ whiteSpace: "nowrap" }}>{TeamDept}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
      <section className="contact scroll-animation scroll-animation--up" id="contact">
        <h1 className="section__text scroll-animation scroll-animation--up">
          Contact
        </h1>
        <h1 className="section__text--bold scroll-animation scroll-animation--up" style={{ paddingBottom: 0 }} data-sa-delay="200">
          Didn’t find what you were looking for?
        </h1>
        <p className="contact__section__text scroll-animation scroll-animation--up" data-sa-delay="400">
          Shoot us an email with your request and we will contact you within one business day.
        </p>
        <div className="contact__form-container scroll-animation scroll-animation--up">
          <div className="contact__input-wrapper scroll-animation scroll-animation--up">
            <input
              type="text"
              className={
                (state.fieldNull === true && contactState.name === "")
                  ? "contact__input--required"
                  : "contact__input"
              }
              placeholder="Name"
              value={contactState.name}
              onChange={(event) => {
                setContactState({ ...contactState, name: event.target.value })
              }}
            />
            <span className="contact__required-point">*</span>
          </div>
          <div className="contact__input-wrapper scroll-animation scroll-animation--up">
            <input
              type="text"
              className="contact__input"
              placeholder="Phone"
              value={contactState.phone}
              onChange={(event) => {
                setContactState({ ...contactState, phone: event.target.value })
              }}
            />
          </div>
          <div className="contact__input-wrapper scroll-animation scroll-animation--up">
            <input
              type="text"
              className={
                (state.fieldNull === true && contactState.email === "")
                  ? "contact__input--required"
                  : "contact__input"
              }
              placeholder="E-mail"
              value={contactState.email}
              onChange={(event) => {
                setContactState({ ...contactState, email: event.target.value })
              }}
            />
            <span className="contact__required-point">*</span>
          </div>
          <div className="contact__input-wrapper scroll-animation scroll-animation--up">
            <input
              type="text"
              className="contact__input"
              placeholder="Company"
              value={contactState.company}
              onChange={(event) => {
                setContactState({ ...contactState, company: event.target.value })
              }}
            />
          </div>
          <div className="contact__input-wrapper scroll-animation scroll-animation--up" style={{ gridColumn: 'span 2' }}>
            <textarea
              className={
                (state.fieldNull === true && contactState.content === "")
                  ? "contact__textarea--required"
                  : "contact__textarea"
              }
              placeholder="Message"
              value={contactState.content}
              onChange={(event) => {
                setContactState({ ...contactState, content: event.target.value })
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
            <input className="contact__checkbox"
              type="checkbox"
              name="check"
              value="check"
              onClick={() => {
                setState({ ...state, onChecked: !state.onChecked })
              }}
            />
            <p className="contact__checkbox-text">
              I consent to ELYSIA PLATFORM PTE. LTD processing my personal information as set out in the Privacy Policy and Cookie Policy and that, given the global nature of ELYSIA PLATFORM PTE. LTD's business, such processing may take place outside of my home jurisdiction.
            </p>
          </div>
        </div>
        <p className="contact__required-message" style={{ display: `${state.fieldNull === true ? ("inline-block") : ("none")}` }}>Name, E-mail address, and Content field is Required</p>
        <div className="contact__button-wrapper scroll-animation">
          {(state.onChecked && state.recaptcha) ? (
            <p className="button" onClick={sendContact}>
              CONTACT
              <div className="button__arrow-wrapper">
                <figure className="button__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }} />
              </div>
            </p>
          ) : (
            <p className="button--disable">
              CONTACT
              <div className="button--disable__arrow-wrapper">
                <figure className="button--disable__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }} />
              </div>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Main;
