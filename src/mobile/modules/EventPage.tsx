import React from 'react';
import '../css/mobileStyle.scss';
import ElysiaLogo from '../../shared/image/Elysia_Logo.png';
import EventSlider from './slider/EventSlider';
import { Link, useHistory } from 'react-router-dom';

const EventPage = () => {
  
  const history = useHistory();
  return (
    <div className="wrapper__event--mobile">
      <header className="mobile-header-container">
        <Link to="/">
          <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
        </Link>
      </header>
      <div className="eventpage-container__moblie" style={{ width: 300, margin: '8vh auto' }}>
        <h1 className="text--header__moblie bold">엘리시아 앱 상품 출시<br />기념 이벤트</h1>
        <p className="text--header__label__moblie">
          엘리시아 모바일 전용 상품 출시를 기념하여<br />엘리시아 고객들을 대상으로<br />‘엘리시아 에셋 1호’ 증정 이벤트를 실시합니다.
        </p>
        <div className="container__building-slider__mobile">
          <EventSlider />
        </div>
        <h1 className="Text__header__mobile bold">지급방식</h1>
        <div className="Text-wrapper__mobile">
          <p className="Text__insert__mobile">경품 증여</p>
        </div>
        <h1 className="Text__header__mobile bold">부동산 정보</h1>
        <div className="Text-wrapper__mobile">
          <h1 className="Text__insert__mobile bold">주소</h1>
          <p className="Text__insert__mobile" style={{ fontSize: 12 }}>서울특별시 강남구 논현동 149-18번지 1개호실 <br/>
          <span>(* 구체적인 호수는 개인정보보호차원에서 당첨자에게만 공개됩니다.)</span></p>
          <div className="Wrapper__text-wrapper">
            <div style={{ flex: 1 }}>
              <h1 className="Text__insert__mobile bold">시세</h1>
              <p className="Text__insert__mobile">2억원</p>
            </div>
            <hr style = {{ marginRight: 26, height: 50 }} />
            <div style={{ flex: 1 }}>
              <h1 className="Text__insert__mobile bold">전세보증금</h1>
              <p className="Text__insert__mobile">1.6억원</p>
            </div>
          </div>
          <h1 className="Text__insert__mobile bold">세입자 계약기간</h1>
          <p className="Text__insert__mobile">~ 2022년 7월</p>
        </div>
        <h1 className="Text__header__mobile bold">증빙서류</h1>
        <div className="Text-wrapper__mobile">
          <h1 className="Text__insert__mobile bold">
            부동산등기부등본    
          </h1>
          <a href="https://drive.google.com/file/d/16McnIM8GQ2ugqo-5vVkJjZalVm9A72F9/view?usp=sharing">
            <p className="Text__hyperlink__mobile">
              보러가기
            </p>
          </a>
          <h1 className="Text__insert__mobile bold">
            전세계약서  
          </h1>
          <a href="https://drive.google.com/file/d/1g4xqw8eBbKC24QgXyIW_rkqaugeCh7Nk/view?usp=sharing">
            <p className="Text__hyperlink__mobile">
              보러가기
            </p>
          </a>
        </div>
        <h1 className="Text__header__mobile bold">경품수령시 세금안내</h1>
        <p>다음과 같은 세금이 당첨자분께 발생됩니다.</p>
        <div className="Text-wrapper__mobile" style={{ margin: 0 }}>
          <div className="Wrapper__text-wrapper" style={{margin: 0}}>
            <div style={{ flex: 1 }}>
              <h1 className="Text__insert__mobile bold">취득세</h1>
            <p className="Text__insert__mobile">약 160만원</p>
            </div>
            <hr style = {{ marginRight: 26, height: 50 }} />
            <div style={{ flex: 1 }}>
              <h1 className="Text__insert__mobile bold">지방교육세</h1>
              <p className="Text__insert__mobile">약 16만원</p>
            </div>
          </div>
        </div>
        <p className="Text__label--footer__mobile">* 기타 비용(등기 등)은 엘리시아 재단에서 부담합니다.</p>
        <br /><br />
        <h1 className="Text__header__mobile bold">FAQ</h1>
        <p className="QNA--label__mobile">
          <span className="QNA__bold">Q)</span> 임차인 관리는 어떻게 하나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 잔여 임대기간동안 관리해드립니다.
        </p>
        <hr />
        <p className="QNA--label__mobile">
          <span className="QNA__bold">Q)</span> 직접 살고 싶은데 방법이 있을까요? <br /><span className="QNA__bold">A)</span> 전세계약 만료일인 2022년 7월 4일 이후 입주가능합니다.
        </p>
        <hr />
        <p className="QNA--label__mobile">
          <span className="QNA__bold">Q)</span> 바로 매각하고 싶은데 어떻게 하면 되나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 매각절차진행을 도와드립니다.
        </p>
        <hr />
        <br /><br />
        <h1 className="text--header__moblie bold">기타 궁금하신 문의사항은 아래로 문의바랍니다.</h1>
        <div style={{ textAlign: "center"}}>
          <button className="mobile-contact-button" onClick={() => history.push("/contact")}>문의하기</button>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
