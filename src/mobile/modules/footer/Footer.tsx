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
import '../../css/mobileStyle.scss';
import i18n from '../../../i18n/i18n';
import { useHistory } from 'react-router-dom';

const Footer: FunctionComponent = () => {
  const history = useHistory();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-container-contact">
            <p className="footer-header-text">
              {i18n.t("footer.contact")}
            </p>
            <p className="footer-text">
              {i18n.t("footer.email")}
            </p>
            {/* <p className="footer-header-text">
              {i18n.t("footer.whitepaper")}
            </p>
            <p className="footer-text">
              <a href="https://drive.google.com/file/d/1Sxu8-jIIJlVUZoVhtX4QG8kS73vXr3Cs/view" style={{ color: "#fff" }}>
                https://drive.google.com/file/d/1Sxu8-jIIJlVUZoVhtX4QG8kS73vXr3Cs/view
              </a>
            </p> */}
            <p className="footer-header-text">
              {i18n.t("footer.language")}
            </p>
            <p className="footer-text">
              {i18n.t("footer.language_en")}
            </p>
            <p className="footer-text">
              {i18n.t("footer.language_ko")}
            </p>
            <p className="footer-text">
              {i18n.t("footer.language_zh-hans")}
            </p>
          </div>
          
          <p className="footer-header-text">
              {i18n.t("footer.community")}
            </p>
          <div className="footer-container-icon">
            <div>
              <a className="footer-icon" href="https://twitter.com/Elysia_HQ">
                <img src={Twitter} className="footer-icon" alt="Elysia" />
              </a>
              <a className="footer-icon" href="https://open.kakao.com/o/gUpSOwkb">
                <img src={Kakaotalk} className="footer-icon" alt="Elysia" />
              </a>
              <a className="footer-icon" href="https://t.me/elysia_official">
                <img src={Telegram} className="footer-icon" alt="Elysia" />
              </a>
              <a className="footer-icon" href="https://github.com/elysia-land?tab=repositories">
                <img src={Github} className="footer-icon" alt="Elysia" />
              </a>
            </div>
            <div>
              <a className="footer-icon" href="https://www.facebook.com/ElysiaHQ">
                <img src={Fackbook} className="footer-icon" alt="Elysia" />
              </a>
              <a className="footer-icon" href="https://www.weibo.com/u/7449962304">
                <img src={Weibo} className="footer-icon" alt="Elysia" />
              </a>
              <a className="footer-icon" href="https://medium.com/@ELYSIA_HQ">
                <img src={Medium} className="footer-icon" alt="Elysia" />
              </a>
              <a className="footer-icon" href="https://blog.naver.com/elysia_platform">
                <img src={Blog} className="footer-icon" alt="Elysia" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <div className="footer-container-logo">
          <img src={ElysiaLogoWhite} className="elysia-logo-white" alt="Elysia" onClick={() => { history.push('/') }} />
          <p className="elysia-logo-text">{i18n.t("footer.logo_label")}</p>
        </div>
        <div className="footer-link-wrapper">
          <div>
            <p className="footer-privacy-policy footer-link" onClick={() => history.push("/privacyPolicy")}>
              Privacy Policy
            </p>
            <p className="footer-terms-fo-service footer-link" onClick={() => history.push("/userAgreement")}>
              User Agreement
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p className="footer-terms-fo-service footer-link" onClick={() => history.push("/disclaimer")}>
              Disclaimer
            </p>
            <p className="footer-terms-fo-service footer-link" onClick={() => history.push("/userAgreement")}>
              Whitepaper
            </p>
          </div>
        </div>
        <p className="footer-copyright">
          {i18n.t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

