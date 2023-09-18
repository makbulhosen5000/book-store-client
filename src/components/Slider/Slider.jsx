import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./styles.css";
import { Scrollbar } from "swiper/modules";
const Slider = () => {

  const slider1 = "https://i.ibb.co/s3MgWrn/building-lake.jpg";
  const slider2 = "https://i.ibb.co/sHcf1xN/apu.jpg";
  const slider3 = "https://i.ibb.co/W6Lrzmq/glass-buildings-seen-from-lake.jpg";
  const slider4 = "https://i.ibb.co/mh7bFdx/2022-06-04.jpg";
  
  return (
    <div>
      <Swiper
        scrollbar={{
          type: "progressbar",
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider1 ? slider1 : "No Internet"}
            alt="Slider"
            style={{ height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider2 ? slider2 : "No Internet"}
            alt="slider"
            style={{ height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider3 ? slider3 : "No Internet"}
            alt="Slider"
            style={{ height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider4 ? slider4 : "No Internet"}
            alt="Slider"
            style={{ height: "500px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
