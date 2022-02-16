import ElysiaLogoWhite from '../../../shared/image/Elysia_Logo_White.png';
import Blog from '../../../shared/image/blog.png';
import Fackbook from '../../../shared/image/facebook.png';
import Github from '../../../shared/image/github.png';
import Kakaotalk from '../../../shared/image/kakaotalk.png';
import Medium from '../../../shared/image/medium.png';
import Telegram from '../../../shared/image/telegram.png';
import Weibo from '../../../shared/image/weibo.png';
import Twitter from '../../../shared/image/twitter.png';
import { FunctionComponent } from 'react';
import '../css/style.scss';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: FunctionComponent = () => {
  const history = useHistory();
  const { i18n, t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__wrapper">
            <div className="footer__container--left">
              <div className="footer__logo__wrapper">
                <img src={ElysiaLogoWhite} style={{ cursor: "pointer" }} className="elysia-white-logo" alt="Elysia" onClick={() => { history.push('/') }} />
                <p className="footer__logo-text">{t("footer.logo_label")}</p>
              </div>
              <div className="footer__contact-container" style={{ marginLeft: "auto" }}>
                <p className="footer__header-text">
                  {t("footer.contact")}
                </p>
                <p className="footer__text">
                  {t("footer.email")}
                </p>
                <p className="footer__header-text" style={{ marginTop: 10 }}>
                  {t("footer.contract")}
                </p>
                <a className="footer__text" target="_blank" rel="noreferrer" href='https://etherscan.io/token/0x2781246fe707bb15cee3e5ea354e2154a2877b16'>
                  {t("footer.el")}
                </a>
                <a className="footer__text" target="_blank" rel="noreferrer" href='https://etherscan.io/token/0x4dA34f8264CB33A5c9F17081B9EF5Ff6091116f4'>
                  {t("footer.elfi")}
                </a>
              </div>
              <div className="footer__contact-container" style={{ marginLeft: 100 }}>
                <p className="footer__header-text">
                  {t("footer.language")}
                </p>
                <p className="footer__text" onClick={() => { i18n.changeLanguage("en") }}>
                  English
                </p>
                {/* <p className="footer__text" onClick={() => { i18n.changeLanguage("zhHans") }}>
                  中文
                </p> */}
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
                <img src={Twitter} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://open.kakao.com/o/gUpSOwkb">
                <img src={Kakaotalk} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://t.me/elysia_official">
                <img src={Telegram} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://github.com/elysia-dev">
                <img src={Github} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://www.facebook.com/ElysiaHQ">
                <img src={Fackbook} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://www.weibo.com/u/7449962304">
                <img src={Weibo} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://medium.com/@ELYSIA_HQ">
                <img src={Medium} className="footer__icon" alt="Elysia" />
              </a>
              <a href="https://blog.naver.com/elysia_platform">
                <img src={Blog} className="footer__icon" alt="Elysia" />
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
              window.location.replace("https://drive.google.com/file/d/16ey8rTnm_1H9zqstKcQK0EzA47h-UDMo/view?usp=sharing")
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

