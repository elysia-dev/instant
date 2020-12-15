import ElysiaLogoWhite from '../../shared/image/Elysia_Logo_White.png';
import Blog from '../../shared/image/blog.png';
import Fackbook from '../../shared/image/facebook.png';
import Github from '../../shared/image/github.png';
import Kakaotalk from '../../shared/image/kakaotalk.png';
import Medium from '../../shared/image/medium.png';
import Telegram from '../../shared/image/telegram.png';
import Weibo from '../../shared/image/weibo.png';
import Twitter from '../../shared/image/twitter.png';
import React, { FunctionComponent } from 'react';
import '../../css/style.scss';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: FunctionComponent = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-container-left">
            <div className="footer-container-logo">
              <img src={ElysiaLogoWhite} style={{ cursor: "pointer" }} className="elysia-logo-white" alt="Elysia" onClick={() => { history.push('/') }} />
              <p className="elysia-logo-text">{t("footer.logo_label")}</p>
            </div>
            <div className="footer-container-contact" style={{ marginLeft: "auto" }}>
              <p className="footer-header-text">
                {t("footer.contact")}
              </p>
              <p className="footer-text">
                {t("footer.email")}
              </p>
            </div>
            <div className="footer-container-contact" style={{ marginLeft: 100 }}>
              <p className="footer-header-text">
                {i18n.t("footer.language")}
              </p>
              <p className="footer-text" onClick={() => { i18n.changeLanguage("en") }}>
                English
              </p>
              <p className="footer-text" onClick={() => { i18n.changeLanguage("zhHans") }}>
                中文
              </p>
              <p className="footer-text" onClick={() => { i18n.changeLanguage("ko") }}>
                한국어
              </p>
            </div>
          </div>
          <div className="footer-container-right">
            <p className="footer-header-text">
              {t("footer.community")}
            </p>
            <a href="https://twitter.com/Elysia_HQ">
              <img src={Twitter} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://open.kakao.com/o/gUpSOwkb">
              <img src={Kakaotalk} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://t.me/elysia_official">
              <img src={Telegram} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://github.com/elysia-land?tab=repositories">
              <img src={Github} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://www.facebook.com/ElysiaHQ">
              <img src={Fackbook} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://www.weibo.com/u/7449962304">
              <img src={Weibo} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://medium.com/@ELYSIA_HQ">
              <img src={Medium} className="footer-icon" alt="Elysia" />
            </a>
            <a href="https://blog.naver.com/elysia_platform">
              <img src={Blog} className="footer-icon" alt="Elysia" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <p className="footer-copyright">
          {t("footer.copyright")}
        </p>
        <p
          className="footer-privacy-policy"
          onClick={() => {
            window.location.replace("https://drive.google.com/file/d/1Sxu8-jIIJlVUZoVhtX4QG8kS73vXr3Cs/view")
          }}
        >
          Whitepaper
        </p>
        <p className="footer-privacy-policy" onClick={() => history.push("/privacyPolicy")}>
          Privacy Policy
        </p>
        <p className="footer-terms-fo-service" onClick={() => history.push("/disclaimer")}>
          Disclaimer
        </p>
      </div>
    </footer >
  );
}

export default Footer;

