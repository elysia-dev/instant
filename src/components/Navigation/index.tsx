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

  const ScrollAnimationDefaultMargin = 100;
  let ScrollAnimationTriggerMargin = 0;
  let ScrollAnimationTriggerHeight = 0;
  const ScrollAnimationElementList = document.querySelectorAll(
    ".sa"
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
    <nav
      className="navigation"
      style={{
        backgroundColor: `${scrollTop >= 100 ? "#FFFFFF" : "transparent"}`
      }}
    >
      <div className="navigation__link__container">
        <img
          className="elysia-logo"
          onClick={() => pageToScroll("top")}
          src={scrollTop >= 100 ? ElysiaLogo : ElysiaWhiteLogo}
        />
        <div className="navigation__link__wrapper">
          {[
            ["service", t("navigation.service")],
            ["portfolio", t("navigation.portfolio")],
            ["partners", t("navigation.partners")],
            ["team", t("navigation.team")],
            ["contact", t("navigation.contact")]
          ].map((data, index) => {
            return (
              <p
                className="navigation__link"
                onClick={() => pageToScroll(data[0])}
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
                key={index}
              >
                {data[1]}
              </p>
            )
          })}
          {[
            ["https://elysia.gitbook.io/elysia-guide/", t("navigation.helpdesk")],
            ["https://elyfi.world", t("navigation.elyfi")]
          ].map((data, index) => {
            return (
              <a
                className="navigation__link bold"
                href={data[0]}
                target="_blank"
                style={{ color: `${scrollTop >= 100 ? "#333333" : "#FFFFFF"}` }}
                key={index}
              >
                {data[1]}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation;