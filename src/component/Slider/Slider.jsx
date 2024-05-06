import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
 import { Fade } from "react-awesome-reveal";
function Slider() {
  const sliderSettings={
    slidesPerView:1,
  }
  return (
    <>
    <div  id='news' >
    <Fade direction='up' delay={7}><div> <h1>آخر أخبارنا</h1></div></Fade>
    
  

    <div className='slider '>
      
      <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
      }}
      {...sliderSettings}>
      <SliderButton/>

    
      <SwiperSlide  >
       <div className='img-slider  '>
       <div class="box">
    <img src="vvs.png"/>

    <div class="content">

      <h3>test title</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>

  </div>

        </div> 
        </SwiperSlide>
        <SwiperSlide  >
       <div className='img-slider  '>
       <div class="box">
    <img src="mn.png"/>

    <div class="content">

      <h3>test title</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>

  </div>

        </div> 
        </SwiperSlide>
        <SwiperSlide  >
       <div className='img-slider  '>
       <div class="box">
    <img src="mnb.jpg"/>

    <div class="content">

      <h3>test title</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>

  </div>

        </div> 
        </SwiperSlide>
      
       </Swiper>
       
       <div className='background-slider'>

      {/* <img className='slider-r' src='./Frame9.png' width={24}/>
      <img className='slider-l' src='./Frame8.png' width={24}/>  */}
     </div>
     </div>
     <div className='blur4 '></div>

     </div>
    </>
  )
}

export default Slider
const SliderButton=()=>{
  const swiper =useSwiper()
  return(
    <>
    <Fade direction='right'>     <img onClick={()=>swiper.slidePrev()} className='slider-r' src='./Frame9.png' width={24} alt="da"/>
</Fade>
     <Fade direction='left'><img onClick={()=>swiper.slideNext()} className='slider-l' src='./Frame8.png' width={24} alt="d"/></Fade> </>
     
  
  )
}