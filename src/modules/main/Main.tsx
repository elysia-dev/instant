import React, { useEffect, useState } from 'react';
import ElysiaLogo from '../../shared/image/Elysia_Logo.png';
import AppStore from '../../shared/image/app_store.png';
import GooglePlay from '../../shared/image/google_play.png';
import ElysiaApp from '../../shared/image/Elysia_app.png';
import LinkedIn from '../../shared/image/linkedin.png';

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
  const milestoneLength = 13;

  const Scroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const Typewriter = () => {
    const srcString = t("main.invest_label");
    const [state, setState] = useState({
      content: '',
      carriage: 0
    })

    useEffect(() => {
      if(state.carriage == srcString.length) return
      const delay = setTimeout(() => {
        setState({ content: state.content + srcString[state.carriage], carriage: state.carriage + 1 })
        clearTimeout(delay)
      }, 
      2000 / srcString.length
      )
    }, [state.content])
    
    return (
      <p className="main__text" style={{
        height: 150,
        margin: 0
      }}>{state.content}
        <span className="main__text--cursor" style={{
          fontWeight: 100,
          fontFamily: "Inter"
        }}>|</span>
      </p>
    );
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
      <header className="header">
        <Link to="/">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </Link>
        <nav className="header__link-wrapper">
          <p className="header__link--service header-link">
            <a onClick={() => Scroll(Service)}>{t("main.service")}</a>
          </p>
          <p className="header__link--milestone header-link">
            <a onClick={() => Scroll(Milestone)}>{t("main.milestone")}</a>
          </p>
          <p className="header__link--team header-link">
            <a onClick={() => Scroll(Team)}>{t("main.team")}</a>
          </p>
          <p className="header__link--partners header-link">
            <a onClick={() => Scroll(Partners)}>{t("main.partners")}</a>
          </p>
          <p className="header__link--contect header-link">
            <a onClick={() => history.push("/contact")}>{t("main.contact")}</a>
          </p>
          <p className="header__link--markets header-link">
            <a onClick={() => {
              window.open("https://coinmarketcap.com/currencies/elysia/markets/", "_blank")
            }}>{t("main.markets")}</a>
          </p>
        </nav>
      </header>
      <button className="top-scroll" title="Top" id="top-button" onClick={() => Scroll(Top)}>▲</button>
      <section className="main" id="main">
        <div className="main__text-wrapper" style={{ paddingTop: i18n.language === "en" ? 150 : 200 }}>
          {Typewriter()}
          {
            i18n.language === 'en' && t('main.invest_sublabel').split("\n").map((content, index) => {
              return (
                <p
                  className="main__text--sub"
                  key={`subtitle_${index}`}
                  style={{ margin: 0, whiteSpace: "nowrap", marginTop: index === 0 ? 15 : 0 }}>
                  {content}
                </p>
              )
            })
          }
          <div className="main__image-wrapper">
            <a href="https://apps.apple.com/us/app/elysia/id1536733411">
              <img src={AppStore} className="main__image__app-store" alt="Elysia" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=land.elysia">
              <img src={GooglePlay} className="main__image__google-play" alt="Elysia" />
            </a>
          </div>
        </div>
        <img src={ElysiaApp} className="main__image__elysia-app" alt="Elysia" />
      </section>
      <section className="service contents-container" id="service" ref={Service}>
        <ServiceComponent />
      </section>
      <section className="mliestone contents-container" id="milestone" ref={Milestone} >
        <div className="mliestone__container">
          <h1 className="mliestone__header-text header-text">{t("mliestone.header_label")}</h1>
          <div className="mliestone__timeline__container">
            <div
              className="mliestone__timeline"
              style={{
                ...(milestoneLength === (selectedMilestone + 1) ? { backgroundColor: "#3679b5" } : { backgroundColor: "#cccccc" })
              }}
            >
              <div className="mliestone__dot-wrapper">
                <div className="mliestone--fill-line" style={{ width: (1190 / (milestoneLength - 1)) * selectedMilestone }} />
                {
                  Array(milestoneLength).fill(0).map((_x, index) => {
                    return (
                      <>
                        <div
                          className={"mliestone__dot" + (selectedMilestone === index ? '--selected' : '')}
                          id={"mliestone__dot--" + index}
                          style={{ ...(selectedMilestone > index && MliestoneActivation) }}
                          onClick={() => setSelectedMilestone(index)}
                        >
                          <div style={{ ...(selectedMilestone === index ? MliestoneSelected : MliestoneDisable) }} />
                          <p className={"mliestone__dot--" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}>
                            {t('mliestone.timeline.' + index)}
                          </p>
                          <h1
                            className={"mliestone__dot--bold--" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}
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
      <section className="team contents-container" id="team" ref={Team}>
        <p className="team__header-text header-text">{t("team.header_label")}</p>
        {
          [
            [Team1, Team1Hover, "https://www.linkedin.com/in/junggun-lim-2b1a1a137/"],
            [Team2, Team2Hover, "https://www.linkedin.com/in/%EC%9B%90%EC%A4%80-%EC%B0%A8-1b707653/"],
            [Team3, Team3Hover, "https://www.linkedin.com/in/yoon-kim-02228619/"],
            [Team4, Team4Hover, "https://www.linkedin.com/in/donguk-seo-6483141b6/"],
            [Team5, Team5Hover, "https://www.linkedin.com/in/hyuno-bae-6493141b6/"],
            [Team6, Team6Hover, "https://www.linkedin.com/in/%ED%9D%AC%EC%88%98-%ED%95%9C-a158ba191/"],
            [Team7, Team7Hover, "https://www.linkedin.com/in/%EC%82%AC%EB%9F%89-%ED%92%8D-aba01a205/"],
            [Team8, Team8Hover],
          ].map(([team, teamHover, isJoinLinkedIn], index) => {
            return (
              <div className="team__container">
                <div className="team__wrapper">
                  <img src={team} className="team__picture" alt="Elysia" />
                  <img src={teamHover} className="team__picture--hover" alt="Elysia" />
                </div>
                <div className="team__text-wrapper">
                  <h3 className="team__text--bold">{t('team.name.' + index)}</h3>
                  <div className="team__linkedin-link-wrapper" style={isJoinLinkedIn === undefined ? {display: "none"} : {display: "block"}}>
                    <a href={isJoinLinkedIn} target="_blink">
                      <img src={LinkedIn} className="team__linkedin" />
                    </a>
                  </div>
                </div>
                <p className="team__text">{t('team.dept.' + index)}</p>
              </div>
            );
          })
        }
      </section>
      <section className="partners contents-container" id="partners" ref={Partners}>
        <h1 className="pertners__header-text header-text">{t("partners.header_label")}</h1>
        <div className="partners__wrapper">
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
                <img src={image} className="partners__picture" alt="Elysia" />
              );
            })
          }
        </div>
      </section>
      <section className="contact contents-container" id="contact" ref={Contact}>
        <h1 className="contact__header-text header-text">{t("contact.info_header")}</h1>
        <button className="contact__button" onClick={() => history.push('/contact')}>{t("contact.contact_button")}</button>
      </section>
    </div>
  );
}

export default Main;
