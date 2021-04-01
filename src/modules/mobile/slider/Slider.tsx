import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import ElysiaIcon from '../../../shared/image/square-elysia-off.png';
import DefiIcon from '../../../shared/image/square-defi-off.png';
import OnboardingIcon from '../../../shared/image/square-onboarding-off.png';
import ElysiaAsset3 from '../../../shared/image/portfolio/elysia-asset-3.png';
import ElysiaAsset4 from '../../../shared/image/portfolio/elysia-asset-4.png';
import ElysiaAsset5 from '../../../shared/image/portfolio/elysia-asset-5.png';
import ElysiaAsset6 from '../../../shared/image/portfolio/elysia-asset-6.png';
import ElysiaAsset7 from '../../../shared/image/portfolio/elysia-asset-7.png';
import ElysiaAssetRed1 from '../../../shared/image/portfolio/elysia-asset-red-1.png';
import ElysiaAssetBlue1 from '../../../shared/image/portfolio/elysia-asset-blue-1.png';

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
    ElysiaAsset3, ElysiaAsset4, ElysiaAsset5, ElysiaAsset6, ElysiaAsset7, ElysiaAssetRed1, ElysiaAssetBlue1
  ];
  for (let i = 0; i < ImageArray.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div style={{ textAlign: "center" }}>
          <img src={ImageArray[i]} alt="elysia" style={{ height: 300, listStyle: 'none', margin: "auto" }} />
        </div>
      </SwiperSlide>
    );
  }
  return (
    <>
      <div className="mobile-slider-container">
        <div className="portfolio__asset-funded">
          Funded
        </div>
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
        {[
           ["Elysia Asset #3", "1041150"],
           ["Elysia Asset #4", "814810"],
           ["Elysia Asset #5", "1040950"],
           ["Elysia Asset #6", "1182180"],
           ["Elysia Asset #7", "823045"],
           ["Elysia Asset Red #1", "181704"],
           ["Elysia Asset Blue #1", "426075"],
        ].map(([AssetName, AssetFunded], index) => {
          return (
            <div className="portfolio__text-container">
              <div className="portfolio__text-wrapper" style={{
                ...(state.SelectedSliders === index ?
                  { opacity: 1 } : { opacity: 0 })
              }}
              >
                <div className="portfolio__asset__container"
                  data-sa-margin={index * 15}
                >
                  <h1 className="portfolio__asset-name">{AssetName}</h1>
                  <p className="portfolio__asset-info funded">
                    Total <span className="portfolio__asset-value">${AssetFunded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
