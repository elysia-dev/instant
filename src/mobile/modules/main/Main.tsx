import React, { useState } from 'react';
import ElysiaLogo from '../../../shared/image/Elysia_Logo.png';
import AppStore from '../../../shared/image/app_store.png';
import GooglePlay from '../../../shared/image/google_play.png';
import ElysiaApp from '../../../shared/image/Elysia_app.png';
import Quit from '../../../shared/image/quitbutton.png';

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
import Anjuke from '../../../shared/image/partners/anjuke.png';

import '../../css/mobileStyle.scss';
import Slider from '../slider/Slider';
import MlieStoneSlider from '../slider/MlieStoneSlider';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <div className="elysia-mobile">
        <header className="mobile-header-container">
          <Link to="/">
            <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
          </Link>
        </header>
        <section className="mobile-main-wrapper" id="main">
          <p className="mobile-main-text">
            {t('main.invest_label')}
          </p>
          <div className="mobile-main-image-wrapper">
            <a href="https://apps.apple.com/us/app/elysia/id1536733411">
              <img src={AppStore} className="mobile-app-store" alt="Elysia" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=land.elysia">
              <img src={GooglePlay} className="mobile-google-play" alt="Elysia" />
            </a>
          </div>
          <img src={ElysiaApp} className="mobile-elysia-app" alt="Elysia" />
        </section>
        <section className="mobile-service-wrapper contents-mobile-wrapper" id="service">
          <Slider />
        </section>
        <section className="mobile-mliestone-wrapper contents-mobile-wrapper" id="milestone">
          <MlieStoneSlider />
        </section>
        <section className="mobile-team-wrapper contents-mobile-wrapper" id="team">
          <p className="mobile-team-header-text mobile-header-label">{t("team.header_label")}</p>
          <div className="mobile-team-container">
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
                  <div
                    className="mobile-team-info-wrapper"
                    style={index % 2 === 1 ? { marginLeft: "auto" } : {}}
                  >
                    <div style={{
                      width: 120,
                      height: 120,
                      marginTop: 13,
                      position: "relative",
                    }} >
                      <img src={team} className="mobile-team-picture" alt="Elysia" />
                      <img src={teamHover} className="mobile-team-picture hover" alt="Elysia" />
                    </div>
                    <h3>{t('team.name.' + index)}</h3>
                    <p>{t('team.dept.' + index)}</p>
                  </div>
                );
              })
            }
          </div>
        </section>
        <section className="mobile-partners-wrapper mobile-contents-mobile-wrapper" id="partners">
          <p className="mobile-pertners-header-text mobile-header-label">{t("partners.header_label")}</p>
          <div className="mobile-partners-container">
            {
              [
                Iconloop,
                Hexlant,
                Bishijie,
                Anjuke,
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
                  <div className="mobile-partners-item" style={{ textAlign: "center" }}>
                    <img src={image} className="mobile-partners-picture" alt="Elysia" />
                  </div>
                );
              })
            }
          </div>
        </section>
        <section className="mobile-contact-wrapper mobile-contents-mobile-wrapper" id="contact">
          <p className="mobile-contact-header-text">{t("contact.info_header")}</p>
          <button className="mobile-contact-button" onClick={() => history.push("/contact")}>{t("contact.contact_button")}</button>
        </section>
      </div>
    </>
  );
}

export default Main;
