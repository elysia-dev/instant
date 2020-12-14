import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import ElysiaIcon from '../../../shared/image/square-elysia-off.png';
import DefiIcon from '../../../shared/image/square-defi-off.png';
import OnboardingIcon from '../../../shared/image/square-onboarding-off.png';
import Onboarding from '../../../shared/image/onboarding.png';
import Defi from '../../../shared/image/Defi.png';
import ElysiaMobile from '../../../shared/image/elysia_mobile.png';
import { useTranslation } from 'react-i18next';

import 'swiper/swiper.scss';


const Slider: React.FunctionComponent = () => {
  const [state, setState] = useState({
    SelectedSliders: 0,
  })
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const { t, i18n } = useTranslation();

  const slides = [];
  const ImageArray = [
    Onboarding, ElysiaMobile, Defi
  ];
  for (let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div>
          <img src={ImageArray[i]} alt="elysia" style={{ height: 310, listStyle: 'none', margin: "auto" }} />
        </div>
      </SwiperSlide>
    );
  }
  return (
    <>
      <div className="mobile-slider-container">
        {[
          [OnboardingIcon, "onboarding", "onboarding_label"],
          [ElysiaIcon, "elysia_app", "elysia_app_label"],
          [DefiIcon, "defi", "defi_label"]
        ].map(([SliderIcon, HeaderLabel, Label], index) => {
          return (
            <div className="mobile-slider-wrapper" style={{
              ...(state.SelectedSliders === index ?
                { opacity: 1 } : { opacity: 0 })
            }}
            >
              <img src={SliderIcon} className="mobile-slider-square" alt="Elysia" />
              <p className="mobile-service-header-label mobile-header-label">
                {i18n.t('service.' + HeaderLabel)}
              </p>
              <p className="mobile-service-label">
                {i18n.t('service.' + Label)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mobile-slider-handler">
        <Swiper style={{ width: 300, height: 350 }}
          spaceBetween={200}
          loop={true}
          autoplay={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(slides) => setState({ ...state, SelectedSliders: slides.realIndex })}
        >
          {slides}
        </Swiper>
      </div>
    </>


  );
};

export default Slider;
