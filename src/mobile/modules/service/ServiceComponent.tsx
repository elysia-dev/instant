import React, { useState, useEffect, useRef, Component } from 'react';
import Onboarding from '../../../shared/image/onboarding.png';
import Defi from '../../../shared/image/Defi.png';
import ElysiaMobile from '../../../shared/image/elysia_mobile.png';
import ElysiaIcon from '../../../shared/image/square-elysia-off.png';
import DefiIcon from '../../../shared/image/square-defi-off.png';
import OnboardingIcon from '../../../shared/image/square-onboarding-off.png';
import '../../css/mobileStyle.scss';
import i18n from '../../../i18n/i18n';
import Slider from './Slider';


export class ServiceComponent extends Component {

  ReturnImage = (imgNumber: number) => {
    switch (imgNumber) {
      case 0: return Onboarding;
      case 1: return ElysiaMobile;
      default: return Defi;
    }
  };
  
  render() {
    return (
      <>
        <img src={ElysiaIcon} className="service-square" alt="Elysia" />
        <p className="service-header-label">
          {i18n.t('service.onboarding')}
        </p>
        <p className="service-label">
          {i18n.t('service.onboarding_label')}
        </p>
        <Slider />
        {/* <div className="on-boarding">
          <img src={Onboarding} className="service-image" alt="Elysia" style={{ opacity: (this.state.Focusing === 1 ? 1 : 0) }}/>
          <img src={ElysiaMobile} className="service-image" alt="Elysia" style={{ left: "20%", top: "-6%", opacity: (this.state.Focusing === 2 ? 1 : 0) }}/>
          <img src={Defi} className="service-image" alt="Elysia" style={{ opacity: (this.state.Focusing === 3 ? 1 : 0) }}/>
        </div>
        <div className="service-icon-wrapper">
          <div style={{position: "relative", cursor: "pointer"}} onClick={() => this.resetState(1)}>
            <img src={OnboardingOff} className="service-on-boarding service-square" alt="Elysia" />
            <img src={OnboardingOn} className="service-on-boarding service-square" alt="Elysia" style={{ position:"absolute", opacity: (this.state.Focusing === 1 ? 1 : 0) }}/>
          </div>
          <div className="service-backbar" style={{ height: 130, width: 5, backgroundColor: "#f6f6f8" }} >
            <div className="service-prograss" style={{ height: ((this.state.UpperTimers) + "%"), width: 5, backgroundColor: "#3679b5" }} />
          </div>
          <div style={{position: "relative", cursor: "pointer"}} onClick={() => this.resetState(2)}>
            <img src={ElysiaOff} className="service-on-boarding service-square" alt="Elysia" />
            <img src={ElysiaOn} className="service-on-boarding service-square" alt="Elysia" style={{ position:"absolute", opacity: (this.state.Focusing === 2 ? 1 : 0) }}/>
          </div>
          <div className="service-backbar" style={{ height: 130, width: 5, backgroundColor: "#f6f6f8" }} >
            <div className="service-prograss" style={{ height: ((this.state.LowerTimers) + "%"), width: 5, backgroundColor: "#3679b5" }} />
          </div>
          <div style={{position: "relative", cursor: "pointer"}} onClick={() => this.resetState(3)}>
            <img src={DefiOff} className="service-on-boarding service-square" alt="Elysia" />
            <img src={DefiOn} className="service-on-boarding service-square" alt="Elysia" style={{ position:"absolute", opacity: (this.state.Focusing === 3 ? 1 : 0) }}/>
          </div>
        </div>
        <div className="service-text-wrapper">
          <div className="service-onboarding-wrapper service-text">
            <p className="service-header-text" style={{ color: (this.state.Focusing === 1 ? "#3679b5" : "#2C2C2C") }} >{i18n.t('service.onboarding')}</p>
            <p className="service-text">{i18n.t('service.onboarding_label')}</p>
          </div>
          <div className="service-elysia-wrapper service-text">
            <p className="service-header-text" style={{ color: (this.state.Focusing === 2 ? "#3679b5" : "#2C2C2C") }} >{i18n.t('service.elysia_app')}</p>
            <p className="service-text">{i18n.t('service.elysia_app_label')}</p>
          </div>
          <div className="service-defi-wrapper service-text">
            <p className="service-header-text" style={{ color: (this.state.Focusing === 3 ? "#3679b5" : "#2C2C2C") }} >{i18n.t('service.defi')}</p>
            <p className="service-text">{i18n.t('service.defi_label')}</p>
          </div>
        </div> */}

      </>
    );
  }
}