import React, { useEffect, useState } from 'react';
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

/* Portfolio */
import ElysiaAsset1 from '../../../shared/image/portfolio/elysia-asset-1.jpg';
import ElysiaAsset2 from '../../../shared/image/portfolio/elysia-asset-2.png';
import ElysiaAsset3 from '../../../shared/image/portfolio/elysia-asset-3.png';
import ElysiaAsset4 from '../../../shared/image/portfolio/elysia-asset-4.png';
import ElysiaAsset5 from '../../../shared/image/portfolio/elysia-asset-5.png';
import ElysiaAsset6 from '../../../shared/image/portfolio/elysia-asset-6.png';
import ElysiaAsset7 from '../../../shared/image/portfolio/elysia-asset-7.png';
import ElysiaAssetRed1 from '../../../shared/image/portfolio/elysia-asset-red-1.png';
import ElysiaAssetBlue1 from '../../../shared/image/portfolio/elysia-asset-blue-1.png';

/* Team Image */
import Team1 from '../../../shared/image/team/Team1.png';
import Team2 from '../../../shared/image/team/Team2.png';
import Team3 from '../../../shared/image/team/Team3.png';
import Team4 from '../../../shared/image/team/Team4.png';
import Team5 from '../../../shared/image/team/Team9.png';
import Team6 from '../../../shared/image/team/Team8.png';

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
import Daybit from '../../../shared/image/partners/daybit.png';
import Gopax from '../../../shared/image/partners/gopax.png';
import Bithumb from '../../../shared/image/partners/bithumb.png';
import BithumbGlobal from '../../../shared/image/partners/bithumbglobal.png';
import HUB from '../../../shared/image/partners/hub.png';
import HOW from '../../../shared/image/partners/how.png';
import Anjuke from '../../../shared/image/partners/anjuke.png';

import '../css/style.scss';
import { useHistory, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { getByPlaceholderText } from '@testing-library/react';

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
  })
  const SwithcingState = () => {
    setState({ ...state, isMoreAsset: !state.isMoreAsset });
    console.log(state.isMoreAsset);
  }

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
      behavior: 'smooth'
    });
  }
  
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
    console.log(scrollTop);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

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
    if(contactState.email === "") {
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

  return (
    <div className="elysia" id="top" ref={Top}>
      <section className="main" id="main" style={{ backgroundImage: `url(${MainBackground})` }} >
        <header className="main__gnb" style={{ backgroundColor: `${scrollTop >= 100 ? "#FFFFFF" : "transparent"}` }} >
          <nav className="main__gnb__link-container">
            
            <figure className="elysia-logo" onClick={() => Scroll("top")} style={{ backgroundImage: `url(${scrollTop >= 100 ? ElysiaLogo : ElysiaWhiteLogo})` }}/>
            
            <div className="main__gnb__link-wrapper">
              <p className="main__gnb__link" onClick={() => Scroll("service")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}`}}>
                  Service
              </p>
              <p className="main__gnb__link" onClick={() => Scroll("portfolio")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}`}}>
                  Portfolio
              </p>
              <p className="main__gnb__link" onClick={() => Scroll("partners")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}`}}>
                  Partners
              </p>
              <p className="main__gnb__link" onClick={() => Scroll("team")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}`}}>
                  Team
              </p>
              <p className="main__gnb__link main__gnb--bold" onClick={() => Scroll("contact")}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}`}}>
                  Contact
              </p>
            </div>
          </nav>
        </header>
        <div className="main__content-container">
          <h1 className="main__content-text--bold">
            DIGITAL INFRASTRUCTURE FOR<br />REAL ESTATE INVESTING
          </h1>
          <p className="main__content-text">
            ELYSIA provide the latest technology to bridge the gap between<br />traditional real estate and global investors
          </p>
          <a className="main__store__button" href="https://play.google.com/store/apps/details?id=land.elysia">
            <figure className="main__image__google-play" style={{ backgroundImage: `url(${GoogleLogo})` }}/>
            <span className="main__image__text">Google Play</span>
          </a>
          <a className="main__store__button" href="https://apps.apple.com/us/app/elysia/id1536733411">
            <figure className="main__image__app-store" style={{ backgroundImage: `url(${AppleLogo})` }}/>
            <span className="main__image__text">App Store</span>
          </a>
        </div>
        <div className="main__down-arrow-wrapper">
          <img className="main__down-arrow" src={DownArrow} alt="" onClick={() => Scroll("service")} />
        </div>
      </section>
      <section className="service contents-container" id="service" ref={Service}>
        <h1 className="section__text">
          What is ELYSIA
        </h1>
        <h1 className="section__text--bold">
          Real Estate Platform for everything
        </h1>
        <div className="service__container">
          <img className="service__image" src={Service00} alt="" />
          <div className="service__text-wrapper">
            <h1 className="service__header-text">
              For Seller
            </h1>
            <h1 className="service__header-text--bold">
              Tokenize your real estate with Elysia
            </h1>
            <p className="service__text">
              Blockchain technology of ELYSIA gives<br />immutable representation to your assets.<br />Your assets will be an attractive product<br />for global investors. Meet instant global liquidity.
            </p>
            <p className="button" onClick={() => Scroll("contact")}>
              ONBOARDING NOW
              <div className="button__arrow-wrapper">
                <figure className="button__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }}/>
              </div>
            </p>
          </div>
        </div>
        <div className="service__container">
          <div className="service__text-wrapper">
            <h1 className="service__header-text">
              For Buyer
            </h1>
            <h1 className="service__header-text--bold">
              Have fun in a global marketplace<br />with your mobile.
            </h1>
            <p className="service__text">
              Find real estate opportunities around the world<br />and settle transactions with almost no intermediary costs
            </p>
            <p className="button" onClick={() => {
                window.location.replace("https://play.google.com/store/apps/details?id=land.elysia")
              }}>
              Experience it now
              <div className="button__arrow-wrapper">
                <figure className="button__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }}/>
              </div>
            </p>
          </div>
          <img className="service__image" src={Service01} alt="" />
        </div>
        <div className="service__container">
          <img className="service__image" src={Service02} alt="" />
          <div className="service__text-wrapper">
            <h1 className="service__header-text">
              For Asset liquidity
            </h1>
            <h1 className="service__header-text--bold">
              Future of finance
            </h1>
            <p className="service__text">
              Demand driven lending markets using traditional assets<br />as collateral will be the next step for decentralized applications.
            </p>
            <p className="button--disable">
              COMING SOON
              <div className="button--disable__arrow-wrapper">
                <figure className="button--disable__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }}/>
              </div>
            </p>
          </div>
        </div>
      </section>
      <section className="portfolio contents-container" id="portfolio" ref={Portfolio} >
        <div className="portfolio__container">
          <h1 className="portfolio__text section__text">
            ELYSIA Opportunities
          </h1>
          <h1 className="portfolio__text--bold section__text--bold">
            OUR PORTFOLIO
          </h1>
          <div className="portfolio__wrapper">
            {
              [
                [ElysiaAssetBlue1, "Elysia Asset Blue #1", "426075", "1-4, Sadang-ro 16sa-gil, Dongjak-gu, Seoul"],
                [ElysiaAssetRed1, "Elysia Asset Red #1", "181704", "Yeoksam-dong, Gangnam-gu, Seoul"],
                [ElysiaAsset7, "Elysia Asset #7", "823045", "1-1 Bangbae-dong, Seocho-gu, Seoul"],
                [ElysiaAsset6, "Elysia Asset #6", "1182180", "Sadang-dong, Dongjak-gu, Seoul"],
                [ElysiaAsset5, "Elysia Asset #5", "1040950", "Bongcheon-dong, Gwanak-gu, Seoul"],
                [ElysiaAsset4, "Elysia Asset #4", "814810", "73-12 Sadang-dong, Dongjak-gu, Seoul"],
                [ElysiaAsset3, "Elysia Asset #3", "1041150", "141-120 Sadang-dong, Dongjak-gu, Seoul"]
              ].map(([AssetImage, AssetName, AssetFunded, AssetAddress], index) => {
                return (
                  <div className="portfolio__asset__container" style={{ 
                    opacity: `${(index >= 6 && !state.isMoreAsset) ? 0 : 1}`,
                    display: `${(index >= 6 && !state.isMoreAsset) ? "none" : "block"}`
                  }}>
                    <div className="portfolio__asset-funded">Funded</div>
                    <img src={AssetImage} className="portfolio__asset-picture" alt="Elysia Asset" />
                    <h1 className="portfolio__asset-name">{AssetName}</h1>
                    <p className="portfolio__asset-info funded">
                      Funded <span className="portfolio__asset-value">${AssetFunded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </p>
                    <p className="portfolio__asset-info Address">
                      Address <span className="portfolio__asset-value">{AssetAddress}</span>
                    </p>
                  </div>
                );
              })
            }
          </div>  
        </div>
        <h1 className="portfolio__see-more" onClick={SwithcingState}>{!state.isMoreAsset ? "See More >" : "Close <"}</h1>
      </section>
      <section className="partners contents-container" id="partners" ref={Partners}>
        <h1 className="partners__text section__text">
          ELYSIA Partners
        </h1>
        <h1 className="partners__text--bold section__text--bold">
          PARTNERS
        </h1>
        <div className="partners__wrapper">
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
              Daybit,
              Gopax,
              Bithumb,
              BithumbGlobal,
              HOW
            ].map((image) => {
              return (
                <img src={image} className="partners__picture" alt="Elysia" />
              );
            })
          }
        </div>
      </section>
      <section className="team contents-container" id="team" ref={Team}>
        <h1 className="section__text">
          ELYSIA Team
        </h1>
        <h1 className="section__text--bold">
          EXECUTIVE TEAM
        </h1>
        <div className="team__info-wrapper" >
          {
            [
              [Team1, "JungGun Lim", "CEO", `Mr. Lim is the CEO of Elysia. After studying chemical and biological engineering at Seoul National University, he has worked with multinational corporations including Samsung SDI. An expert in Ruby/React JS development, he has worked with many different projects in the past and is particularly interested in smart contract applications operating on the Ethereum network.`],
              [Team2, "WonJoon Cha", "CSO", "While attending Seoul National University, Mr. Cha was a freelance web/android developer for major IT companies for more than 7 years. He found Elysia with Mr. Lim in 2018 after realizing the potential of tokenizing traditional assets. Mr. Cha is particularly interested in cryptocurrency applications and designed the token economics for EL tokens."],
              [Team3, "Yoon Kim", "CMO", "Mr. Kim recently joined Elysia as a business development executive for partnerships and overseas operations. He has over 10 years of experience in sales and marketing at global companies and has most recently worked on crypto projects at ICONLOOP and VELIC"],
              [Team4, "DongUk Seo", "CTO", "Mr. Donguk Seo is currently the Chief Technology Officer at Elysia and is in charge of blockchain architecture and software engineering. He has developed various tools to scale the Ethereum network, including automated deposit tracking and on-chain data sharing. Before joining Elysia, he developed internal and composite APIs for multinational corporations and uses five different programming languages to produce optimal results."],
              [Team5, "Michael Chung", "COO", "KAIST National University\n　Industrial engineering\n　KTB Investment & securities\n　Prop Trading, FRM\n　ICONLOOP\n　Business Development\n　Mr.Chung manages operations and fianance at Elysia."],
              [Team6, "Jacob Lee", "Bees’ Company CEO", "・ Seoul National University,\n　Dept. of naval architecture\n　& ocean engineering\n・ DEMB basic design\n　department\n・ The 27th certified realtor"],
            ].map(([TeamImage, TeamName, TeamDept, TeamHover], index) => {
              return (
                <div className="team__container">
                  <div className="team__wrapper">
                    <img src={TeamImage} className="team__picture" alt="Elysia" />
                    <p className="team__hover-infomation">
                      {TeamHover.split('\n').map(line => {
                        return (<span>{line}<br/></span>)
                      })}
                    </p> 
                  </div>
                  <div className="team__text-wrapper">
                    <h1 className="team__text--bold">{TeamName}</h1>
                    <p className="team__text">{TeamDept}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
      <section className="contact contents-container" id="contact" ref={Contact}>
        <h1 className="section__text">
          Contact
        </h1>
        <h1 className="section__text--bold" style={{ paddingBottom: 0 }}>
          Didn’t find what you were looking for?
        </h1>
        <p className="contact__section__text" >
          Shoot us an email with your request and we will contact you within one business day.
        </p>
        <div className="contact__form-container">
          <div className="contact__input-wrapper">
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
          <div className="contact__input-wrapper">
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
          <div className="contact__input-wrapper">
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
          <div className="contact__input-wrapper">
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
          <div className="contact__input-wrapper" style={{ gridColumn: 'span 2' }}>
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
        <div className="contact__submit-container">
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
              I consent to Aetsoft JSC processing my personal information as set out in the Privacy Policy and Cookie Policy and that, given the global nature of Aetsoft JSC’s business, such processing may take place outside of my home jurisdiction.
            </p>
          </div>
        </div>
        <div className="contact__button-wrapper">
          {(state.onChecked && state.recaptcha) ? (
            <p className="button" onClick={sendContact}>
              CONTACT
              <div className="button__arrow-wrapper">
                <figure className="button__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }}/>
              </div>
            </p>
          ) : (
            <p className="button--disable">
              리캡챠를 하세용
              <div className="button--disable__arrow-wrapper">
                <figure className="button--disable__arrow-image" style={{ backgroundImage: `url(${ButtonArrow})` }}/>
              </div>
            </p>
          )}
        </div>
          <p className="contact__required-message" style={{ display: `${state.fieldNull === true ? ("inline-block") : ("none")}`}}>이름, 이메일주소, 내용은 필수 입력 사항입니다!!</p>
      </section>
    </div>
  );
}

export default Main;
