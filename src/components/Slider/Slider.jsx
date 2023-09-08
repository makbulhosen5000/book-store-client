import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./styles.css";
import { Scrollbar } from "swiper/modules";
const Slider = () => {
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
            src="https://i.ibb.co/s3MgWrn/building-lake.jpg"
            alt=""
            style={{ height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src="https://i.ibb.co/sHcf1xN/apu.jpg"
            alt=""
            style={{ height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src="https://i.ibb.co/W6Lrzmq/glass-buildings-seen-from-lake.jpg"
            alt=""
            style={{ height: "500px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src="https://i.ibb.co/mh7bFdx/2022-06-04.jpg"
            alt=""
            style={{ height: "500px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
