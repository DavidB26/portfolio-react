import React from "react";
import "./testimonials.css";
import CLT1 from "../../assets/avatar1.jpg";
import CLT2 from "../../assets/avatar2.jpg";
import CLT3 from "../../assets/avatar3.jpg";
import CLT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const data = [
  {
    avatar: CLT1,
    name: 'Tina Snow',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiisLorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis"
  },
  {
    avatar: CLT2,
    name: 'Tina Snow',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiisLorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis"
  },
  {
    avatar: CLT3,
    name: 'Tina Snow',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiisLorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis"
  },
  {
    avatar: CLT4,
    name: 'Tina Snow',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiisLorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore, quas, nihil harum esse veritatis voluptatibus blanditiis  quas, nihil harum esse veritatis voluptatibus blanditiis"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
     
      
      className="container testimonials__container">
     {
       data.map(({avatar,name,review},index) => {
         return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="cliente__review">
           {review}
          </small>
        </SwiperSlide>
         )
       })
     }
    
      </Swiper>
    </section>
  );
};

export default Testimonials;
