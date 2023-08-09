import React from "react"
import "./Testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
/*import swiper*/import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data=[ 
{
    avatar:AVTR1,
    name:'Tina Snow',
    review: '“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all."'
},
{
    avatar:AVTR2,
    name:'Travis',
    review:' “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save."'
},
{
    avatar:AVTR3,
    name:'Enrique',
    review:' “Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly great. Thanks for being so awesome. High fives!”'
},
{
    avatar:AVTR4,
    name:'Hira',
    review:'Happy handwritten thank you notes… I just wanted to let you know that its been great working with you.'
}]
const Testimonials =()=>{
    return(
    <section id ='testimonials'>
    <h5>Review from client</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
    >
    
        { 
        data.map(({avatar,name,review},index)=>{
            return( 
    
        <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
                <img src={avatar}/>
                </div>

            <h5 className='client__name'>{name}</h5>
         
                
                <small className='client__review'>{review}</small>
        
        </SwiperSlide>
    )
})

   }   
       
    </Swiper>
    </section>
    )
}
export default Testimonials