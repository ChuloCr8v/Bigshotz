// import Swiper core and required modules 
import { EffectFade, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles 
import 'swiper/css'; import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroImages from './HeroImages'
import "swiper/css/effect-fade"
import axios from 'axios'
import { useState, useEffect } from 'react'

import Loading from './Loading'

const Hero = () => {


  const [loading, setLoading] = useState(true)
  const [heroImages, setHeroImages] = useState([])

  const fetchData = async () => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=random&per_page=100&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`)
    const data = await res.data.results
    setHeroImages(data)
    setLoading(false)
  }

  useState(() => {
    fetchData()
  }, {})

  if (loading) return (
    <Loading />
  )

  return (
    <main className="hero min-h-screen flex flex-col justify-center  items-center w-screen overflow-hidden relative">

      <div className="content absolute z-20 ">
        <h1 className="font-black text-gray-200 text-center text-5xl">Big Shotz Photography </h1>
        <p className="mt-10 mx-4 text-center text-yellow-400 bg-gray-900 bg-opacity-30 p-4 text-xl text-stroke-2 ">Experience Professional Photography</p>
      </div>

      <Swiper
        className="h-screen w-screen"
        // install Swiper modules 
        autoplay={{
          "delay": 5000,
          "disableOnInteraction": false
        }}
        modules={[Autoplay, A11y, EffectFade]}
        spaceBetween={0}
        loop={true}
        effect={'fade'}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        {heroImages.map((heroImg, index) => (
          <SwiperSlide >
            <img src={heroImg.urls.regular} key={index} className="object-cover z-40 h-full w-full " alt="Paul Ray Photography" />
          </SwiperSlide>
        ))}
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