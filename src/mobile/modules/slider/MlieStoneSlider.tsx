import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import i18n from '../../../i18n/i18n';

import 'swiper/swiper.scss';


const MlieStoneSlider: React.FunctionComponent = () => {
  const [state, setState] = useState({
    SelectedMlieStoneSliders: 0,
  })
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return ( 
    <>
      <div className="mliestone-slider-container">
        <p className="team-header-text header-label">{i18n.t("mliestone.header_label")}</p>
        {
          Array(i18n.t('mliestone.timeline').length).fill(0).map((_x, index) => {
            return (
              <>
                <div className={"mliestone-label-wrapper"} id={"mliestone-" + index}  style={{
                    ...(state.SelectedMlieStoneSliders === index ?
                      { opacity: 1 } : { opacity: 0 })
                    }}
                  >   
                  <h1 className={"mliestone-label"}>{i18n.t('mliestone.timeline_contant.' + index)}</h1>
                  <p className={"mliestone-label"}>{i18n.t('mliestone.timeline.' + index)}</p>
                </div>
              </>
            );
          })
        }
      </div>
      
      <div className="mliestone-slider-line" />
      <div className="mliestone-slider-handler">
        <Swiper style={{ width: 300, height: 50 }} 
          spaceBetween={200}
          loop={true}
          autoplay={{ delay: 5000 }}
          slidesPerView={1} 
          navigation={true}
          onSlideChange={(slides) => setState({ ...state, SelectedMlieStoneSliders: slides.realIndex })}
          >
          {
            Array(i18n.t('mliestone.timeline').length).fill(0).map((_x, index) => {
              return (
                <>
                  <SwiperSlide key={`slide-${index}`} tag="li">
                    {/* <div className={"mliestone-dot"} id={"mliestone-" + index} >
                      <p className={"mliestone-lower-text"}>{i18n.t('mliestone.timeline.' + index)}</p>
                      <h1 className={"mliestone-lower-text"}>{i18n.t('mliestone.timeline_contant.' + index)}</h1>
                    </div> */}
                    <div className="mliestone-slider-dot" />
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
