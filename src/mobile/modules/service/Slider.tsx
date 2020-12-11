import React, { useState, useEffect, useRef } from "react";
import Onboarding from '../../../shared/image/onboarding.png';
import Defi from '../../../shared/image/Defi.png';
import ElysiaMobile from '../../../shared/image/elysia_mobile.png';


const TOTAL_SLIDES = 3;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = React.createRef<HTMLDivElement>();
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current!.style.transition = "all 0.5s ease-in-out";
    slideRef.current!.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide, slideRef]);
return (
    <div style={{ width: "60%", overflow: "hidden" }}>
      {currentSlide}
      <div style={{ width: "100%", display: "flex"}} ref={slideRef}>
        <img src={Onboarding} alt="elysia" />
        <img src={Defi} alt="elysia" />
        <img src={ElysiaMobile} alt="elysia" />
      </div>
      {/* <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button> */}
    </div>
  );
};
