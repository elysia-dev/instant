import React, { useEffect, useState } from 'react';
import Onboarding from '../../shared/image/onboarding@2x.png';
import Defi from '../../shared/image/Defi@2x.png';
import ElysiaMobile from '../../shared/image/elysia_mobile@2x.png';
import ElysiaOn from '../../shared/image/square-elysia-on@2x.png';
import DefiOn from '../../shared/image/square-defi-on@2x.png';
import OnboardingOn from '../../shared/image/square-onboarding-on@2x.png';
import ElysiaOff from '../../shared/image/square-elysia-off@2x.png';
import DefiOff from '../../shared/image/square-defi-off@2x.png';
import OnboardingOff from '../../shared/image/square-onboarding-off@2x.png';
import '../../css/style.scss';
import { useTranslation } from 'react-i18next';

function ServiceComponent() {
  const [counter, setCounter] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter((counter + 1) % 300)
    }, 40)

    return () => {
      clearTimeout(timer)
    }
  }, [counter])

  const stage = Math.floor(counter / 100);

  return (
    <>
      <div className="service__image-wrapper">
        <figure className={stage === 1 ? "service__image--moblie" : "service__image"} 
          style={{ backgroundImage: `url(${
            stage === 0 ? Onboarding :
              stage === 1 ? ElysiaMobile : Defi
          })` }}/>
      </div>
      <div className="service__icon-container">
        <div className="service__icon-wrapper" onClick={() => setCounter(0)}>
          <figure className="service__square" style={{ backgroundImage: `url(${OnboardingOff})` }}/>
          <figure className="service__square" style={{ backgroundImage: `url(${OnboardingOn})`, position: "absolute", opacity: (stage === 0 ? 1 : 0) }}/>
        </div>
        <div className="service__backbar">
          <div className="service__backbar--prograss" style={{ height: ((stage === 0 ? counter : 0) + "%") }} />
        </div>
        <div className="service__icon-wrapper" onClick={() => setCounter(100)}>
          <figure className="service__square" style={{ backgroundImage: `url(${ElysiaOff})` }}/>
          <figure className="service__square" style={{ backgroundImage: `url(${ElysiaOn})`, position: "absolute", opacity: (stage === 1 ? 1 : 0) }}/>
        </div>
        <div className="service__backbar">
          <div className="service__backbar--prograss" style={{ height: ((stage === 1 ? counter - 100 : 0) + "%") }} />
        </div>
        <div className="service__icon-wrapper" onClick={() => setCounter(200)}>
          <figure className="service__square" style={{ backgroundImage: `url(${DefiOff})` }}/>
          <figure className="service__square" style={{ backgroundImage: `url(${DefiOn})`, position: "absolute", opacity: (stage === 2 ? 1 : 0) }}/>
        </div>
      </div>
      <div className="service__text-container">
        <div className="service__text-wrapper">
          <p className="service__text--bold" style={{ color: (stage === 0 ? "#3679b5" : "#2C2C2C") }} >{t('service.onboarding')}</p>
          <p className="service__text">{t('service.onboarding_label')}</p>
        </div>
        <div className="service__text-wrapper">
          <p className="service__text--bold" style={{ color: (stage === 1 ? "#3679b5" : "#2C2C2C") }} >{t('service.elysia_app')}</p>
          <p className="service__text">{t('service.elysia_app_label')}</p>
        </div>
        <div className="service__text-wrapper">
          <p className="service__text--bold" style={{ color: (stage === 2 ? "#3679b5" : "#2C2C2C") }} >{t('service.defi')}</p>
          <p className="service__text">{t('service.defi_label')}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent