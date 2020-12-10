import React, { useState, useEffect, useRef, Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import ReactDOM from "react-dom";
import ElysiaLogo from '../src/shared/image/Elysia_Logo.png';
import AppStore from '../src/shared/image/app_store.png';
import GooglePlay from '../src/shared/image/google_play.png';
import ElysiaApp from '../src/shared/image/Elysia_app.png';
import Onboarding from '../src/shared/image/onboarding.png';
import Defi from '../src/shared/image/Defi.png';
import ElysiaMobile from '../src/shared/image/elysia_mobile.png';
import ElysiaOn from '../src/shared/image/square-elysia-on.png';
import DefiOn from '../src/shared/image/square-defi-on.png';
import OnboardingOn from '../src/shared/image/square-onboarding-on.png';
import ElysiaOff from '../src/shared/image/square-elysia-off.png';
import DefiOff from '../src/shared/image/square-defi-off.png';
import OnboardingOff from '../src/shared/image/square-onboarding-off.png';
import Temp from '../src/shared/image/black.png';
import Iconloop from '../src/shared/image/iconloop.png';
import Hexlant from '../src/shared/image/hexlant.png';
import Bishijie from '../src/shared/image/bishijie.png';
import Xangle from '../src/shared/image/xangle.png';
import Chainlink from '../src/shared/image/chainlink.png';
import ElysiaLogoWhite from '../src/shared/image/Elysia_Logo_White.png';
import Blog from '../src/shared/image/blog.png';
import Fackbook from '../src/shared/image/facebook.png';
import Github from '../src/shared/image/github.png';
import Kakaotalk from '../src/shared/image/kakaotalk.png';
import Medium from '../src/shared/image/medium.png';
import Telegram from '../src/shared/image/telegram.png';
import Weibo from '../src/shared/image/weibo.png';
import Twitter from '../src/shared/image/twitter.png';
import '../src/css/style.scss';

const App = () => {
  const [state, setState] = useState({
    selectMliestone: -1,
    totalMliestoneArray: 15,
  });
  const Service = React.createRef<HTMLDivElement>();
  const Milestone = React.createRef<HTMLDivElement>();
  const Team = React.createRef<HTMLDivElement>();
  const Partners = React.createRef<HTMLDivElement>();
  const Contact = React.createRef<HTMLDivElement>();
  const Top = React.createRef<HTMLDivElement>();

  const Scroll = (ref: any) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  const Timeline = [
    "2018.09",
    "2018.09",
    "2018.10",
    "2019.03",
    "2019.04",
    "2020.03",
    "2020.05",
    "2020.08",
    "2020.10",
    "2020.11",
    "2020.12",
    "2021 Q1",
    "2021 Q2",
    "2021 Q3",
    "2021 Q4",
  ]
  const TimelineContant = [
    "법인 설립",
    "코엑스 부동산 블록체인 박람회 출전",
    "첫 상품 완판",
    "크립토 펀드 투자 유치",
    "농협 디지털 챌린지 1기 선정",
    "BITHUMB 거래소 상장",
    "BOBOO 거래소 상장 및 비씨제 협약",
    "안주커 협약",
    "ELYSIA 2.0 앱 출시",
    "GOPAX 거래소 상장",
    '- 자산 유동화 프로토콜 개선\n- 상품 등록 자율화\n- Tx 기반 보유 자산 및 수익 UI 개편',
    "- 싱가포르 MAS 라이센스 취득\n- 해외 부동산 상품 등록\n- 부동산 상품 50 개 이상 등록 (목표)",
    "- 부동산 로보 어드바이저 베타 테스트 (시세 오라클)\n- 미국 Reg.D license 취득",
    "- DEX기반 부동산 상품 거래 플랫폼 출시\n- B2B, B2P, P2P 거래 자동화",
    "- 엘리시아 DEX",
  ]
  
  const MliestoneSelected = {
    width: 24,
    height: 24,
    top: -12,
    position: "relative",
    backgroundColor: "#3679b5",
    borderRadius: 5,
    boxShadow: "0px 3px 6px #3679b5"
  }
  const MliestoneActivation = {
    width: 12,
    height: 12,
    backgroundColor: "#3679b5",
    borderRadius: 2,
    boxShadow: "0px 6px 10px #2498ff9a"
  }

  async function ChangeMliestoneDot(count: number) {
    // for(var i=0; i>count; i++) {
    //   let DocumentElement: HTMLElement = window.document.getElementById("mliestone-" + i)!;
    //   DocumentElement.style.backgroundColor = "#3679b5";
    // }
    setState({ ...state, selectMliestone: count});
    console.log(state.selectMliestone);
  }
  const TimeLineListing = Array(state.totalMliestoneArray).fill(0).map((_x, index) => {
    return (
      <>
        <div className={"mliestone-dot " + (state.selectMliestone === index ? 'mliestone-selected' : '')} id={"mliestone-" + index} style={{
            ...(state.selectMliestone === index ?
              MliestoneSelected : 
            state.selectMliestone > index &&
              MliestoneActivation)
            }} onClick={() => ChangeMliestoneDot(index)}>
          <p className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')}>{Timeline[index]}</p>
          <h1 className={"mliestone-" + (index % 2 === 0 ? 'upper-text' : 'lower-text')} style={{ ...(state.selectMliestone === index ? {display: "block"} : {display: "none"} )}}>{TimelineContant[index]}</h1>
        </div>
        
      </>
    );
  });
  
  interface Props {
    Timer: number
  }
  interface State {
    UpperTimers: number;
    LowerTimers: number;
    Focusing: number;
  }
  class ServiceComponent extends Component<Props, State> {
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
              <p className="service-header-text" style={{ color: (this.state.Focusing === 1 ? "#3679b5" : "#000000") }} >ONBOARDING</p>
              <p className="service-text">당신의 부동산 자산을 부동산 토큰으로 바꾸세요</p>
            </div>
            <div className="service-elysia-wrapper service-text">
              <p className="service-header-text" style={{ color: (this.state.Focusing === 2 ? "#3679b5" : "#000000") }} >ELYSIA 2.0</p>
              <p className="service-text">당신의 부동산 자산을 부동산 토큰으로 바꾸세요</p>
            </div>
            <div className="service-defi-wrapper service-text">
              <p className="service-header-text" style={{ color: (this.state.Focusing === 3 ? "#3679b5" : "#000000") }} >DEFI</p>
              <p className="service-text">당신의 부동산 자산을 부동산 토큰으로 바꾸세요</p>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="elysia" ref={Top}>
      <header className="header-container">
        <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        <nav className="header-link-wrapper">
          <p className="header-link service">
            <a onClick={() => Scroll(Service)}>서비스</a>
          </p>
          <p className="header-link milestone">
            <a onClick={() => Scroll(Milestone)}>마일스톤</a>
          </p>
          <p className="header-link team">
            <a onClick={() => Scroll(Team)}>팀</a>
          </p>
          <p className="header-link partners">
            <a onClick={() => Scroll(Partners)}>협력업체</a>
          </p>
          <p className="header-link contect">
            <a onClick={() => Scroll(Contact)}>문의하기</a>
          </p>
        </nav>
      </header>
      <button className="top-botton" title="Top" id="top-button" onClick={() => Scroll(Top)}>▲</button>
      <section className="main-wrapper" id="main">
        <div className="main-text-wrapper">
          <p className="main-text">
            세상에 없던 새로운 부동산 투자
          </p>
          <img src={AppStore} className="app-store" alt="Elysia" />
          <img src={GooglePlay} className="google-play" alt="Elysia" />
        </div>
        <img src={ElysiaApp} className="elysia-app" alt="Elysia" />
      </section>
      <section className="service-wrapper contents-wrapper" id="service" ref={Service}>
        <ServiceComponent Timer={4000} />
      </section>
      <section className="mliestone-wrapper contents-wrapper" id="milestone" ref={Milestone}> 
        <div>
          <p className="mliestone-header-text header-text">MILESTONE</p>
          <div className="mliestone-timeline" style={{ ...(state.totalMliestoneArray === (state.selectMliestone + 1) ? { backgroundColor: "#3679b5" } : { backgroundColor: "#cccccc" }) }}>
            <div className="mliestone-dot-wrapper">
              <div className="mliestone-line" style={{ width: (1190/(state.totalMliestoneArray-1)) * state.selectMliestone }} />
              {TimeLineListing}
            </div>
          </div>
        </div>
      </section>
      <section className="team-wrapper contents-wrapper" id="team" ref={Team}>
        <p className="team-header-text header-text">TEAM</p>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>임정건</h3>
          <p>CEO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>차원준</h3>
          <p>CSO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>김윤수</h3>
          <p>CMO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>서동욱</h3>
          <p>CTO</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>배현오</h3>
          <p>Developer</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>한희수</h3>
          <p>Designer</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>풍샤량</h3>
          <p>CHINA Marketing</p>
        </div>
        <div className="team-info-wrapper">
          <img src={Temp} className="team-picture" alt="Elysia" />
          <h3>이재곱</h3>
          <p>Bees' Compony CEO</p>
        </div>
      </section>
      <section className="partners-wrapper contents-wrapper" id="partners" ref={Partners}>
        <p className="pertners-header-text header-text">PARTNERS</p>
        <div className="partners-container">
          <img src={Iconloop} className="partners-picture" alt="Elysia" />
          <img src={Hexlant} className="partners-picture" alt="Elysia" />
          <img src={Bishijie} className="partners-picture" alt="Elysia" />
          <img src={Xangle} className="partners-picture" alt="Elysia" />
          <img src={Chainlink} className="partners-picture" alt="Elysia" />
        </div>
      </section>
      <section className="contact-wrapper contents-wrapper" id="contact" ref={Contact}>
        <p className="contact-header-text">Didn’t find what you’re looking for?</p>
        <p className="contact-text">We’re in the business of helping our customers stay ahead. We’d love to hear from you.</p>
        <button className="contact-button">CONTACT</button>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-wrapper">
            <div className="footer-container-left">
              <div className="footer-container-logo">
                <img src={ElysiaLogoWhite} className="elysia-logo-white" alt="Elysia"/>
                <p className="elysia-logo-text">ELYSIA PLATFORM PTE. LTD</p>
              </div>
              <div className="footer-container-contact">
                <p className="footer-header-text">
                  CONTACT
                </p>
                <p className="footer-text">
                  cs@elysia.land
                </p>
                <p className="footer-header-text">
                  WhitePaper (old)
                </p>
                <p className="footer-text">
                  https://주소
                </p>
              </div>
            </div>
            <div className="footer-container-right">
              <p className="footer-header-text">
                COMMUNITY
              </p>
              <img src={Twitter} className="footer-icon" alt="Elysia"/>
              <img src={Kakaotalk} className="footer-icon" alt="Elysia"/>
              <img src={Telegram} className="footer-icon" alt="Elysia"/>
              <img src={Github} className="footer-icon" alt="Elysia"/>
              <img src={Fackbook} className="footer-icon" alt="Elysia"/>
              <img src={Weibo} className="footer-icon" alt="Elysia"/>
              <img src={Medium} className="footer-icon" alt="Elysia"/>
              <img src={Blog} className="footer-icon" alt="Elysia"/>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <p className="footer-copyright">
            ELYSIA ⓒ 2018-2020. All rights reserved.
          </p>
          <p className="footer-privacy-policy">
            Privacy Policy
          </p>
          <p className="footer-terms-fo-service">
            Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
