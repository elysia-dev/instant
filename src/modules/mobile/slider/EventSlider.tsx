import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import BuildingImg01 from '../../../shared/image/event/BuildingImg01.png';
import BuildingImg02 from '../../../shared/image/event/BuildingImg02.png';
import BuildingImg03 from '../../../shared/image/event/BuildingImg03.png';
import BuildingImg04 from '../../../shared/image/event/BuildingImg04.png';
import BuildingImg05 from '../../../shared/image/event/BuildingImg05.png';
import BuildingImg06 from '../../../shared/image/event/BuildingImg06.png';
import { useTranslation } from 'react-i18next';

import 'swiper/swiper.scss';


const EventSlider: React.FunctionComponent = () => {
  const [state, setState] = useState({
    SelectedSliders: 0,
  })
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const { t, i18n } = useTranslation();

  const slides = [];
  const ImageArray = [
    BuildingImg01, BuildingImg02, BuildingImg03, BuildingImg04, BuildingImg05, BuildingImg06
  ];
  for (let i = 0; i < 6; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div style={{ textAlign: "center" }}>
          <img src={ImageArray[i]} alt="elysia" style={{ width: 280, height: 245, listStyle: 'none', margin: "auto" }} />
        </div>
      </SwiperSlide>
    );
  }
  return (
    <>
      <div className="mobile-slider-handler__event">
        <Swiper style={{ width: 280, height: 300 }}
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

export default EventSlider;
