import React from 'react';
import '../css/style.scss';
import BuildingImg01 from '../shared/image/event/BuildingImg01.png';
import BuildingImg02 from '../shared/image/event/BuildingImg02.png';
import BuildingImg03 from '../shared/image/event/BuildingImg03.png';
import BuildingImg04 from '../shared/image/event/BuildingImg04.png';
import BuildingImg05 from '../shared/image/event/BuildingImg05.png';
import BuildingImg06 from '../shared/image/event/BuildingImg06.png';
import { Link, useHistory } from 'react-router-dom';

const EventPage = () => {
  
  const history = useHistory();
  return (
    <div className="eventpage-container" style={{ maxWidth: 1190, margin: '15vh auto', padding: 30 }}>
      <h1 className="text--header bold">엘리시아 앱 상품 출시 기념 이벤트</h1>
      <p className="text--header__label">
        엘리시아 모바일 전용 상품 출시를 기념하여 엘리시아 고객들을 대상으로 <span style={{ color: "#3679B5"}}>‘엘리시아 에셋 1호’</span> 증정 이벤트를 실시합니다.<br />
      </p>
      <div className="container__building-image">
        <img src={BuildingImg01} className="img--building" alt="Elysia"/>
        <img src={BuildingImg02} className="img--building img--building__right" alt="Elysia"/>
        <img src={BuildingImg03} className="img--building" alt="Elysia"/>
        <img src={BuildingImg04} className="img--building img--building__right" alt="Elysia"/>
        <img src={BuildingImg05} className="img--building" alt="Elysia"/>
        <img src={BuildingImg06} className="img--building img--building__right" alt="Elysia"/>
      </div>
      
      <div className="Dot--Text" /><h1 className="Text__Dot-header">지급방식</h1>
      <div className="Text-wrapper">
        <p className="Text__insert">경품 증여</p>
      </div>
      <div className="Dot--Text" /><h1 className="Text__Dot-header">부동산 정보</h1>
      <div className="Text-wrapper">
        <p className="Text__insert">
          (1) 주소 : 서울특별시 강남구 논현동 149-18번지 1개호실 
          <br /><p className="Text__insert-label">* 구체적인 호수는 개인정보보호차원에서 당첨자에게만 공개됩니다.</p>
        </p>
        <p className="Text__insert">
          (2) 시세 : 2억원
        </p>
        <p className="Text__insert">
          (3) 전세보증금 : 1.6억원
        </p>
        <p className="Text__insert">
          (4) 세입자 계약기간 : ~ 2022년 7월    
        </p>
      </div>
      <div className="Dot--Text" /><h1 className="Text__Dot-header">증빙서류</h1>
      <div className="Text-wrapper">
        <p className="Text__insert">
          (1) 부동산등기부등본    
        </p>
        <a href="https://drive.google.com/file/d/16McnIM8GQ2ugqo-5vVkJjZalVm9A72F9/view?usp=sharing">
          <p className="Text__hyperlink">
              https://drive.google.com/file/d/16McnIM8GQ2ugqo-5vVkJjZalVm9A72F9/view?usp=sharing
          </p>
        </a>
        <p className="Text__insert">
          (2) 전세계약서  
        </p>
        <a href="https://drive.google.com/file/d/1g4xqw8eBbKC24QgXyIW_rkqaugeCh7Nk/view?usp=sharing">
          <p className="Text__hyperlink">
            https://drive.google.com/file/d/1g4xqw8eBbKC24QgXyIW_rkqaugeCh7Nk/view?usp=sharing
          </p>
        </a>
        
      </div>
      <div className="Dot--Text" /><h1 className="Text__Dot-header">경품수령시 세금안내</h1>
      <p className="Text__label">다음과 같은 세금이 당첨자분께 발생됩니다.</p>
      <div className="Text-wrapper Text-wrapper--footer">
        <p className="Text__insert">(1) 취득세 : 약 160만원</p>
        <p className="Text__insert">(2) 지방교육세 : 약 16만원</p>
      </div>
      <p className="Text__label--footer">
      * 기타 비용(등기 등)은 엘리시아 재단에서 부담합니다.
      </p>
      <div className="Dot--Text" /><h1 className="Text__Dot-header">FAQ</h1>
        <p className="QNA--label">
          <span className="QNA__bold">Q)</span> 임차인 관리는 어떻게 하나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 잔여 임대기간동안 관리해드립니다.
        </p>
        <hr style={{ marginLeft: 35 }} />
        <p className="QNA--label">
          <span className="QNA__bold">Q)</span> 직접 살고 싶은데 방법이 있을까요? <br /><span className="QNA__bold">A)</span> 전세계약 만료일인 2022년 7월 4일 이후 입주가능합니다.
        </p>
        <hr style={{ marginLeft: 35 }} />
        <p className="QNA--label">
          <span className="QNA__bold">Q)</span> 바로 매각하고 싶은데 어떻게 하면 되나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 매각절차진행을 도와드립니다.
        </p>
        <hr style={{ marginLeft: 35 }} />
        <h1 className="text--header__contact">기타 궁금하신 문의사항은 아래로 문의바랍니다.</h1>
        <div style={{ textAlign: "center"}}>
          <button className="mobile-contact-button" onClick={() => history.push("/contact")}>문의하기</button>
        </div>
    </div>
  );
}

export default EventPage;
