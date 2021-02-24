import ElysiaLogoWhite from '../../shared/image/Elysia_Logo_White.png';
import Blog from '../../shared/image/blog@2x.png';
import Fackbook from '../../shared/image/facebook@2x.png';
import Github from '../../shared/image/github@2x.png';
import Kakaotalk from '../../shared/image/kakaotalk@2x.png';
import Medium from '../../shared/image/medium@2x.png';
import Telegram from '../../shared/image/telegram@2x.png';
import Weibo from '../../shared/image/weibo@2x.png';
import Twitter from '../../shared/image/twitter@2x.png';
import FooterImg from '../../shared/image/footer.png';
import React, { FunctionComponent } from 'react';
import '../../css/style.scss';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: FunctionComponent = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <>
    <img className="footer__top-image" src={FooterImg} alt="Elysia"/>
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__container--left">
            <div className="footer__logo__wrapper">
              <figure className="elysia-white-logo" style={{ backgroundImage: `url(${ElysiaLogoWhite})` }}/>
              <p className="footer__logo-text">{t("footer.logo_label")}</p>
            </div>
            <div className="footer__contact-container" style={{ marginLeft: "auto" }}>
              <p className="footer__header-text">
                {t("footer.contact")}
              </p>
              <p className="footer__text">
                {t("footer.email")}
              </p>
            </div>
            <div className="footer__contact-container" style={{ marginLeft: 100 }}>
              <p className="footer__header-text">
                {i18n.t("footer.language")}
              </p>
              <p className="footer__text" onClick={() => { i18n.changeLanguage("en") }}>
                English
              </p>
              <p className="footer__text" onClick={() => { i18n.changeLanguage("zhHans") }}>
                中文
              </p>
              <p className="footer__text" onClick={() => { i18n.changeLanguage("ko") }}>
                한국어
              </p>
            </div>
          </div>
          <div className="footer__container--right">
            <p className="footer__header-text">
              {t("footer.community")}
            </p>
            <a href="https://twitter.com/Elysia_HQ">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Twitter})` }}/>
            </a>
            <a href="https://open.kakao.com/o/gUpSOwkb">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Kakaotalk})` }}/>
            </a>
            <a href="https://t.me/elysia_official">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Telegram})` }}/>
            </a>
            <a href="https://github.com/elysia-land?tab=repositories">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Github})` }}/>
            </a>
            <a href="https://www.facebook.com/ElysiaHQ">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Fackbook})` }}/>
            </a>
            <a href="https://www.weibo.com/u/7449962304">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Weibo})` }}/>
            </a>
            <a href="https://medium.com/@ELYSIA_HQ">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Medium})` }}/>
            </a>
            <a href="https://blog.naver.com/elysia_platform">
              <figure className="footer__icon" style={{ backgroundImage: `url(${Blog})` }}/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <p className="footer__text--copyright">
          {t("footer.copyright")}
        </p>
        <p
          className="footer__text--whitepaper"
          onClick={() => {
            window.location.replace("https://drive.google.com/file/d/1Sxu8-jIIJlVUZoVhtX4QG8kS73vXr3Cs/view")
          }}
        >
          Whitepaper
        </p>
        <p className="footer__text--privacy-policy" onClick={() => history.push("/privacyPolicy")}>
          Privacy Policy
        </p>
        <p className="footer__text--terms-fo-service" onClick={() => history.push("/disclaimer")}>
          Disclaimer
        </p>
      </div>
    </footer >
    </>
  );
}

export default Footer;

