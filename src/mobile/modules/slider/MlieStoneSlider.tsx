import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { useHistory, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import 'swiper/swiper.scss';


const MlieStoneSlider: React.FunctionComponent = () => {
  const [state, setState] = useState({
    SelectedMlieStoneSliders: 0,
  })
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const { t, i18n } = useTranslation();

  return ( 
    <>
      <div className="mobile-mliestone-slider-container">
        <p className="mobile-team-header-text mobile-header-label">{i18n.t("mliestone.header_label")}</p>
        {
          Array(15).fill(0).map((_x, index) => {
            return (
              <>
                <div className={"mobile-mliestone-label-wrapper"} id={"mliestone-" + index}  style={{
                    ...(state.SelectedMlieStoneSliders === index ?
                      { opacity: 1 } : { opacity: 0 })
                    }}
                  >   
                  <h1 className={"mobile-mliestone-label"}>{i18n.t('mliestone.timeline_contant.' + index)}</h1>
                  <p className={"mobile-mliestone-label"}>{i18n.t('mliestone.timeline.' + index)}</p>
                </div>
              </>
            );
          })
        }
      </div>
      
      <div className="mobile-mliestone-slider-line" />
      <div className="mobile-mliestone-slider-handler">
        <Swiper style={{ width: 300, height: 50 }} 
          spaceBetween={200}
          loop={true}
          autoplay={{ delay: 5000 }}
          slidesPerView={1} 
          navigation={true}
          onSlideChange={(slides) => setState({ ...state, SelectedMlieStoneSliders: slides.realIndex })}
          >
          {
            Array(15).fill(0).map((_x, index) => {
              return (
                <>
                  <SwiperSlide key={`slide-${index}`} tag="li">
                    <div className="mobile-mliestone-slider-dot" />
                  </SwiperSlide>
                </>
              );
            })
          }
        </Swiper> 
      </div>
    </>
    
    
  ); 
}; 

export default MlieStoneSlider;
