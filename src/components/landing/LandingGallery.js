import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Close } from "@mui/icons-material";

import video1 from "../../images/houseimages/FirstFloor.mov";
import video2 from "../../images/houseimages/SecondFloor.mov";

import "swiper/css";
import "swiper/css/navigation";

// const images = [landingHouse, heroImage, demoHills];

const LandingGallery = ({ onClose, gallery, width }) => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={width > 900 ? 1 : "auto"}
      modules={[Navigation]}
      className="mySwiper"
      direction={width > 900 ? "horizontal" : "vertical"}
    >
      <Close className="close-icon" onClick={onClose} />
      <SwiperSlide>
        <video autoPlay={true} loop={true} controls={true} playsInline muted>
          <source src={video1} type="video/mp4" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <video loop={true} controls={true} playsInline muted>
          <source src={video2} type="video/mp4" />
        </video>
      </SwiperSlide>
      {gallery.map((image, id) => {
        return (
          <SwiperSlide key={id}>
            {<img src={image} alt={`landing page galllery photo ${id + 1}`} />}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LandingGallery;
