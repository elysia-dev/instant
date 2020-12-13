import React, { useState } from 'react';
import ElysiaLogo from '../../../shared/image/Elysia_Logo.png';
import AppStore from '../../../shared/image/app_store.png';
import GooglePlay from '../../../shared/image/google_play.png';
import ElysiaApp from '../../../shared/image/Elysia_app.png';

/* Team Image */
import Team1 from '../../../shared/image/team/Team1.png';
import Team2 from '../../../shared/image/team/Team2.png';
import Team3 from '../../../shared/image/team/Team3.png';
import Team4 from '../../../shared/image/team/Team4.png';
import Team5 from '../../../shared/image/team/Team5.png';
import Team6 from '../../../shared/image/team/Team6.png';
import Team7 from '../../../shared/image/team/Team7.png';
import Team8 from '../../../shared/image/team/Team8.png';
import Team1Hover from '../../../shared/image/team/Team1_hover.png';
import Team2Hover from '../../../shared/image/team/Team2_hover.png';
import Team3Hover from '../../../shared/image/team/Team3_hover.png';
import Team4Hover from '../../../shared/image/team/Team4_hover.png';
import Team5Hover from '../../../shared/image/team/Team5_hover.png';
import Team6Hover from '../../../shared/image/team/Team6_hover.png';
import Team7Hover from '../../../shared/image/team/Team7_hover.png';
import Team8Hover from '../../../shared/image/team/Team8_hover.png';

/* Partners Image */
import Iconloop from '../../../shared/image/partners/iconloop.png';
import Hexlant from '../../../shared/image/partners/hexlant.png';
import Bishijie from '../../../shared/image/partners/bishijie.png';
import Xangle from '../../../shared/image/partners/xangle.png';
import Chainlink from '../../../shared/image/partners/chainlink.png';
import HahmShout from '../../../shared/image/partners/hahmshout.png';
import Cider from '../../../shared/image/partners/cider.png';
import BKL from '../../../shared/image/partners/bkl.png';
import TSMP from '../../../shared/image/partners/tsmp.png';
import FocusLawAsia from '../../../shared/image/partners/focuslawasia.png';
import HiBlocks from '../../../shared/image/partners/hiblocks.png';
import Argos from '../../../shared/image/partners/argos.png';
import PropWave from '../../../shared/image/partners/propwave.png';
import Velic from '../../../shared/image/partners/velic.png';
import SRC from '../../../shared/image/partners/src.png';
import Daybit from '../../../shared/image/partners/daybit.png';
import Gopax from '../../../shared/image/partners/gopax.png';
import Bithumb from '../../../shared/image/partners/bithumb.png';
import BithumbGlobal from '../../../shared/image/partners/bithumbglobal.png';
import HUB from '../../../shared/image/partners/hub.png';
import HOW from '../../../shared/image/partners/how.png';

import '../../css/mobileStyle.scss';
import i18n from '../../../i18n/i18n';
import Slider from '../slider/Slider';
import MlieStoneSlider from '../slider/MlieStoneSlider';
import Footer from '../../modules/footer/Footer';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const [state, setState] = useState({
    selectMliestone: -1,
    language: "ko",
  });
  i18n.locale = state.language;
  const history = useHistory();

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

  return (
    <div className="elysia">
      <header className="header-container">
        <a href="https://elysia.land/">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </a>
      </header>
      <section className="main-wrapper" id="main">
          <p className="main-text">
            {i18n.t('main.invest_label')}
          </p>
        <div className="main-image-wrapper">
          <a href="https://apps.apple.com/us/app/elysia/id1536733411">
            <img src={AppStore} className="app-store" alt="Elysia" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=land.elysia">
            <img src={GooglePlay} className="google-play" alt="Elysia" />
          </a>
        </div>
        <img src={ElysiaApp} className="elysia-app" alt="Elysia" />
      </section>
      <section className="service-wrapper contents-wrapper" id="service">
        <Slider />
      </section>
      <section className="mliestone-wrapper contents-wrapper" id="milestone">
        <MlieStoneSlider />
      </section>
      <section className="team-wrapper contents-wrapper" id="team">
        <p className="team-header-text header-label">{i18n.t("team.header_label")}</p>
        {
          [
            [Team1, Team1Hover],
            [Team2, Team2Hover],
            [Team3, Team3Hover],
            [Team4, Team4Hover],
            [Team5, Team5Hover],
            [Team6, Team6Hover],
            [Team7, Team7Hover],
            [Team8, Team8Hover],
          ].map(([team, teamHover], index) => {
            return (
              <div className="team-info-wrapper" style={((index % 2 === 0) ? { float: "right" } : {})}>
                <div style={{
                  position: "relative",
                  width: 120,
                  height: 120,
                  marginTop: 13
                }} >
                  <img src={team} className="team-picture" alt="Elysia" />
                  <img src={teamHover} className="team-picture hover" alt="Elysia" />
                </div>
                <h3>{i18n.t('team.name.' + index)}</h3>
                <p>{i18n.t('team.dept.' + index)}</p>
              </div>
            );
          })
        }
      </section>
      <section className="partners-wrapper contents-wrapper" id="partners">
        <p className="pertners-header-text header-label">{i18n.t("partners.header_label")}</p>
        <div className="partners-container">
          {
            [
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
            ].map((image, index) => {
              return (
                <img src={image} className="partners-picture" alt="Elysia"  style={((index % 2 === 0) ? { float: "right" } : {})}/>
              );
            })
          }
        </div>
      </section>
      <section className="contact-wrapper contents-wrapper" id="contact">
        <p className="contact-header-text">{i18n.t("contact.info_header")}</p>
        {/* <p className="contact-text">{i18n.t("contact.info_label")}</p> */}
        <button className="contact-button" onClick={() => history.push('/contact')}>{i18n.t("contact.contact_button")}</button>
      </section>
    </div>
  );
}

export default Main;
