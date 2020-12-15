import React, { useEffect, useState } from 'react';
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
import Alphanonce from '../../shared/image/partners/alphanonce.png';
import Anjuke from '../../shared/image/partners/anjuke.png';

import '../../css/style.scss';
import ServiceComponent from '../../modules/service/ServiceComponent';
import { useHistory, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const Service = React.createRef<HTMLDivElement>();
  const Milestone = React.createRef<HTMLDivElement>();
  const Team = React.createRef<HTMLDivElement>();
  const Partners = React.createRef<HTMLDivElement>();
  const Contact = React.createRef<HTMLDivElement>();
  const Top = React.createRef<HTMLDivElement>();
  const milestoneLength = 15;

  const Scroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const MliestoneSelected = {
    width: 24,
    height: 24,
    top: -6,
    right: 6,
    position: "relative",
    backgroundColor: "#3679b5",
    borderRadius: 5,
    boxShadow: "0px 3px 6px #3679b5"
  } as React.CSSProperties;
  const MliestoneActivation = {
    width: 12,
    height: 12,
    backgroundColor: "#3679b5",
    borderRadius: 2,
    boxShadow: "0px 6px 10px #2498ff9a"
  }
  const MliestoneDisable = {
    display: "none"
  } as React.CSSProperties;

  useEffect(() => {
    let timer = setTimeout(() => {
      setSelectedMilestone(
        (selectedMilestone + 1) % milestoneLength,
      )
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [selectedMilestone])

  return (
    <div className="elysia" ref={Top}>
      <header className="header-container">
        <Link to="/">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </Link>
        <nav className="header-link-wrapper">
          <p className="header-link service">
            <a onClick={() => Scroll(Service)}>{t("main.service")}</a>
          </p>
          <p className="header-link milestone">
            <a onClick={() => Scroll(Milestone)}>{t("main.milestone")}</a>
          </p>
          <p className="header-link team">
            <a onClick={() => Scroll(Team)}>{t("main.team")}</a>
          </p>
          <p className="header-link partners">
            <a onClick={() => Scroll(Partners)}>{t("main.partners")}</a>
          </p>
          <p className="header-link contect">
            <a onClick={() => history.push("/contact")}>{t("main.contact")}</a>
          </p>
        </nav>
      </header>
      <button className="top-botton" title="Top" id="top-button" onClick={() => Scroll(Top)}>▲</button>
      <section className="main-wrapper" id="main">
        <div className="main-text-wrapper" style={{ paddingTop: i18n.language === "en" ? 150 : 200 }}>
          {t('main.invest_label').split("\n").map((content, index) => {
            return (
              <p className="main-text" key={`title_${index}`} style={{ margin: 0, whiteSpace: "nowrap" }}>
                {content}
              </p>
            )
          })}
          {
            i18n.language === 'en' && t('main.invest_sublabel').split("\n").map((content, index) => {
              return (
                <p
                  className="main-subtext"
                  key={`subtitle_${index}`}
                  style={{ margin: 0, whiteSpace: "nowrap", marginTop: index === 0 ? 15 : 0 }}>
                  {content}
                </p>
              )
            })
          }
          <div style={{ marginTop: 50 }}>
            <a href="https://apps.apple.com/us/app/elysia/id1536733411">
              <img src={AppStore} className="app-store" alt="Elysia" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=land.elysia">
              <img src={GooglePlay} className="google-play" alt="Elysia" />
            </a>
          </div>
        </div>
        <img src={ElysiaApp} className="elysia-app" alt="Elysia" />
      </section>
      <section className="service-wrapper contents-wrapper" id="service" ref={Service}>
        <ServiceComponent />
      </section>
      <section className="mliestone-wrapper contents-wrapper" id="milestone" ref={Milestone} style={{ height: 600 }}>
        <div>
          <p className="mliestone-header-text header-text">{t("mliestone.header_label")}</p>
          <div style={{ marginTop: 50 }}>
            <div
              className="mliestone-timeline"
              style={{
                ...(milestoneLength === (selectedMilestone + 1) ? { backgroundColor: "#3679b5" } : { backgroundColor: "#cccccc" })
              }}
            >
              <div className="mliestone-dot-wrapper">
                <div className="mliestone-line" style={{ width: (1190 / (milestoneLength - 1)) * selectedMilestone }} />
                {
                  Array(milestoneLength).fill(0).map((_x, index) => {
                    return (
                      <>
                        <div
                          className={"mliestone-dot " + (selectedMilestone === index ? 'mliestone-selected' : '')}
                          id={"mliestone-" + index}
                          style={{ ...(selectedMilestone > index && MliestoneActivation) }}
                          onClick={() => setSelectedMilestone(index)}
                        >
                          <div style={{ ...(selectedMilestone === index ? MliestoneSelected : MliestoneDisable) }} />
                          <p className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}>
                            {t('mliestone.timeline.' + index)}
                          </p>
                          <h1
                            className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}
                            style={{ ...(selectedMilestone === index ? { display: "block" } : { display: "none" }) }}
                          >
                            {t('mliestone.timeline_contant.' + index)}
                          </h1>
                        </div>
                      </>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-wrapper contents-wrapper" id="team" ref={Team}>
        <p className="team-header-text header-text">{t("team.header_label")}</p>
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
              <div className="team-info-wrapper">
                <div style={{
                  position: "relative",
                  width: 180,
                  height: 180
                }} >
                  <img src={team} className="team-picture" alt="Elysia" />
                  <img src={teamHover} className="team-picture hover" alt="Elysia" />
                </div>
                <h3>{t('team.name.' + index)}</h3>
                <p>{t('team.dept.' + index)}</p>
              </div>
            );
          })
        }
      </section>
      <section className="partners-wrapper contents-wrapper" id="partners" ref={Partners}>
        <p className="pertners-header-text header-text">{t("partners.header_label")}</p>
        <div className="partners-container">
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
              HOW,
              Alphanonce
            ].map((image) => {
              return (
                <img src={image} className="partners-picture" alt="Elysia" />
              );
            })
          }
        </div>
      </section>
      <section className="contact-wrapper contents-wrapper" id="contact" ref={Contact}>
        <p className="contact-header-text">{t("contact.info_header")}</p>
        <button className="contact-button" onClick={() => history.push('/contact')}>{t("contact.contact_button")}</button>
      </section>
    </div>
  );
}

export default Main;
