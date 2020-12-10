import React, { useState, useEffect, useRef, Component } from 'react';
import Onboarding from '../../shared/image/onboarding.png';
import Defi from '../../shared/image/Defi.png';
import ElysiaMobile from '../../shared/image/elysia_mobile.png';
import ElysiaOn from '../../shared/image/square-elysia-on.png';
import DefiOn from '../../shared/image/square-defi-on.png';
import OnboardingOn from '../../shared/image/square-onboarding-on.png';
import ElysiaOff from '../../shared/image/square-elysia-off.png';
import DefiOff from '../../shared/image/square-defi-off.png';
import OnboardingOff from '../../shared/image/square-onboarding-off.png';
import i18n from '../../i18n/i18n';

interface Props {
  Timer: number
}
interface State {
  UpperTimers: number;
  LowerTimers: number;
  Focusing: number;
}
export class ServiceComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      UpperTimers: 0,
      LowerTimers: 0,
      Focusing: 1,
    };
  }
  interval!: NodeJS.Timeout;
  
  componentDidMount() {
    this.interval = setInterval(() => {
      const { UpperTimers, LowerTimers, Focusing } = this.state;
      if(Focusing === 1) {
        if(UpperTimers < 100) {
          this.setState(({ UpperTimers }) => ({
            UpperTimers: UpperTimers + 1,
          }));
        }
        if (UpperTimers === 100) {
          this.setState({ UpperTimers: 0, Focusing: 2 });
        }
      }
      if (Focusing === 2) {
        if(LowerTimers < 100) {
          this.setState(({ LowerTimers }) => ({
            LowerTimers: LowerTimers + 1,
          }));
        }
        if (LowerTimers === 100) {
          this.setState({ LowerTimers: 0, Focusing: 3 });
        }
      }
      if (Focusing === 3) {
        setTimeout(() => {
          this.setState({ LowerTimers: 0, Focusing: 1 });
        }, this.props.Timer)
      }
      }, (this.props.Timer/100));
      console.log(this.state.UpperTimers)
  }
  resetState = (ClearState: number) => {
    this.setState({
      LowerTimers: 0,
      UpperTimers: 0,
      Focusing: ClearState,
    })
  }
  
  render() {
    return (
      <>
        <div className="on-boarding">
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
            <p className="service-header-text" style={{ color: (this.state.Focusing === 1 ? "#3679b5" : "#000000") }} >{i18n.t('service.onboarding')}</p>
            <p className="service-text">{i18n.t('service.onboarding_label')}</p>
          </div>
          <div className="service-elysia-wrapper service-text">
            <p className="service-header-text" style={{ color: (this.state.Focusing === 2 ? "#3679b5" : "#000000") }} >{i18n.t('service.elysia_app')}</p>
            <p className="service-text">{i18n.t('service.elysia_app_label')}</p>
          </div>
          <div className="service-defi-wrapper service-text">
            <p className="service-header-text" style={{ color: (this.state.Focusing === 3 ? "#3679b5" : "#000000") }} >{i18n.t('service.defi')}</p>
            <p className="service-text">{i18n.t('service.defi_label')}</p>
          </div>
        </div>
      </>
    );
  }
}