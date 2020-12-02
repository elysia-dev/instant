import React, { useState } from 'react';
import ElysiaLogo from '../src/src/shared/image/Elysia_Logo.png';
import AppStore from '../src/src/shared/image/app_store.png';
import GooglePlay from '../src/src/shared/image/google_play.png';
import ElysiaApp from '../src/src/shared/image/Elysia_app.png';
import Onboarding from '../src/src/shared/image/onboarding.png';
import ElysiaOn from '../src/src/shared/image/square-elysia-on.png';
import DefiOn from '../src/src/shared/image/square-defi-on.png';
import OnboardingOn from '../src/src/shared/image/square-onboarding-on.png';
import ElysiaOff from '../src/src/shared/image/square-elysia-off.png';
import DefiOff from '../src/src/shared/image/square-defi-off.png';
import OnboardingOff from '../src/src/shared/image/square-onboarding-off.png';
import Temp from '../src/src/shared/image/black.png';
import Iconloop from '../src/src/shared/image/iconloop.png';
import Hexlant from '../src/src/shared/image/hexlant.png';
import Bishijie from '../src/src/shared/image/bishijie.png';
import Xangle from '../src/src/shared/image/xangle.png';
import Chainlink from '../src/src/shared/image/chainlink.png';
import ElysiaLogoWhite from '../src/src/shared/image/Elysia_Logo_White.png';
import Blog from '../src/src/shared/image/blog.png';
import Fackbook from '../src/src/shared/image/facebook.png';
import Github from '../src/src/shared/image/github.png';
import Kakaotalk from '../src/src/shared/image/kakaotalk.png';
import Medium from '../src/src/shared/image/medium.png';
import Telegram from '../src/src/shared/image/telegram.png';
import Weibo from '../src/src/shared/image/weibo.png';
import Twitter from '../src/src/shared/image/twitter.png';
import '../src/src/css/style.scss';

const App = () => {
  const [state, setState] = useState({
    selectMliestone: 0,
  });

  async function ChangeMliestoneDot(count: number) {
    const DocumentClassName: HTMLElement = window.document.getElementById("mliestone-dot")!;
    DocumentClassName.style.backgroundColor = "#fff";
    for(var i=0; i>count; i++) {
      let DocumentElement: HTMLElement = window.document.getElementById("mliestone-" + i)!;
      DocumentElement.style.backgroundColor = "#3679b5";
    }
    // let DocumentElement: HTMLElement = window.document.getElementById("mliestone-" + count)!;
    // DocumentElement.style.backgroundColor = "#3679b5";
    setState({ ...state, selectMliestone: count});
  };
  return (
    <div>
      <header className="header-container">
        <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        <nav className="header-link-wrapper">
          <p className="header-link service">
            {/* eslint-disable-next-line */}
            <a href='#service'>서비스</a>
          </p>
          <p className="header-link milestone">
            {/* eslint-disable-next-line */}
            <a href='#'>마일스톤</a>
          </p>
          <p className="header-link team">
            {/* eslint-disable-next-line */}
            <a href='#team'>팀</a>
          </p>
          <p className="header-link partners">
            {/* eslint-disable-next-line */}
            <a href='#partners'>협력업체</a>
          </p>
          <p className="header-link contect">
            {/* eslint-disable-next-line */}
            <a href='#contact'>문의하기</a>
          </p>
        </nav>
      </header>
      <section className="main-wrapper" id="main">
        <div className="main-text-wrapper">
          <p className="main-text">
            세상에 없던 새로운 부동산 투자
          </p>
          <img src={AppStore} className="app-store" alt="Elysia" />
          <img src={GooglePlay} className="google-play" alt="Elysia" />
        </div>
        <img src={ElysiaApp} className="elysia-app" alt="Elysia" />
      </section>
      <section className="service-wrapper contents-wrapper" id="service">
        <img src={Onboarding} className="on-boarding" alt="Elysia" />
        <div className="service-icon-wrapper">
          <div className="service-icon-bar" />
          <img src={OnboardingOn} className="service-on-boarding service-square" alt="Elysia" />
          <img src={ElysiaOff} className="service-elysia service-square" alt="Elysia" />
          <img src={DefiOff} className="service-defi service-square" alt="Elysia" />
        </div>
        <div className="service-text-wrapper">
          <div className="service-onboarding-wrapper service-text">
            <p className="service-header-text">ONBOARDING</p>
            <p className="service-text">당신의 부동산 자산을 부동산 토큰으로 바꾸세요</p>
          </div>
          <div className="service-elysia-wrapper service-text">
            <p className="service-header-text">ELYSIA 2.0</p>
            <p className="service-text">당신의 부동산 자산을 부동산 토큰으로 바꾸세요</p>
          </div>
          <div className="service-defi-wrapper service-text">
            <p className="service-header-text">DEFI</p>
            <p className="service-text">당신의 부동산 자산을 부동산 토큰으로 바꾸세요</p>
          </div>
        </div>
      </section>
      <section className="mliestone-wrapper contents-wrapper" id="milestone">
        <div className="mliestone-timeline">
          <div className="mliestone-dot-wrapper">
            <div className="mliestone-dot" id="mliestone-1" onClick={() => ChangeMliestoneDot(1)}>
              <span />
              <p>12312321</p>
            </div>
            <div className="mliestone-dot" id="mliestone-2" onClick={() => ChangeMliestoneDot(2)}>
              <span />
              <p>12312321</p>
            </div>
            <div className="mliestone-dot" id="mliestone-3" onClick={() => ChangeMliestoneDot(3)}>
              <span />
              <p>12312321</p>
            </div>
            <div className="mliestone-dot" id="mliestone-4" onClick={() => ChangeMliestoneDot(4)}>
              <span />
              <p>12312321</p>
            </div>
            <div className="mliestone-line" />
          </div>
        </div>
      </section>
      <section className="team-wrapper contents-wrapper" id="team">
        <p className="team-header-text header-text">TEAM</p>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>임정건</h3>
          <p>CEO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>차원준</h3>
          <p>CSO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>김윤수</h3>
          <p>CMO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>서동욱</h3>
          <p>CTO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>배현오</h3>
          <p>Developer</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>한희수</h3>
          <p>Designer</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>풍샤량</h3>
          <p>CHINA Marketing</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>이재곱</h3>
          <p>Bees' Compony CEO</p>
        </div>
      </section>
      <section className="partners-wrapper contents-wrapper" id="partners">
        <p className="pertners-header-text header-text">PARTNERS</p>
        <div className="partners-container">
          <img src={Iconloop} className="partners-picture" alt="Elysia" />
          <img src={Hexlant} className="partners-picture" alt="Elysia" />
          <img src={Bishijie} className="partners-picture" alt="Elysia" />
          <img src={Xangle} className="partners-picture" alt="Elysia" />
          <img src={Chainlink} className="partners-picture" alt="Elysia" />
        </div>
      </section>
      <section className="contact-wrapper contents-wrapper" id="contact">
        <p className="contact-header-text">Didn’t find what you’re looking for?</p>
        <p className="contact-text">We’re in the business of helping our customers stay ahead. We’d love to hear from you.</p>
        <button className="contact-button">CONTACT</button>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="footer-container-left">
              <div className="footer-container-logo">
                <img src={ElysiaLogoWhite} className="elysia-logo-white" alt="Elysia"/>
                <p className="elysia-logo-text">ELYSIA PLATFORM PTE. LTD</p>
              </div>
              <div className="footer-container-contact">
                <p className="footer-header-text">
                  CONTACT
                </p>
                <p className="footer-text">
                  cs@elysia.land
                </p>
                <p className="footer-header-text">
                  WhitePaper (old)
                </p>
                <p className="footer-text">
                  https://주소
                </p>
              </div>
            </div>
            <div className="footer-container-right">
              <p className="footer-header-text">
                COMMUNITY
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
            ELYSIA ⓒ 2018-2020. All rights reserved.
          </p>
          <p className="footer-privacy-policy">
            Privacy Policy
          </p>
          <p className="footer-terms-fo-service">
            Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
