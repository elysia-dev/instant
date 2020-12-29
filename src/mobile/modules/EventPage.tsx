import React from 'react';
import '../css/mobileStyle.scss';
import ElysiaLogo from '../../shared/image/Elysia_Logo.png';
import ImageEvent_01 from '../../shared/image/event/image_mobile_event_01.png';
import EventSlider from './slider/EventSlider';
import { Link, useHistory } from 'react-router-dom';

const EventPage = () => {
  const history = useHistory();
  return (
    <div className="background__event__mobile">
      <div className="eventpage-container__mobile" style={{ width: 300, margin: '0px auto', backgroundColor: "#FFF", paddingBottom: 90 }}>
      <img src={ImageEvent_01} className="image__header__mobile" alt="Elysia"/>
      <div className="container__image--bottom">
      * 본 이벤트는 엘리시아 재단과<br />소속 법인인 ELYSIA PLATFORM PTE. LTD에서<br />기획하고 진행하였으며 책임 소재는 재단에게 있습니다.
      </div>
      <div className="container__slider-wrapper__mobile">
        <EventSlider />
      </div>

      <h1 className="text__table-header">지급방식</h1>
      <table className="table--event-page__mobile" style={{ marginBottom: 80 }}>
        <tr>
          <td>
            <p style={{ fontSize: 14 }}>
            (주) 엘리시아에서 경품 당첨자로<br />매물 소유권 100% 이전<br />
            <p className="text--footer__mobile">* 임대보증금 포함한 부동산 증여 (명의 이전)</p>
            </p>
          </td>
        </tr>
      </table>

      <h1 className="text__table-header">부동산 정보</h1>
      <table className="table--event-page__mobile" style={{ marginBottom: 10 }}>
        <tr>
          <td><h1 className="text__td--first__mobile">주소</h1></td>
          <td>
            <span  style={{ fontSize: 14 }}>서울특별시 강남구 논현동 149-18번지 1개호실 </span>
            <br /><p className="text--footer__mobile">* 구체적인 호수는 개인정보보호차원에서 당첨자에게만 공개됩니다.</p>
          </td>
        </tr>
        <tr>
          <td><h1 className="text__td--first__mobile">시세</h1></td>
          <td>
            <p style={{ fontSize: 14 }}>약 2억원</p>
          </td>
        </tr>
        <tr>
          <td><h1 className="text__td--first__mobile">임대<br />보증금</h1></td>
          <td>
            <p style={{ fontSize: 14 }}>1.6억원 <span style={{ fontSize: 13 }}>(재단이 보증금 지원예정)</span></p>
          </td>
        </tr>
        <tr>
          <td><h1 className="text__td--first__mobile">세입자<br />계약기간</h1></td>
          <td>
            <p style={{ fontSize: 14 }}>~2022년 7월</p>
          </td>
        </tr>
        <tr>
          <td><h1 className="text__td--first__mobile">세금관련<br />안내</h1></td>
          <td>
            <div>
              <span style={{ fontSize: 14 }}>다음과 같은 세금이 발생합니다.</span>
              <br /><span className="line-height__mobile" style={{ fontSize: 14 }}>- 취득세 : 약 160만원<br />- 지방교육세 : 약 16만원</span>
            </div>
          </td>
        </tr>
      </table>
      <p className="Text__label--footer__mobile">
        * 등기과정에서 법무사비용 및 고지된 세목 이외의 세금발생시 엘리시아 재단에서 부담합니다.
      </p>


      <h1 className="text__table-header">증빙서류</h1>
      <table className="table--event-page__mobile">
        <tr>
          <td style={{ width: 75 }}>
            <h1 className="text__td--first__mobile">부동산<br />등기부등본</h1>
          </td>
          <td>
            <a href="https://drive.google.com/file/d/16McnIM8GQ2ugqo-5vVkJjZalVm9A72F9/view?usp=sharing" target='_blank' className="Text__link">
              <p className="button__hyperlink__mobile">바로가기</p>
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ width: 75 }}>
            <h1 className="text__td--first__mobile">전세계약서</h1>
          </td>
          <td>
            <a href="https://drive.google.com/file/d/1jYfShxU5ktkYOnulN8OQdFVv5qUbDN6e/view?usp=sharing" target='_blank' className="Text__link">
              <p className="button__hyperlink__mobile">바로가기</p>
            </a>
          </td>
        </tr>
      </table>

      <h1 className="text__table-header">FAQ</h1>
      <table className="table--event-page__mobile" style={{ marginBottom: 80 }}>
        <tr>
          <td>
            <p className="QNA--label__mobile">
              <span className="QNA__bold">Q)</span> 임차인 관리는 어떻게 하나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 잔여 임대기간동안 관리해드립니다.
            </p>
          </td>
        </tr>
        <tr>
          <td ><p className="QNA--label__mobile">
          <span className="QNA__bold">Q)</span> 직접 살고 싶은데 방법이 있을까요? <br /><span className="QNA__bold">A)</span> 전세계약 만료일인 2022년 7월 4일 이후 입주가능합니다.
        </p></td>
        </tr>
        <tr>
          <td><p className="QNA--label__mobile">
          <span className="QNA__bold">Q)</span> 바로 매각하고 싶은데 어떻게 하면 되나요? <br /><span className="QNA__bold">A)</span> 파트너 부동산을 통해 매각절차진행을 도와드립니다.
        </p></td>
        </tr>
        <tr>
          <td><p className="QNA--label__mobile">
          <span className="QNA__bold">Q)</span> 경품수령처리는 어디에서 담당하시나요?<br /><span className="QNA__bold">A)</span> 경품수령후 모든 사후처리는 엘리시아 재단에서 직접 지원 예정입니다.
        </p></td>
        </tr>
      </table>

      <h1 className="text--header__moblie">기타 궁금하신 사항은<br />아래로 문의바랍니다</h1>
      <div style={{ textAlign: "center"}}>
        <button className="mobile-contact-button" onClick={() => history.push("/contact")}>문의하기</button>
      </div>
    </div>
    </div>
  );
}

export default EventPage;
