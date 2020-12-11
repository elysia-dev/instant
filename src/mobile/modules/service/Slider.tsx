import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import ElysiaIcon from '../../../shared/image/square-elysia-off.png';
import DefiIcon from '../../../shared/image/square-defi-off.png';
import OnboardingIcon from '../../../shared/image/square-onboarding-off.png';

import 'swiper/swiper.scss';

const Slider: React.FC = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return ( 
    <Swiper style={{height:'376px'}} 
      spaceBetween={50}
      loop={true}
      slidesPerView={3} 
      onSlideChange={() => console.log('slide change')} > 
      <SwiperSlide>
        <div>
          <img src={ElysiaIcon} alt="elysia" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={DefiIcon} alt="elysia" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={OnboardingIcon} alt="elysia" />
        </div>
      </SwiperSlide>
    </Swiper> 
  ); 
}; 

export default Slider;
