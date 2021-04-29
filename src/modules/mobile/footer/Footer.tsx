import ElysiaLogoWhite from '../../../shared/image/Elysia_Logo_White.png';
import Blog from '../../../shared/image/blog.png';
import Fackbook from '../../../shared/image/facebook.png';
import Github from '../../../shared/image/github.png';
import Kakaotalk from '../../../shared/image/kakaotalk.png';
import Medium from '../../../shared/image/medium.png';
import Telegram from '../../../shared/image/telegram.png';
import Weibo from '../../../shared/image/weibo.png';
import Twitter from '../../../shared/image/twitter.png';
import React, { FunctionComponent } from 'react';
import '../css/mobileStyle.scss';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: FunctionComponent = () => {
  const history = useHistory();
  const { i18n } = useTranslation();

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-container">
        <div className="mobile-footer-wrapper">
          <div className="mobile-footer-container-contact">
            <p className="mobile-footer-header-text">
              {i18n.t("footer.contact")}
            </p>
            <p className="mobile-footer-text">
              {i18n.t("footer.email")}
            </p>
            <p className="mobile-footer-header-text" style={{ marginTop: 10 }}>
              {i18n.t("footer.contract")}
              </p>
            <a className="mobile-footer-text" target="_blank" rel="noreferrer" href='https://etherscan.io/token/0x2781246fe707bb15cee3e5ea354e2154a2877b16'>
              {i18n.t("footer.el")}
            </a>
          </div>

          <p className="mobile-footer-header-text">
            {i18n.t("footer.community")}
          </p>
          <div className="mobile-footer-container-icon">
            <div>
              <a className="mobile-footer-icon" href="https://twitter.com/Elysia_HQ">
                <img src={Twitter} className="mobile-footer-icon" alt="Elysia" />
              </a>
              <a className="mobile-footer-icon" href="https://open.kakao.com/o/gUpSOwkb">
                <img src={Kakaotalk} className="mobile-footer-icon" alt="Elysia" />
              </a>
              <a className="mobile-footer-icon" href="https://t.me/elysia_official">
                <img src={Telegram} className="mobile-footer-icon" alt="Elysia" />
              </a>
              <a className="mobile-footer-icon" href="https://github.com/elysia-dev">
                <img src={Github} className="mobile-footer-icon" alt="Elysia" />
              </a>
            </div>
            <div>
              <a className="mobile-footer-icon" href="https://www.facebook.com/ElysiaHQ">
                <img src={Fackbook} className="mobile-footer-icon" alt="Elysia" />
              </a>
              <a className="mobile-footer-icon" href="https://www.weibo.com/u/7449962304">
                <img src={Weibo} className="mobile-footer-icon" alt="Elysia" />
              </a>
              <a className="mobile-footer-icon" href="https://medium.com/@ELYSIA_HQ">
                <img src={Medium} className="mobile-footer-icon" alt="Elysia" />
              </a>
              <a className="mobile-footer-icon" href="https://blog.naver.com/elysia_platform">
                <img src={Blog} className="mobile-footer-icon" alt="Elysia" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-footer-lower">
        <div className="mobile-footer-container-logo">
          <img src={ElysiaLogoWhite} className="mobile-elysia-logo-white" alt="Elysia" onClick={() => { history.push('/') }} />
          <p className="mobile-elysia-logo-text">{i18n.t("footer.logo_label")}</p>
        </div>
        <div className="mobile-footer-link-wrapper">
          <p className="mobile-footer-privacy-policy mobile-footer-link" onClick={() => history.push("/privacyPolicy")}>
            Privacy Policy
          </p>
          <p className="mobile-footer-terms-fo-service mobile-footer-link" onClick={() => history.push("/disclaimer")}>
            Disclaimer
          </p>
          <p className="mobile-footer-terms-fo-service mobile-footer-link"
            onClick={() => {
              window.location.replace("https://drive.google.com/file/d/1Sxu8-jIIJlVUZoVhtX4QG8kS73vXr3Cs/view")
            }}>
            Whitepaper
          </p>
        </div>
        <p className="mobile-footer-copyright">
          {i18n.t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

