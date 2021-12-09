// import Swiper core and required modules 
import {EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
// Import Swiper styles 
import 'swiper/css'; import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/scrollbar';

import "swiper/css/effect-fade"
import SwiperOne from '../public/hero1.jpg'
import SwiperTwo from '../public/hero2.jpg'
import SwiperThree from '../public/hero3.jpg'
import SwiperFour from '../public/hero4.jpg'
import SwiperFive from '../public/hero5.jpg'

const Hero = () => {
  return(
    <main className="hero min-h-screen flex justify-center  w-screen overflow-hidden relative">
    
      <div className="content h-full absolute z-20 flex flex-col justify-center items-center -mt-32">
        <h1 className="font-black text-gray-200 text-center text-5xl">Paul Ray Photography </h1>
        <p className="mt-10 text-center text-yellow-400 bg-gray-900 bg-opacity-30 p-4 text-xl text-stroke-2 ">Experience Professional Photography</p>
      </div>
      
      <Swiper
      className=""
        // install Swiper modules 
        autoplay={{
          "delay": 5000,
          "disableOnInteraction": false
        }}
        modules={[Autoplay, Pagination, A11y, EffectFade]}
        spaceBetween={0} 
        loop={true} 
        effect={'fade'} 
        slidesPerView={1} 
        pagination={{ clickable: true }} 
        onSwiper={(swiper) => console.log(swiper)} 
        onSlideChange={() => console.log('slide change')}
        > 
        
        <SwiperSlide > 
          <img src={SwiperOne.src} className ="min-h-screen object-cover" alt="Paul Ray Photography" /> 
        </SwiperSlide> 
        <SwiperSlide> 
          <img src={SwiperTwo.src} alt="Paul Ray Photography" className ="min-h-screen object-cover" /> 
        </SwiperSlide> 
        <SwiperSlide> 
          <img src={SwiperThree.src} alt="Paul Ray Photography" className ="min-h-screen object-cover" /> 
        </SwiperSlide> 
        <SwiperSlide> 
          <img src={SwiperFive.src} alt="Paul Ray Photography" className ="min-h-screen object-cover" /> 
        </SwiperSlide> 
      </Swiper>
      <style jsx>{` 
        img {
          display: block;
          filter: brightness(0.6);
        } 
      
      `}</style>
    </main>
    )
}

export default Hero 