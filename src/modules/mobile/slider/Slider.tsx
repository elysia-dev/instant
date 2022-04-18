import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { IAssetBond } from 'src/core/types/reserveSubgraph';

import { useTranslation } from 'react-i18next';

import 'swiper/swiper.scss';

const Slider: React.FunctionComponent<{
  elysiaArray: string[][];
  assetBond: IAssetBond[];
  loanSwitch: boolean;
}> = ({
  elysiaArray,
  assetBond,
  loanSwitch
}) => {
  const [state, setState] = useState({
    SelectedSliders: 0,
  })
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const { t } = useTranslation();

  const elysiaSlides = [];
  for (let i = 0; i < elysiaArray.length; i++) {
    elysiaSlides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div style={{ textAlign: "center" }}>
          <img src={elysiaArray[i][0]} alt="elysia" style={{ height: 300, listStyle: 'none', margin: "auto" }} />
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
          {elysiaSlides}
        </Swiper>
        {
          loanSwitch ? (
            <></>
          ) : (
            [
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
                       {t("portfolio.total")} <span className="portfolio__asset-value">${AssetFunded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                     </p>
                   </div>
                 </div>
               </div>
             );
           })
          )
        }
      </div>
    </>
  );
};

export default Slider;
