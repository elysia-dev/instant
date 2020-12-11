import React, { useEffect, useState } from 'react';
import Onboarding from '../../shared/image/onboarding.png';
import Defi from '../../shared/image/Defi.png';
import ElysiaMobile from '../../shared/image/elysia_mobile.png';
import ElysiaOn from '../../shared/image/square-elysia-on.png';
import DefiOn from '../../shared/image/square-defi-on.png';
import OnboardingOn from '../../shared/image/square-onboarding-on.png';
import ElysiaOff from '../../shared/image/square-elysia-off.png';
import DefiOff from '../../shared/image/square-defi-off.png';
import OnboardingOff from '../../shared/image/square-onboarding-off.png';
import '../../css/style.scss';
import { useTranslation } from 'react-i18next';

function ServiceComponent() {
  const [counter, setCounter] = useState<number>(0);
  const [stage, setStage] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (reset) {
      setCounter(0);
      setReset(false);
      return;
    }

    if (counter === 100) {
      setStage((stage + 1) % 3);
    }

    setTimeout(() => {
      setCounter((counter + 1) % 101)
    }, 40)
  }, [counter])

  const resetState = (stage: number) => {
    setReset(true);
    setTimeout(() => {
      setStage(stage);
    }, 40)
  }

  return (
    <>
      <div className="on-boarding">
        <img src={Onboarding} className="service-image" alt="Elysia" style={{ opacity: (stage === 0 ? 1 : 0) }} />
        <img src={ElysiaMobile} className="service-image" alt="Elysia" style={{ left: "20%", top: "-6%", opacity: (stage === 1 ? 1 : 0) }} />
        <img src={Defi} className="service-image" alt="Elysia" style={{ opacity: (stage === 2 ? 1 : 0) }} />
      </div>
      <div className="service-icon-wrapper">
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => resetState(0)}>
          <img src={OnboardingOff} className="service-on-boarding service-square" alt="Elysia" />
          <img src={OnboardingOn} className="service-on-boarding service-square" alt="Elysia" style={{ position: "absolute", opacity: (stage === 0 ? 1 : 0) }} />
        </div>
        <div className="service-backbar" style={{ height: 130, width: 5, backgroundColor: "#f6f6f8" }} >
          <div className="service-prograss" style={{ height: ((stage === 0 ? counter : 0) + "%"), width: 5, backgroundColor: "#3679b5" }} />
        </div>
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => resetState(1)}>
          <img src={ElysiaOff} className="service-on-boarding service-square" alt="Elysia" />
          <img src={ElysiaOn} className="service-on-boarding service-square" alt="Elysia" style={{ position: "absolute", opacity: (stage === 1 ? 1 : 0) }} />
        </div>
        <div className="service-backbar" style={{ height: 130, width: 5, backgroundColor: "#f6f6f8" }} >
          <div className="service-prograss" style={{ height: ((stage === 1 ? counter : 0) + "%"), width: 5, backgroundColor: "#3679b5" }} />
        </div>
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => resetState(2)}>
          <img src={DefiOff} className="service-on-boarding service-square" alt="Elysia" />
          <img src={DefiOn} className="service-on-boarding service-square" alt="Elysia" style={{ position: "absolute", opacity: (stage === 2 ? 1 : 0) }} />
        </div>
      </div>
      <div className="service-text-wrapper">
        <div className="service-onboarding-wrapper service-text">
          <p className="service-header-text" style={{ color: (stage === 0 ? "#3679b5" : "#2C2C2C") }} >{t('service.onboarding')}</p>
          <p className="service-text">{t('service.onboarding_label')}</p>
        </div>
        <div className="service-elysia-wrapper service-text">
          <p className="service-header-text" style={{ color: (stage === 1 ? "#3679b5" : "#2C2C2C") }} >{t('service.elysia_app')}</p>
          <p className="service-text">{t('service.elysia_app_label')}</p>
        </div>
        <div className="service-defi-wrapper service-text">
          <p className="service-header-text" style={{ color: (stage === 2 ? "#3679b5" : "#2C2C2C") }} >{t('service.defi')}</p>
          <p className="service-text">{t('service.defi_label')}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent