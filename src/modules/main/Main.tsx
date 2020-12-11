import React, { useState, useEffect, useRef, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ReactDOM from "react-dom";
import ElysiaLogo from '../../shared/image/Elysia_Logo.png';
import AppStore from '../../shared/image/app_store.png';
import GooglePlay from '../../shared/image/google_play.png';
import ElysiaApp from '../../shared/image/Elysia_app.png';

/* Team Image */
import Team1 from '../../shared/image/team/Team1.png';
import Team2 from '../../shared/image/team/Team2.png';
import Team3 from '../../shared/image/team/Team3.png';
import Team4 from '../../shared/image/team/Team4.png';
import Team5 from '../../shared/image/team/Team5.png';
import Team6 from '../../shared/image/team/Team6.png';
import Team7 from '../../shared/image/team/Team7.png';
import Team8 from '../../shared/image/team/Team8.png';
import Team1Hover from '../../shared/image/team/Team1_hover.png';
import Team2Hover from '../../shared/image/team/Team2_hover.png';
import Team3Hover from '../../shared/image/team/Team3_hover.png';
import Team4Hover from '../../shared/image/team/Team4_hover.png';
import Team5Hover from '../../shared/image/team/Team5_hover.png';
import Team6Hover from '../../shared/image/team/Team6_hover.png';
import Team7Hover from '../../shared/image/team/Team7_hover.png';
import Team8Hover from '../../shared/image/team/Team8_hover.png';

/* Partners Image */
import Iconloop from '../../shared/image/partners/iconloop.png';
import Hexlant from '../../shared/image/partners/hexlant.png';
import Bishijie from '../../shared/image/partners/bishijie.png';
import Xangle from '../../shared/image/partners/xangle.png';
import Chainlink from '../../shared/image/partners/chainlink.png';
import HahmShout from '../../shared/image/partners/hahmshout.png';
import Cider from '../../shared/image/partners/cider.png';
import BKL from '../../shared/image/partners/bkl.png';
import TSMP from '../../shared/image/partners/tsmp.png';
import FocusLawAsia from '../../shared/image/partners/focuslawasia.png';
import HiBlocks from '../../shared/image/partners/hiblocks.png';
import Argos from '../../shared/image/partners/argos.png';
import PropWave from '../../shared/image/partners/propwave.png';
import Velic from '../../shared/image/partners/velic.png';
import SRC from '../../shared/image/partners/src.png';
import Daybit from '../../shared/image/partners/daybit.png';
import Gopax from '../../shared/image/partners/gopax.png';
import Bithumb from '../../shared/image/partners/bithumb.png';
import BithumbGlobal from '../../shared/image/partners/bithumbglobal.png';
import HUB from '../../shared/image/partners/hub.png';
import HOW from '../../shared/image/partners/how.png';

import '../../css/style.scss';
import i18n from '../../i18n/i18n';
import { ServiceComponent } from '../../modules/service/ServiceComponent';
import Footer from '../../modules/footer/Footer';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const [state, setState] = useState({
    selectMliestone: -1,
    language: "ko",
  });
  i18n.locale = state.language;

  const Service = React.createRef<HTMLDivElement>();
  const Milestone = React.createRef<HTMLDivElement>();
  const Team = React.createRef<HTMLDivElement>();
  const Partners = React.createRef<HTMLDivElement>();
  const Contact = React.createRef<HTMLDivElement>();
  const Top = React.createRef<HTMLDivElement>();

  const navigation = useNavigation();

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
  const TimeLineListing = Array(i18n.t('mliestone.timeline').length).fill(0).map((_x, index) => {
    return (
      <>
        <div className={"mliestone-dot " + (state.selectMliestone === index ? 'mliestone-selected' : '')} id={"mliestone-" + index} style={{
            ...(state.selectMliestone === index ?
              MliestoneSelected : 
            state.selectMliestone > index &&
              MliestoneActivation)
            }} onClick={() => setState({ ...state, selectMliestone: index})}>
          <p className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}>{i18n.t('mliestone.timeline.' + index)}</p>
          <h1 className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')} style={{ ...(state.selectMliestone === index ? {display: "block"} : {display: "none"} )}}>{i18n.t('mliestone.timeline_contant.' + index)}</h1>
        </div>
      </>
    );
  });
  const TeamListing = Array(i18n.t('team.name').length).fill(0).map((_x, index) => {
    const TeamArray = [
      Team1,
      Team2,
      Team3,
      Team4,
      Team5,
      Team6,
      Team7,
      Team8
    ];
    const TeamHoverArray = [
      Team1Hover,
      Team2Hover,
      Team3Hover,
      Team4Hover,
      Team5Hover,
      Team6Hover,
      Team7Hover,
      Team8Hover
    ];
    return (
      <div className="team-info-wrapper">
        <div style={{
            position: "relative",
            width: 180,
            height: 180
          }} >
          <img src={TeamArray[index]} className="team-picture" alt="Elysia" />
          <img src={TeamHoverArray[index]} className="team-picture hover" alt="Elysia" />
        </div>
        <h3>{i18n.t('team.name.' + index)}</h3>
        <p>{i18n.t('team.dept.' + index)}</p>
      </div>
    );
  });
  const PartnersArray = [
    Iconloop,
    Hexlant,
    Bishijie,
    Xangle,
    Chainlink,
    HahmShout,
    Cider,
    BKL,
    TSMP,
    FocusLawAsia,
    HiBlocks,
    Argos,
    PropWave,
    Velic,
    SRC,
    Daybit,
    Gopax,
    Bithumb,
    BithumbGlobal,
    HUB,
    HOW 
  ];
  const PartnersListing = Array(PartnersArray.length).fill(0).map((_x, index) => {
    return (
      <img src={PartnersArray[index]} className="partners-picture" alt="Elysia" />
    );
  });

  return (
    <div className="elysia" ref={Top}>
      <header className="header-container">
        <a href="https://elysia.land/">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </a>
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
            <a href="https://apps.apple.com/us/app/elysia/id1536733411">
              <img src={AppStore} className="app-store" alt="Elysia" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=land.elysia">
              <img src={GooglePlay} className="google-play" alt="Elysia" />
            </a>
          </div>
          <img src={ElysiaApp} className="elysia-app" alt="Elysia" />
        </section>
        <section className="service-wrapper contents-wrapper" id="service" ref={Service}>
          <ServiceComponent Timer={4000} />
        </section>
        <section className="mliestone-wrapper contents-wrapper" id="milestone" ref={Milestone}> 
          <div>
            <p className="mliestone-header-text header-text">{i18n.t("mliestone.header_label")}</p>
            <div className="mliestone-timeline" style={{ ...(i18n.t('mliestone.timeline').length === (state.selectMliestone + 1) ? { backgroundColor: "#3679b5" } : { backgroundColor: "#cccccc" }) }}>
              <div className="mliestone-dot-wrapper">
                <div className="mliestone-line" style={{ width: (1190/(i18n.t('mliestone.timeline').length-1)) * state.selectMliestone }} />
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
            {PartnersListing}
          </div>
        </section>
        <section className="contact-wrapper contents-wrapper" id="contact" ref={Contact}>
          <p className="contact-header-text">{i18n.t("contact.info_header")}</p>
          <p className="contact-text">{i18n.t("contact.info_label")}</p>
          <button className="contact-button" onClick={() => navigation.navigate('Contact')}>{i18n.t("contact.contact_button")}</button>
        </section>
        <Footer />
    </div>
  );
}

export default Main;
