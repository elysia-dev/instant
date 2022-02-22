import React from "react";
import MainBackground from "src/assets/image/main-background.png";
import DownArrow from "src/assets/image/down-arrow.png";
import Dao from 'src/assets/image/dao-background.png';

/* Service */
import Service00 from "src/assets/image/service00.png";
import Service01 from "src/assets/image/service01.png";
import Service02 from "src/assets/image/service02.png";
import ButtonArrow from "src/assets/image/button-arrow.png";

import FBGCapital from 'src/assets/image/fbgcapital.png';

/* Portfolio */

/* Team Image */
import Team1 from "src/assets/image/team/Team1.png";
import Team2 from "src/assets/image/team/Team2.png";
import Team3 from "src/assets/image/team/Team3.png";
import Team4 from "src/assets/image/team/Team4.png";
import Team5 from "src/assets/image/team/Team9.png";
import Team6 from "src/assets/image/team/Team8.png";

import LinkedIn from "src/assets/image/linkedin.png";

/* Partners Image */
import Certik from "src/assets/image/partners/certik.png";
import HaechiLabs from 'src/assets/image/partners/haechi_labs.png';
import Iconloop from "src/assets/image/partners/iconloop.png";
import Hexlant from "src/assets/image/partners/hexlant.png";
import Bishijie from "src/assets/image/partners/bishijie.png";
import Xangle from "src/assets/image/partners/xangle.png";
import Chainlink from "src/assets/image/partners/chainlink.png";
import HahmShout from "src/assets/image/partners/hahmshout.png";
import BKL from "src/assets/image/partners/bkl.png";
import TSMP from "src/assets/image/partners/tsmp.png";
import FocusLawAsia from "src/assets/image/partners/focuslawasia.png";
import HiBlocks from "src/assets/image/partners/hiblocks.png";
import Argos from "src/assets/image/partners/argos.png";
import PropWave from "src/assets/image/partners/propwave.png";
import SRC from "src/assets/image/partners/src.png";
import Fang from "src/assets/image/partners/fang.png";
import Gopax from "src/assets/image/partners/gopax.png";
import Bithumb from "src/assets/image/partners/bithumb.png";
import BithumbGlobal from "src/assets/image/partners/bithumbglobal.png";
import HUB from "src/assets/image/partners/hub.png";
import HOW from "src/assets/image/partners/how.png";
import Anjuke from "src/assets/image/partners/anjuke.png";
import SaeJong from "src/assets/image/partners/shinkim.jpg";
import XT from "src/assets/image/partners/xt.png";
import Mexc from "src/assets/image/partners/mexc-global6000.png";
import Fbg from "src/assets/image/partners/fbg.png";
import Blocore from "src/assets/image/partners/blocore.png";
import Crypto from "src/assets/image/partners/crypto@2x.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Portfolio from "src/components/Portfolio";
import Navigation from 'src/components/Navigation';


const Main = () => {
  const { t } = useTranslation();

  const Service = React.createRef<HTMLDivElement>();
  const portfolio = React.createRef<HTMLDivElement>();
  const Team = React.createRef<HTMLDivElement>();
  const Partners = React.createRef<HTMLDivElement>();
  const Contact = React.createRef<HTMLDivElement>();
  const Top = React.createRef<HTMLDivElement>();




  /* slack api를 호출합니다 */
  

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
        <Navigation />
        <div className="main__content-container">
          <h2 className="main__content-text--bold">
            {t("main.content-title")}
          </h2>
          <p className="main__content-text">{t("main.content-sub-title")}</p>

          <p className="main__content__dao">
            {t("main.content-dao")}
          </p>
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

        {/* <div className="service__container">
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
        </div> */}
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
                window.location.replace("https://elyfi.world");
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
      <section className="backed">
        <div>
          <h2>
            Backed by
          </h2>
          <div>
            <img src={FBGCapital} className="scroll-animation scroll-animation--up" />
            <img src={Blocore} className="scroll-animation scroll-animation--up" />
          </div>
        </div>
      </section>
      
      <Portfolio />

      <section className="dao" style={{ backgroundImage: `url(${Dao})` }}>
        <div className="dao__title">
          <h3 className=" scroll-animation scroll-animation--up">
          ELYSIA DAO LLC 
          </h3>
          <h2 className=" scroll-animation scroll-animation--up">
            {t("dao.title")}
          </h2>
        </div>
        <div className="dao__content scroll-animation scroll-animation--up">
          <div>
            <p>
              {t("dao.content.0")}
            </p>
          </div>
          <div>
            <p>
              {t("dao.content.1")}
            </p>
          </div>
          <div>
            <p>
              {t("dao.content.2")}
            </p>
          </div>
        </div>
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
          {t("partners.audit")}
        </h1>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}>
        {[Certik, HaechiLabs].map((data, index) => {
          return (
            <img
              src={data}
              className="partners__picture scroll-animation scroll-animation--up"
              alt="Elysia"
              data-sa-margin={index * 5}
            />
          )
        })}
        </div>
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
      
    </div>
  );
};

export default Main;
