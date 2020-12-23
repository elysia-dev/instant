import React from 'react';
import '../css/style.scss';
import BuildingImg01 from '../shared/image/event/BuildingImg01.png';
import BuildingImg02 from '../shared/image/event/BuildingImg02.png';
import BuildingImg03 from '../shared/image/event/BuildingImg03.png';
import BuildingImg04 from '../shared/image/event/BuildingImg04.png';
import BuildingImg05 from '../shared/image/event/BuildingImg05.png';
import BuildingImg06 from '../shared/image/event/BuildingImg06.png';
import ImageEvent_01 from '../shared/image/event/image_event_01.png';
import { Link, useHistory } from 'react-router-dom';
import EventSlider from './slider/EventSlider';

const EventPage = () => {
  var root = window.document.getElementById("root");
  root!.style.background = "linear-gradient(rgb(255, 255, 255) 95px,rgb(132, 13, 6) 95px, rgb(132, 13, 6) 778px, rgb(81, 18, 13) 780px, rgb(81, 18, 13) 892px, rgb(255, 255, 255) 894px)";

  const history = useHistory();
  return (
    <div className="eventpage-container" style={{ maxWidth: 1160, margin: '20px auto', backgroundColor: "#FFF", paddingBottom: 90 }}>
      <img src={ImageEvent_01} className="image__header" alt="Elysia" />
      <div className="container__slider-wrapper">
        <EventSlider />
      </div>
      <table className="table--event-page" style={{ marginBottom: 10 }}>
        <tr>
          <td><h1 className="text__td--first">지급 방식</h1></td>
          <td colSpan={2}>부담부 증여</td>
        </tr>
        <tr>
          <td rowSpan={3}><h1 className="text__td--first">부동산 정보</h1></td>
          <td colSpan={2}>
            <div>
              <span className="bold" style={{ fontSize: 25 }}>주소</span>
              <br /><span  style={{ fontSize: 24 }}>서울특별시 강남구 논현동 149-18번지 1개호실 </span>
              <br /><p className="text--footer">* 구체적인 호수는 개인정보보호차원에서 당첨자에게만 공개됩니다.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span className="bold" style={{ fontSize: 25 }}>시세</span>
              <br /><span  style={{ fontSize: 24 }}>2억원</span>
            </div>
          </td>
          <td>
            <div>
              <span className="bold" style={{ fontSize: 25 }}>임대보증금</span>
              <br /><span  style={{ fontSize: 24 }}>1.6억원</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div>
              <span className="bold" style={{ fontSize: 25 }}>세입자 계약기간</span>
              <br /><span  style={{ fontSize: 24 }}>~2022년 7월</span>
            </div>
          </td>
        </tr>
        <tr>
          <td><h1 className="text__td--first">세금관련 안내</h1></td>
          <td colSpan={2}>
            <div>
              <span style={{ fontSize: 24 }}>다음과 같은 세금이 당첨자분께 발생됩니다.</span>
              <br /><span className="line-height" style={{ fontSize: 24 }}>- 취득세 : 약 160만원<br />- 지방교육세 : 약 16만원</span>
            </div>
          </td>
        </tr>
      </table>
      <p className="Text__label--footer">
        * 등기과정에서의 법무사비용 및 고지된 세목 이외의 세금발생시 엘리시아 재단에서 부담합니다.
      </p>

      <table className="table--event-page">
        <tr>
          <td><h1 className="text__td--first">증빙서류</h1></td>
          <td>
          <span className="bold" style={{ fontSize: 25 }}>부동산 등기부등본</span>
            <br />
            <a href="https://drive.google.com/file/d/16McnIM8GQ2ugqo-5vVkJjZalVm9A72F9/view?usp=sharing" target='_blank' className="Text__link">
              <p className="button__hyperlink">바로가기</p>
            </a>
          </td>
          <td>
          <span className="bold" style={{ fontSize: 25 }}>전세계약서</span>
            <br />
            <a href="https://drive.google.com/file/d/1g4xqw8eBbKC24QgXyIW_rkqaugeCh7Nk/view?usp=sharing" target='_blank' className="Text__link">
              <p className="button__hyperlink">바로가기</p>
            </a>
          </td>
        </tr>
      </table>

      <table className="table--event-page" style={{ marginBottom: 80 }}>
        <tr>
          <td rowSpan={3}><h1 className="text__td--first">FAQ</h1></td>
          <td colSpan={2}>
            <p className="QNA--label">
              <span className="QNA__bold">Q)</span> 임차인 관리는 어떻게 하나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 잔여 임대기간동안 관리해드립니다.
            </p>
        </td>
        </tr>
        <tr>
          <td colSpan={2}><p className="QNA--label">
          <span className="QNA__bold">Q)</span> 직접 살고 싶은데 방법이 있을까요? <br /><span className="QNA__bold">A)</span> 전세계약 만료일인 2022년 7월 4일 이후 입주가능합니다.
        </p></td>
        </tr>
        <tr>
          <td colSpan={2}><p className="QNA--label">
          <span className="QNA__bold">Q)</span> 바로 매각하고 싶은데 어떻게 하면 되나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 매각절차진행을 도와드립니다.
        </p></td>
        </tr>
      </table>

      <h1 className="text--header__contact">기타 궁금하신 사항은 아래로 문의바랍니다</h1>
      <div style={{ textAlign: "center"}}>
        <button className="button__contact" onClick={() => history.push("/contact")}>문의하기</button>
      </div>
    </div>
  );
}

export default EventPage;
