import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import pageToScroll from "src/pages/utiles/pageToScroll";
import ElysiaLogo from "src/assets/image/Elysia_Logo.png";
import ElysiaWhiteLogo from "src/assets/image/Elysia_Logo_White.png";


const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  
  return (
    <header
      className="main__gnb"
      style={{
        backgroundColor: `${scrollTop >= 100 ? "#FFFFFF" : "transparent"}`
      }}
    >
      <nav className="main__gnb__link-container">
        <figure
          className="elysia-logo"
          onClick={() => pageToScroll("top")}
          style={{
            backgroundImage: `url(${
              scrollTop >= 100 ? ElysiaLogo : ElysiaWhiteLogo
            })`
          }}
        />
        <div className="main__gnb__link-wrapper">
          <a
            className="main__gnb__link"
            href="#service"
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.service")}
          </a>
          <a
            className="main__gnb__link"
            href="#portfolio"
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.portfolio")}
          </a>
          <p
            className="main__gnb__link"
            onClick={() => pageToScroll("partners")}
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.partners")}
          </p>
          <p
            className="main__gnb__link"
            onClick={() => pageToScroll("team")}
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.team")}
          </p>
          <p
            className="main__gnb__link"
            onClick={() => pageToScroll("contact")}
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.contact")}
          </p>
          <a
            className="main__gnb__link main__gnb--bold"
            href="https://elysia.gitbook.io/elysia-guide/"
            target="_blank"
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.helpdesk")}
          </a>
          <a
            className="main__gnb__link main__gnb--bold"
            href="https://elyfi.world"
            target="_blank"
            style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
          >
            {t("navigation.elyfi")}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navigation;