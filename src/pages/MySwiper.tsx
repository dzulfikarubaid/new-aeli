import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const MySwiper = () => {
  return (
    <Swiper
  
      className='h-full w-full'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
      }}
      effect='fade'
      fadeEffect={{crossFade: true}}
      onSlideChange={(swiper) =>
        isNaN(swiper.realIndex) && swiper.slideTo(0)
      }
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      
          <img className='max-w-full min-w-full' src="image 1.png" alt="" />
        
      </SwiperSlide>
      <SwiperSlide>
       <img  className='max-w-full min-w-full' src="image 1.png" alt="" />
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default MySwiper;
