import React, { useState, useEffect, useRef, Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import ReactDOM from "react-dom";
import ElysiaLogo from '../src/shared/image/Elysia_Logo.png';
import AppStore from '../src/shared/image/app_store.png';
import GooglePlay from '../src/shared/image/google_play.png';
import ElysiaApp from '../src/shared/image/Elysia_app.png';
import Temp from '../src/shared/image/black.png';
import Iconloop from '../src/shared/image/iconloop.png';
import Hexlant from '../src/shared/image/hexlant.png';
import Bishijie from '../src/shared/image/bishijie.png';
import Xangle from '../src/shared/image/xangle.png';
import Chainlink from '../src/shared/image/chainlink.png';
import ElysiaLogoWhite from '../src/shared/image/Elysia_Logo_White.png';
import Blog from '../src/shared/image/blog.png';
import Fackbook from '../src/shared/image/facebook.png';
import Github from '../src/shared/image/github.png';
import Kakaotalk from '../src/shared/image/kakaotalk.png';
import Medium from '../src/shared/image/medium.png';
import Telegram from '../src/shared/image/telegram.png';
import Weibo from '../src/shared/image/weibo.png';
import Twitter from '../src/shared/image/twitter.png';
import '../src/css/style.scss';
import i18n from '../src/i18n/i18n';
import { ServiceComponent } from './modules/service/ServiceComponent';

const App = () => {
  const [state, setState] = useState({
    selectMliestone: -1,
    totalMliestoneArray: 15,
    language: "ko",
  });
  i18n.locale = state.language;

  const Service = React.createRef<HTMLDivElement>();
  const Milestone = React.createRef<HTMLDivElement>();
  const Team = React.createRef<HTMLDivElement>();
  const Partners = React.createRef<HTMLDivElement>();
  const Contact = React.createRef<HTMLDivElement>();
  const Top = React.createRef<HTMLDivElement>();

  const Scroll = (ref: any) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
  
  const MliestoneSelected = {
    width: 24,
    height: 24,
    top: -12,
    position: "relative",
    backgroundColor: "#3679b5",
    borderRadius: 5,
    boxShadow: "0px 3px 6px #3679b5"
  }
  const MliestoneActivation = {
    width: 12,
    height: 12,
    backgroundColor: "#3679b5",
    borderRadius: 2,
    boxShadow: "0px 6px 10px #2498ff9a"
  }
  async function ChangeMliestoneDot(count: number) {
    setState({ ...state, selectMliestone: count});
    console.log(state.selectMliestone);
  }
  const TimeLineListing = Array(state.totalMliestoneArray).fill(0).map((_x, index) => {
    return (
      <>
        <div className={"mliestone-dot " + (state.selectMliestone === index ? 'mliestone-selected' : '')} id={"mliestone-" + index} style={{
            ...(state.selectMliestone === index ?
              MliestoneSelected : 
            state.selectMliestone > index &&
              MliestoneActivation)
            }} onClick={() => ChangeMliestoneDot(index)}>
          <p className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}>{i18n.t('mliestone.timeline.' + index)}</p>
          <h1 className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')} style={{ ...(state.selectMliestone === index ? {display: "block"} : {display: "none"} )}}>{i18n.t('mliestone.timeline_contant.' + index)}</h1>
        </div>
      </>
    );
  });
  const TeamListing = Array(i18n.t('team.name').length).fill(0).map((_x, index) => {
    return (
      <div className="team-info-wrapper">
        <img src={Temp} className="team-picture" alt="Elysia" />
        <h3>{i18n.t('team.name.' + index)}</h3>
        <p>{i18n.t('team.dept.' + index)}</p>
      </div>
    );
  });

  return (
    <div className="elysia" ref={Top}>
      <header className="header-container">
        <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        <nav className="header-link-wrapper">
          <p className="header-link service">
            <a onClick={() => Scroll(Service)}>{i18n.t("main.service")}</a>
          </p>
          <p className="header-link milestone">
            <a onClick={() => Scroll(Milestone)}>{i18n.t("main.milestone")}</a>
          </p>
          <p className="header-link team">
            <a onClick={() => Scroll(Team)}>{i18n.t("main.team")}</a>
          </p>
          <p className="header-link partners">
            <a onClick={() => Scroll(Partners)}>{i18n.t("main.partners")}</a>
          </p>
          <p className="header-link contect">
            <a onClick={() => Scroll(Contact)}>{i18n.t("main.contact")}</a>
          </p>
        </nav>
      </header>
      <button className="top-botton" title="Top" id="top-button" onClick={() => Scroll(Top)}>▲</button>
      <section className="main-wrapper" id="main">
        <div className="main-text-wrapper">
          <p className="main-text">
            {i18n.t('main.invest_label')}
          </p>
          <img src={AppStore} className="app-store" alt="Elysia" />
          <img src={GooglePlay} className="google-play" alt="Elysia" />
        </div>
        <img src={ElysiaApp} className="elysia-app" alt="Elysia" />
      </section>
      <section className="service-wrapper contents-wrapper" id="service" ref={Service}>
        <ServiceComponent Timer={4000} />
      </section>
      <section className="mliestone-wrapper contents-wrapper" id="milestone" ref={Milestone}> 
        <div>
          <p className="mliestone-header-text header-text">{i18n.t("mliestone.header_label")}</p>
          <div className="mliestone-timeline" style={{ ...(state.totalMliestoneArray === (state.selectMliestone + 1) ? { backgroundColor: "#3679b5" } : { backgroundColor: "#cccccc" }) }}>
            <div className="mliestone-dot-wrapper">
              <div className="mliestone-line" style={{ width: (1190/(state.totalMliestoneArray-1)) * state.selectMliestone }} />
              {TimeLineListing}
            </div>
          </div>
        </div>
      </section>
      <section className="team-wrapper contents-wrapper" id="team" ref={Team}>
        <p className="team-header-text header-text">{i18n.t("team.header_label")}</p>
        {TeamListing}
      </section>
      <section className="partners-wrapper contents-wrapper" id="partners" ref={Partners}>
        <p className="pertners-header-text header-text">{i18n.t("partners.header_label")}</p>
        <div className="partners-container">
          <img src={Iconloop} className="partners-picture" alt="Elysia" />
          <img src={Hexlant} className="partners-picture" alt="Elysia" />
          <img src={Bishijie} className="partners-picture" alt="Elysia" />
          <img src={Xangle} className="partners-picture" alt="Elysia" />
          <img src={Chainlink} className="partners-picture" alt="Elysia" />
        </div>
      </section>
      <section className="contact-wrapper contents-wrapper" id="contact" ref={Contact}>
        <p className="contact-header-text">{i18n.t("contact.info_header")}</p>
        <p className="contact-text">{i18n.t("contact.info_label")}</p>
        <button className="contact-button">{i18n.t("contact.contact_button")}</button>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="footer-container-left">
              <div className="footer-container-logo">
                <img src={ElysiaLogoWhite} className="elysia-logo-white" alt="Elysia"/>
                <p className="elysia-logo-text">{i18n.t("footer.logo_label")}</p>
              </div>
              <div className="footer-container-contact">
                <p className="footer-header-text">
                  {i18n.t("footer.contact")}
                </p>
                <p className="footer-text">
                  {i18n.t("footer.email")}
                </p>
                <p className="footer-header-text">
                  {i18n.t("footer.whitepaper")}
                </p>
                <p className="footer-text">
                  https://주소
                </p>
              </div>
            </div>
            <div className="footer-container-right">
              <p className="footer-header-text">
                {i18n.t("footer.community")}
              </p>
              <img src={Twitter} className="footer-icon" alt="Elysia"/>
              <img src={Kakaotalk} className="footer-icon" alt="Elysia"/>
              <img src={Telegram} className="footer-icon" alt="Elysia"/>
              <img src={Github} className="footer-icon" alt="Elysia"/>
              <img src={Fackbook} className="footer-icon" alt="Elysia"/>
              <img src={Weibo} className="footer-icon" alt="Elysia"/>
              <img src={Medium} className="footer-icon" alt="Elysia"/>
              <img src={Blog} className="footer-icon" alt="Elysia"/>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <p className="footer-copyright">
           {i18n.t("footer.copyright")}
          </p>
          <p className="footer-privacy-policy">
            {i18n.t("footer.privacy_policy")}
          </p>
          <p className="footer-terms-fo-service">
            {i18n.t("footer.terms_service")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;